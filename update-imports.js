const fs = require('fs');
const path = require('path');

// Function to recursively process files
function processDirectory(dirPath) {
  const items = fs.readdirSync(dirPath);
  
  items.forEach(item => {
    const fullPath = path.join(dirPath, item);
    const stats = fs.statSync(fullPath);
    
    if (stats.isDirectory()) {
      processDirectory(fullPath);
    } else if (stats.isFile() && item.endsWith('.jsx')) {
      updateImports(fullPath);
    }
  });
}

// Function to update imports in a file
function updateImports(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  let updatedContent = content;
  
  // Get the relative depth of the file from the src directory
  const relativePath = path.relative(path.join(__dirname, 'src'), path.dirname(filePath));
  const depth = relativePath.split(path.sep).length;
  
  // Find all import statements
  const importRegex = /import\s+(?:.+?)\s+from\s+["']([^"']+)["'];?/g;
  let match;
  let changes = 0;
  
  // Process each import statement
  let lastIndex = 0;
  let result = '';
  
  while ((match = importRegex.exec(content)) !== null) {
    const fullMatch = match[0];
    const importPath = match[1];
    
    // Only process relative imports that start with ../ (not node_modules or absolute paths)
    if (importPath.startsWith('../')) {
      // Count the number of ../ in the path
      const dotDotSlashCount = (importPath.match(/\.\.\//g) || []).length;
      
      // If the import path doesn't have enough ../ for the file's depth in the structure
      if (dotDotSlashCount < depth) {
        // Calculate how many more ../ we need to add
        const neededDots = depth - dotDotSlashCount;
        const newPath = '../'.repeat(neededDots) + importPath;
        const newImport = fullMatch.replace(importPath, newPath);
        
        // Add the part before this import, then the updated import
        result += content.substring(lastIndex, match.index) + newImport;
        lastIndex = match.index + fullMatch.length;
        changes++;
      } else {
        // This import already has enough ../ prefixes
        result += content.substring(lastIndex, match.index + fullMatch.length);
        lastIndex = match.index + fullMatch.length;
      }
    } else {
      // Not a relative import starting with ../, keep as is
      result += content.substring(lastIndex, match.index + fullMatch.length);
      lastIndex = match.index + fullMatch.length;
    }
  }
  
  // Add the remaining content after the last import
  result += content.substring(lastIndex);
  
  // Only write the file if changes were made
  if (changes > 0) {
    fs.writeFileSync(filePath, result, 'utf-8');
    console.log(`Updated ${changes} imports in: ${filePath}`);
  } else {
    console.log(`No changes needed in: ${filePath}`);
  }
}

// Start from the Archiform directory
const archiformDir = path.join(__dirname, 'src/modules/ES/Archiform');
console.log(`Starting to process files in: ${archiformDir}`);
processDirectory(archiformDir);

console.log('Import path updates completed for Archiform folder!');
