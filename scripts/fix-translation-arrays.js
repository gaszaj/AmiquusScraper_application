import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsDir = path.join(__dirname, '../shared/translations');

// Fix array syntax issues by reading original files and extracting array values properly
async function fixArrays() {
  const files = fs.readdirSync(translationsDir).filter(f => 
    f.endsWith('.ts') && f !== 'index.ts' && f !== 'en.ts' && f !== 'de.ts'
  );
  
  console.log(`Checking ${files.length} files for array syntax issues...\n`);
  
  let fixedCount = 0;
  
  for (const file of files) {
    const filePath = path.join(translationsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let hasChanges = false;
    
    // Fix setupSteps and chatIdSteps arrays which have curly quotes
    const arrayPatterns = [
      { name: 'setupSteps', linePattern: /^\s*setupSteps: \[$/m },
      { name: 'chatIdSteps', linePattern: /^\s*chatIdSteps: \[$/m },
    ];
    
    for (const pattern of arrayPatterns) {
      if (content.includes(pattern.name)) {
        // Find the array and replace it with proper formatting
        const regex = new RegExp(
          `(\\s*${pattern.name}: \\[\\n)([\\s\\S]*?)(\\n\\s*\\])`,
          'g'
        );
        
        content = content.replace(regex, (match, start, arrayContent, end) => {
          // Split by lines and re-format each line
          const lines = arrayContent.split('\n').filter(l => l.trim());
          const formatted = lines.map((line, i) => {
            // Extract the string content, handling various quote types
            let str = line.trim();
            // Remove trailing comma if exists
            if (str.endsWith(',')) str = str.slice(0, -1);
            // Remove existing quotes
            str = str.replace(/^["']|["']$/g, '');
            // Re-quote with proper escaping
            const escaped = str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
            const comma = i < lines.length - 1 ? ',' : '';
            return `      "${escaped}"${comma}`;
          }).join('\n');
          
          hasChanges = true;
          return `${start}${formatted}${end}`;
        });
      }
    }
    
    if (hasChanges) {
      fs.writeFileSync(filePath, content, 'utf-8');
      fixedCount++;
      console.log(`✓ Fixed ${file}`);
    }
  }
  
  console.log(`\nFixed ${fixedCount} files`);
}

fixArrays().catch(console.error);
