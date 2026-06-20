const fs = require('fs');

// Create dist folder if it doesn't exist
if (!fs.existsSync('dist')) {
  fs.mkdirSync('dist');
}

// Copy index.html to dist folder
fs.copyFileSync('src/index.html', 'dist/index.html');

console.log('? Build complete!');