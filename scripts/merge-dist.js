import fs from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const destDir = path.join(rootDir, 'dist');

// Helper to recursively copy directories
async function copyDir(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      await copyDir(srcPath, destPath);
    } else {
      await fs.copyFile(srcPath, destPath);
    }
  }
}

async function mergeDist() {
  try {
    console.log('Starting to merge workspace dist directories...');
    
    // Clean and ensure destination directory
    if (existsSync(destDir)) {
      await fs.rm(destDir, { recursive: true, force: true });
    }
    await fs.mkdir(destDir, { recursive: true });

    // 1. Copy main platform to root of dist
    const mainPlatformDist = path.join(rootDir, 'apps', 'main-platform', 'dist');
    if (existsSync(mainPlatformDist)) {
      console.log('Copying main platform dist to root...');
      await copyDir(mainPlatformDist, destDir);
    } else {
      console.warn('Main platform dist not found!');
    }

    // List of sub-apps to copy into their own subdirectories in dist
    const subApps = [
      { name: 'automind', folder: 'automind' },
      { name: 'beautly', folder: 'beautly' },
      { name: 'estutanda', folder: 'estutanda' },
      { name: 'media-lab', folder: 'media-lab' },
      { name: 'taller-pro', folder: 'taller-pro' }
    ];

    for (const app of subApps) {
      const appDist = path.join(rootDir, 'apps', app.folder, 'dist');
      const targetDist = path.join(destDir, app.name);
      
      if (existsSync(appDist)) {
        console.log(`Copying ${app.name} dist to dist/${app.name}...`);
        await copyDir(appDist, targetDist);
      } else {
        console.warn(`Dist for ${app.name} not found at ${appDist}`);
      }
    }

    console.log('Dist directories merged successfully!');
  } catch (error) {
    console.error('Error merging dist directories:', error);
    process.exit(1);
  }
}

mergeDist();
