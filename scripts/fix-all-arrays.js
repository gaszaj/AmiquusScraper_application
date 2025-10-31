import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsDir = path.join(__dirname, '../shared/translations');

// Fix all array syntax issues 
async function fixAllArrays() {
  const files = fs.readdirSync(translationsDir).filter(f => 
    f.endsWith('.ts') && f !== 'index.ts' && f !== 'en.ts' && f !== 'de.ts'
  );
  
  console.log(`Fixing array syntax in ${files.length} files...\n`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(translationsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanges = false;
    
    // Fix all arrays by finding array brackets and reformatting contents
    // Match pattern: key: [\n ... \n    ]
    const arrayRegex = /(\s*)(\w+): \[(\s*\n)([\s\S]*?)(\n\s*)\]/g;
    
    content = content.replace(arrayRegex, (match, indent, key, openNewline, arrayContent, closeIndent) => {
      // Split by lines
      const lines = arrayContent.split('\n').filter(l => l.trim());
      
      if (lines.length === 0) {
        return match; // Empty array, keep as is
      }
      
      // Check if this looks like a string array (starts with quote)
      const firstLine = lines[0].trim();
      if (!firstLine.startsWith('"') && !firstLine.startsWith("'")) {
        return match; // Not a string array, keep as is
      }
      
      // Re-format each line
      const formatted = lines.map((line, i) => {
        let str = line.trim();
        // Remove trailing comma
        if (str.endsWith(',')) str = str.slice(0, -1);
        
        // Extract the string content - handle any type of quotes
        // Remove outer quotes (could be " or ' or curly quotes)
        str = str.replace(/^[""'"]/, '').replace(/[""'"]$/, '');
        
        // Escape backslashes and double quotes
        str = str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        
        // Add comma to all but last item
        const comma = i < lines.length - 1 ? ',' : '';
        return `${indent}  "${str}"${comma}`;
      }).join('\n');
      
      hasChanges = true;
      return `${indent}${key}: [\n${formatted}\n${closeIndent}]`;
    });
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf-8');
      fixedCount++;
      console.log(`✓ Fixed ${file}`);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

fixAllArrays().catch(console.error);
