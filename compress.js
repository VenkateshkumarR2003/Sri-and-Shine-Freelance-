import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const dir = 'src/assets/images/transformations';

async function run() {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
    const filePath = path.join(dir, file);
    const tmpPath = filePath + '.tmp.jpg';
    
    const stats = fs.statSync(filePath);
    if (stats.size < 500000) {
      console.log(`Skipping ${file} (already small: ${Math.round(stats.size/1024)}KB)`);
      continue;
    }
    
    console.log(`Compressing ${file} (original size: ${Math.round(stats.size/1024/1024*10)/10}MB)...`);
    try {
      await sharp(filePath)
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality: 75, mozjpeg: true })
        .toFile(tmpPath);
        
      fs.renameSync(tmpPath, filePath);
      console.log(`Successfully compressed ${file}`);
    } catch (e) {
      console.error(`Failed to compress ${file}:`, e);
      if (fs.existsSync(tmpPath)) {
        fs.unlinkSync(tmpPath);
      }
    }
  }
}

run();
