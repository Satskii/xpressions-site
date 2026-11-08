import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DIST_DIR = path.join(__dirname, 'dist');
const PORT = 3000;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

// 1. Create HTTP Server
const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(DIST_DIR, urlPath === '/' ? 'index.html' : urlPath);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
      return;
    }
    res.writeHead(200, {
      'Content-Type': contentType,
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000',
    });
    res.end(content);
  });
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[Xpressions Server] Local server running at http://127.0.0.1:${PORT}`);
  startTunnel();
});

function startTunnel() {
  console.log('[Xpressions Tunnel] Initializing public secure HTTPS tunnel via SSH...');
  const ssh = spawn('ssh.exe', [
    '-o', 'StrictHostKeyChecking=no',
    '-o', 'ServerAliveInterval=30',
    '-R', `80:127.0.0.1:${PORT}`,
    'nokey@localhost.run'
  ]);

  ssh.stdout.on('data', (data) => {
    const text = data.toString();
    const match = text.match(/(https:\/\/[a-zA-Z0-9.-]+\.lhr\.life)/);
    if (match) {
      console.log('\n======================================================');
      console.log('🚀 LIVE PUBLIC URL ESTABLISHED:');
      console.log(`👉 ${match[1]}`);
      console.log('======================================================\n');
    }
    process.stdout.write(text);
  });

  ssh.stderr.on('data', (data) => {
    process.stderr.write(data.toString());
  });

  ssh.on('close', (code) => {
    console.log(`[Xpressions Tunnel] SSH tunnel exited with code ${code}. Reconnecting in 5s...`);
    setTimeout(startTunnel, 5000);
  });
}
