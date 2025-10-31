import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const translationsDir = path.join(__dirname, '../shared/translations');

// Common English words to detect
const englishPatterns = [
  /\b(The|This|That|These|Those|You|Your|We|Our|They|Their)\b/,
  /\b(are|is|was|were|have|has|had|can|could|will|would|should)\b/,
  /\b(Subscribe|Subscription|Profile|Settings|Account|Dashboard)\b/,
  /\b(Track|Monitor|Alert|Notification|Website|Email|Login)\b/,
  /\b(Cancel|Start|Setup|Continue|Next|Previous|Submit)\b/,
  /\b(anytime|required|available|instant|real-time)\b/i,
];

async function findEnglishContent() {
  const files = fs.readdirSync(translationsDir).filter(f => 
    f.endsWith('.ts') && f !== 'index.ts' && f !== 'en.ts' && f !== 'de.ts'
  );
  
  console.log(`Scanning ${files.length} files for English content...\n`);
  
  const results = {};
  
  for (const file of files) {
    const filePath = path.join(translationsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    
    const englishLines = [];
    
    lines.forEach((line, index) => {
      // Skip comments and empty lines
      if (line.trim().startsWith('//') || !line.trim()) return;
      
      // Check if line contains a string value
      const match = line.match(/:\s*"([^"]+)"/);
      if (match) {
        const value = match[1];
        // Check against English patterns
        for (const pattern of englishPatterns) {
          if (pattern.test(value)) {
            englishLines.push({
              line: index + 1,
              content: line.trim(),
              value: value
            });
            break;
          }
        }
      }
    });
    
    if (englishLines.length > 0) {
      results[file] = englishLines;
    }
  }
  
  // Print results
  console.log('Files with English content:\n');
  for (const [file, lines] of Object.entries(results)) {
    console.log(`\n${file}: ${lines.length} English strings found`);
    lines.slice(0, 5).forEach(item => {
      console.log(`  Line ${item.line}: ${item.value.substring(0, 60)}...`);
    });
    if (lines.length > 5) {
      console.log(`  ... and ${lines.length - 5} more`);
    }
  }
  
  console.log(`\n\nTotal: ${Object.keys(results).length} files have English content`);
  
  return results;
}

findEnglishContent().catch(console.error);
