const { spawn } = require('child_process');
const path = require('path');

console.log('🤖 NeuroSearch Automation Agent Initializing...');

const rootDir = path.resolve(__dirname, '..');

// Launch the Python server directly using the global python executable
console.log('🚀 Launching AI Core Engine background worker...');
spawn('cmd.exe', [
    '/c',
    `set OPENROUTER_API_KEY=sk-or-v1-96668dabf16849a85a1253800ba9d4cf925b82d39cc627bb45c154433 && pip install fastapi uvicorn httpx pydantic && cd /d "${path.join(rootDir, 'backend', 'app')}" && python main.py`
], { stdio: 'inherit', detached: true });

// Launch the premium frontend layout
console.log('🌐 Launching your original website layout dashboard...');
spawn('cmd.exe', ['/c', 'npm run dev'], { stdio: 'inherit', cwd: __dirname });