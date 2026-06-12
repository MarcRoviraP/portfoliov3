const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const thumbnailsDir = path.join(process.cwd(), 'public', 'assets', 'proyects_thumbnails');

async function convertDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (let entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      await convertDir(fullPath);
    } else if (entry.isFile() && fullPath.match(/\.(png|jpe?g)$/i)) {
      const parsed = path.parse(fullPath);
      const webpPath = path.format({ ...parsed, base: undefined, ext: '.webp' });
      console.log(`Converting ${entry.name} to WebP...`);
      await sharp(fullPath).webp({ quality: 80 }).toFile(webpPath);
      fs.unlinkSync(fullPath); // Remove old file
    }
  }
}

function updateJSON(filePath) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  data.proyecto.forEach(p => {
    if (p.imagen) {
      p.imagen = p.imagen.replace(/\.(png|jpe?g)$/i, '.webp');
    }
  });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

async function main() {
  console.log('Starting conversion...');
  await convertDir(thumbnailsDir);
  console.log('Images converted successfully.');
  
  updateJSON(path.join(process.cwd(), 'public', 'assets', 'data', 'proyecto_es.json'));
  updateJSON(path.join(process.cwd(), 'public', 'assets', 'data', 'proyecto_en.json'));
  console.log('JSON files updated with new extensions.');
}

main().catch(console.error);
