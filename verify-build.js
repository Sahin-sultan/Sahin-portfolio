// Simple verification script to check build output
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔍 Verifying build output for Netlify deployment...\n');

const distPath = path.join(__dirname, 'dist');

if (!fs.existsSync(distPath)) {
  console.error('❌ Error: dist directory not found. Run npm run build first.');
  process.exit(1);
}

// Check index.html
const indexPath = path.join(distPath, 'index.html');
if (fs.existsSync(indexPath)) {
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  console.log('✅ index.html found');
  
  // Check for script tags
  const scriptMatches = indexContent.match(/<script[^>]*src="([^"]*)"[^>]*>/g);
  if (scriptMatches) {
    console.log('✅ Script tags found:');
    scriptMatches.forEach(match => {
      const src = match.match(/src="([^"]*)"/)[1];
      console.log(`   - ${src}`);
      
      // Check if script file exists
      const scriptPath = path.join(distPath, src);
      if (fs.existsSync(scriptPath)) {
        console.log(`     ✅ File exists`);
      } else {
        console.log(`     ❌ File missing`);
      }
    });
  }
  
  // Check for CSS links
  const cssMatches = indexContent.match(/<link[^>]*href="([^"]*\.css)"[^>]*>/g);
  if (cssMatches) {
    console.log('✅ CSS files found:');
    cssMatches.forEach(match => {
      const href = match.match(/href="([^"]*)"/)[1];
      console.log(`   - ${href}`);
      
      // Check if CSS file exists
      const cssPath = path.join(distPath, href);
      if (fs.existsSync(cssPath)) {
        console.log(`     ✅ File exists`);
      } else {
        console.log(`     ❌ File missing`);
      }
    });
  }
} else {
  console.error('❌ Error: index.html not found in dist directory');
  process.exit(1);
}

// Check _redirects file
const redirectsPath = path.join(distPath, '_redirects');
if (fs.existsSync(redirectsPath)) {
  console.log('✅ _redirects file found');
} else {
  console.log('⚠️  Warning: _redirects file not found');
}

// Check assets directory
const assetsPath = path.join(distPath, 'assets');
if (fs.existsSync(assetsPath)) {
  const assets = fs.readdirSync(assetsPath, { withFileTypes: true });
  console.log(`✅ Assets directory found with ${assets.length} items`);
  
  const jsFiles = assets.filter(item => item.name.endsWith('.js')).length;
  const cssFiles = assets.filter(item => item.name.endsWith('.css')).length;
  
  console.log(`   - JavaScript files: ${jsFiles}`);
  console.log(`   - CSS files: ${cssFiles}`);
} else {
  console.log('❌ Assets directory not found');
}

console.log('\n🎉 Build verification complete!');
console.log('\n📝 Next steps:');
console.log('1. Commit and push your changes to GitHub');
console.log('2. Netlify will automatically redeploy');
console.log('3. Check the deploy logs in Netlify dashboard for any errors');