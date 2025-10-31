import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsDir = path.join(__dirname, '../shared/translations');
const backupDir = path.join(__dirname, '../.translation-backup');

// Create backup first
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

// Parse translation file
function parseTranslationFile(content) {
  const objectMatch = content.match(/export const \w+ = ({[\s\S]*});?\s*$/);
  if (!objectMatch) {
    throw new Error('Could not parse translation file');
  }
  
  try {
    return eval(`(${objectMatch[1]})`);
  } catch (e) {
    console.error('Error parsing object:', e);
    throw e;
  }
}

// Deep merge - prefer existing translation over English
function deepMerge(target, source, enReference, path = []) {
  const result = {};
  
  // Get all keys from English reference to maintain order
  const allKeys = Object.keys(enReference);
  
  for (const key of allKeys) {
    const currentPath = [...path, key];
    const pathStr = currentPath.join('.');
    
    // Check if we have translation in target (original file)
    if (key in target) {
      if (typeof enReference[key] === 'object' && enReference[key] !== null && !Array.isArray(enReference[key])) {
        // Recursive merge for nested objects
        result[key] = deepMerge(
          target[key] || {},
          source[key] || {},
          enReference[key],
          currentPath
        );
      } else {
        // Use translation from target (original)
        result[key] = target[key];
      }
    } 
    // Check case-insensitive keys (trustIndicators vs trustindicators)
    else {
      const lowerKey = key.toLowerCase();
      const matchingKey = Object.keys(target).find(k => k.toLowerCase() === lowerKey);
      
      if (matchingKey) {
        if (typeof enReference[key] === 'object' && enReference[key] !== null && !Array.isArray(enReference[key])) {
          result[key] = deepMerge(
            target[matchingKey] || {},
            source[key] || {},
            enReference[key],
            currentPath
          );
        } else {
          result[key] = target[matchingKey];
        }
      }
      // No translation found, use source (which might be English from restructuring)
      else if (key in source) {
        result[key] = source[key];
      }
      // Last resort: use English reference
      else {
        result[key] = enReference[key];
      }
    }
  }
  
  return result;
}

// Convert object to string with proper formatting
function objectToString(obj, indent = 2, currentIndent = '') {
  const spaces = ' '.repeat(indent);
  let result = '{\n';
  
  const entries = Object.entries(obj);
  entries.forEach(([key, value], index) => {
    const isLast = index === entries.length - 1;
    result += `${currentIndent}${spaces}${key}: `;
    
    if (typeof value === 'string') {
      const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      result += `"${escaped}"`;
    } else if (Array.isArray(value)) {
      result += '[\n';
      value.forEach((item, i) => {
        const isLastItem = i === value.length - 1;
        const escaped = typeof item === 'string' ? item.replace(/\\/g, '\\\\').replace(/"/g, '\\"') : JSON.stringify(item);
        result += `${currentIndent}${spaces}${spaces}"${escaped}"${isLastItem ? '' : ','}\n`;
      });
      result += `${currentIndent}${spaces}]`;
    } else if (typeof value === 'object' && value !== null) {
      result += objectToString(value, indent, currentIndent + spaces);
    } else {
      result += JSON.stringify(value);
    }
    
    result += isLast ? '\n' : ',\n';
  });
  
  result += `${currentIndent}}`;
  return result;
}

async function main() {
  console.log('Merging translations properly...\n');
  
  // Load English reference
  const enPath = path.join(translationsDir, 'en.ts');
  const enContent = fs.readFileSync(enPath, 'utf-8');
  const enObj = parseTranslationFile(enContent);
  
  // Get git status to find original content
  const { execSync } = await import('child_process');
  
  const files = fs.readdirSync(translationsDir).filter(f => 
    f.endsWith('.ts') && f !== 'index.ts' && f !== 'en.ts' && f !== 'de.ts'
  );
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    const filePath = path.join(translationsDir, file);
    const langCode = file.replace('.ts', '');
    
    try {
      // Read current (restructured) file
      const currentContent = fs.readFileSync(filePath, 'utf-8');
      const currentObj = parseTranslationFile(currentContent);
      
      // Try to get original from git
      let originalObj = {};
      try {
        const originalContent = execSync(`cd /home/runner/workspace && git show HEAD:shared/translations/${file}`, { encoding: 'utf-8' });
        originalObj = parseTranslationFile(originalContent);
      } catch (e) {
        console.log(`⚠ No git history for ${file}, using current as base`);
        originalObj = currentObj;
      }
      
      // Merge: prefer original translations, maintain en.ts structure
      const merged = deepMerge(originalObj, currentObj, enObj);
      
      // Generate new content
      const newContent = `export const ${langCode} = ${objectToString(merged)};\n`;
      
      // Backup current file
      fs.writeFileSync(path.join(backupDir, file), currentContent);
      
      // Write merged file
      fs.writeFileSync(filePath, newContent, 'utf-8');
      
      processedCount++;
      console.log(`✓ Merged ${file}`);
    } catch (error) {
      errorCount++;
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Completed: ${processedCount} files merged`);
  console.log(`Errors: ${errorCount} files`);
  console.log(`Backups saved to: ${backupDir}`);
  console.log(`${'='.repeat(50)}`);
}

main().catch(console.error);
