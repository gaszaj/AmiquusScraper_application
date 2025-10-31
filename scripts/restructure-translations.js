import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsDir = path.join(__dirname, '../shared/translations');

// Parse a translation file and extract its structure
function parseTranslationFile(content) {
  // Remove export statement and get the object
  const objectMatch = content.match(/export const \w+ = ({[\s\S]*});?\s*$/);
  if (!objectMatch) {
    throw new Error('Could not parse translation file');
  }
  
  try {
    // Use eval to parse the object (safe since we control the input)
    const obj = eval(`(${objectMatch[1]})`);
    return obj;
  } catch (e) {
    console.error('Error parsing object:', e);
    throw e;
  }
}

// Get the key order from en.ts
function getKeyOrder(obj, prefix = '') {
  const order = [];
  for (const key in obj) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    order.push(fullKey);
    
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      const nestedOrder = getKeyOrder(obj[key], fullKey);
      order.push(...nestedOrder);
    }
  }
  return order;
}

// Reorganize an object to match the reference order
function reorganizeObject(obj, referenceObj) {
  const result = {};
  
  // First, add all keys from reference in the same order
  for (const key in referenceObj) {
    if (key in obj) {
      if (typeof referenceObj[key] === 'object' && referenceObj[key] !== null && !Array.isArray(referenceObj[key])) {
        result[key] = reorganizeObject(obj[key] || {}, referenceObj[key]);
      } else {
        result[key] = obj[key];
      }
    } else {
      // Key is missing in translation, use reference as placeholder
      result[key] = referenceObj[key];
    }
  }
  
  // Then add any extra keys that exist in obj but not in reference
  for (const key in obj) {
    if (!(key in referenceObj)) {
      result[key] = obj[key];
    }
  }
  
  return result;
}

// Convert object to formatted string
function objectToString(obj, indent = 2, currentIndent = '') {
  const spaces = ' '.repeat(indent);
  let result = '{\n';
  
  const entries = Object.entries(obj);
  entries.forEach(([key, value], index) => {
    const isLast = index === entries.length - 1;
    result += `${currentIndent}${spaces}${key}: `;
    
    if (typeof value === 'string') {
      // Escape quotes and newlines in strings
      const escaped = value.replace(/\\/g, '\\\\').replace(/"/g, '\\"').replace(/\n/g, '\\n');
      result += `"${escaped}"`;
    } else if (Array.isArray(value)) {
      result += '[\n';
      value.forEach((item, i) => {
        const isLastItem = i === value.length - 1;
        result += `${currentIndent}${spaces}${spaces}"${item}"${isLastItem ? '' : ','}\n`;
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
  console.log('Starting translation file restructuring...\n');
  
  // Read and parse en.ts as reference
  const enPath = path.join(translationsDir, 'en.ts');
  const enContent = fs.readFileSync(enPath, 'utf-8');
  const enObj = parseTranslationFile(enContent);
  
  console.log('Reference structure loaded from en.ts\n');
  
  // Get all translation files
  const files = fs.readdirSync(translationsDir).filter(f => 
    f.endsWith('.ts') && f !== 'index.ts' && f !== 'en.ts' && f !== 'de.ts'
  );
  
  console.log(`Found ${files.length} files to restructure\n`);
  
  let processedCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    const filePath = path.join(translationsDir, file);
    const langCode = file.replace('.ts', '');
    
    try {
      // Read current file
      const content = fs.readFileSync(filePath, 'utf-8');
      const currentObj = parseTranslationFile(content);
      
      // Reorganize to match en.ts structure
      const reorganized = reorganizeObject(currentObj, enObj);
      
      // Generate new file content
      const newContent = `export const ${langCode} = ${objectToString(reorganized)};\n`;
      
      // Write back to file
      fs.writeFileSync(filePath, newContent, 'utf-8');
      
      processedCount++;
      console.log(`✓ Restructured ${file}`);
    } catch (error) {
      errorCount++;
      console.error(`✗ Error processing ${file}:`, error.message);
    }
  }
  
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Completed: ${processedCount} files restructured`);
  console.log(`Errors: ${errorCount} files`);
  console.log(`${'='.repeat(50)}`);
}

main().catch(console.error);
