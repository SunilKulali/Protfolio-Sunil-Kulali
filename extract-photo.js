import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname, 'index.html.html'), 'utf8');
const match = html.match(/<img src="(data:image\/jpeg;base64,[^"]+)"/);
if (match) {
  const dir = path.join(__dirname, 'portfolio', 'public');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, 'profile.jpg'),
    Buffer.from(match[1].split(',')[1], 'base64')
  );
  console.log('Profile image extracted');
} else {
  console.log('No image found');
}
