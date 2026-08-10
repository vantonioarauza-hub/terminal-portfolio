const input = document.getElementById('command-input');
const history = document.getElementById('history');
const cursorGlow = document.getElementById('cursor-glow');
let commandCount = 0;
let sessionStartTime = Date.now();

// Track cursor glow
document.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = (e.clientX - 150) + 'px';
  cursorGlow.style.top = (e.clientY - 150) + 'px';
});

window.onload = () => {
  renderOutput("╔════════════════════════════════════════════════════════════════╗", "info");
  renderOutput("║          <span class='highlight-cyan'>NEXUS COMMAND TERMINAL v4.2.1</span>          ║", "info");
  renderOutput("║          <span class='highlight-magenta'>Advanced Development Environment</span>          ║", "info");
  renderOutput("╚════════════════════════════════════════════════════════════════╝", "info");
  
  setTimeout(() => {
    renderOutput("System initialized. Type <span class='highlight'>help</span> for available commands.", "success");
    renderOutput("Type <span class='highlight'>help [command]</span> for detailed info. Type <span class='highlight'>easter</span> for fun surprises!", "");
  }, 300);
};

const commands = {
  help: function(args) {
    if (args.length > 0) {
      return getDetailedHelp(args[0]);
    }
    return `
<table class="table">
  <tr>
    <th>Command</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><span class="highlight">help</span> [cmd]</td>
    <td>Show all commands or details on specific command</td>
  </tr>
  <tr>
    <td><span class="highlight">skills</span></td>
    <td>View technical stack & expertise</td>
  </tr>
  <tr>
    <td><span class="highlight">projects</span></td>
    <td>Active repository list with metrics</td>
  </tr>
  <tr>
    <td><span class="highlight">about</span></td>
    <td>Developer background & philosophy</td>
  </tr>
  <tr>
    <td><span class="highlight">quote</span></td>
    <td>Random programming wisdom</td>
  </tr>
  <tr>
    <td><span class="highlight">matrix</span></td>
    <td>Trigger digital rain simulation</td>
  </tr>
  <tr>
    <td><span class="highlight">stats</span></td>
    <td>Session diagnostics & metrics</td>
  </tr>
  <tr>
    <td><span class="highlight">weather</span></td>
    <td>Current system environment conditions</td>
  </tr>
  <tr>
    <td><span class="highlight">time</span></td>
    <td>Display current system time & date</td>
  </tr>
  <tr>
    <td><span class="highlight">ascii</span></td>
    <td>Display ASCII art collection</td>
  </tr>
  <tr>
    <td><span class="highlight">hack</span></td>
    <td>Simulate hacking sequence</td>
  </tr>
  <tr>
    <td><span class="highlight">system</span></td>
    <td>View system specifications</td>
  </tr>
  <tr>
    <td><span class="highlight">network</span></td>
    <td>Network diagnostics & info</td>
  </tr>
  <tr>
    <td><span class="highlight">ls</span></td>
    <td>List directory contents</td>
  </tr>
  <tr>
    <td><span class="highlight">whoami</span></td>
    <td>Display current user info</td>
  </tr>
  <tr>
    <td><span class="highlight">echo</span> [text]</td>
    <td>Print text to terminal</td>
  </tr>
  <tr>
    <td><span class="highlight">clear</span></td>
    <td>Clear terminal history</td>
  </tr>
  <tr>
    <td><span class="highlight">exit</span></td>
    <td>Close terminal session</td>
  </tr>
</table>
    `;
  },

  skills: function() {
    return `
<div class="title">━━━ TECHNICAL STACK ━━━</div>
<br>
<span class="highlight-magenta">► Languages & Frameworks:</span>
  • Luau (Expert)           [████████████████░░] 90%
  • JavaScript/TypeScript   [████████████░░░░░░] 85%
  • React & Vue             [███████████░░░░░░░] 80%
  • Python                  [██████████░░░░░░░░] 75%
  • C# / .NET               [█████████░░░░░░░░░] 70%
<br>
<span class="highlight-magenta">► Architecture & Systems:</span>
  • Object-Oriented Design  [████████████████░░] 90%
  • System Architecture     [███████████████░░░] 88%
  • Microservices           [██████████░░░░░░░░] 75%
  • Database Design         [███████████░░░░░░░] 80%
  • API Development         [█████████████░░░░░] 85%
<br>
<span class="highlight-magenta">► Tools & Platforms:</span>
  • Git / GitHub            [████████████████░░] 92%
  • Docker & Kubernetes     [██████████░░░░░░░░] 75%
  • Blender 3D              [███████░░░░░░░░░░░] 65%
  • CI/CD Pipelines         [██████████████░░░░] 82%
  • Linux/Unix Systems      [███████████████░░░] 88%
    `;
  },

  projects: function() {
    return `
<div class="title">━━━ ACTIVE REPOSITORIES ━━━</div>
<br>
<span class="highlight-cyan">[1] Kaze-Machi</span>
    Genre: Game Architecture Framework
    Status: <span class="success">PRODUCTION</span>
    Metrics: 2.4K Stars | 156 Forks | 89% Test Coverage
    Description: Scalable game systems & advanced map layout architecture
    Technologies: Luau, Roblox Studio, DataStores
<br>
<span class="highlight-cyan">[2] Web-Terminal</span>
    Genre: Interactive Development Environment
    Status: <span class="success">ACTIVE</span>
    Metrics: 1.8K Stars | 245 Forks | 94% Uptime
    Description: Customized terminal-based GitHub environment simulator
    Technologies: JavaScript, CSS3, WebGL
<br>
<span class="highlight-cyan">[3] CrimsonEngine</span>
    Genre: Real-time Rendering Engine
    Status: <span class="success">BETA</span>
    Metrics: 956 Stars | 89 Forks | GPU Accelerated
    Description: High-performance 3D rendering with advanced lighting
    Technologies: C++, OpenGL, GLSL
<br>
<span class="highlight-cyan">[4] NeuralNet Pro</span>
    Genre: Machine Learning Framework
    Status: <span class="info">IN DEVELOPMENT</span>
    Metrics: 1.2K Stars | 67 Forks | 45% Complete
    Description: Lightweight deep learning framework for edge computing
    Technologies: Python, TensorFlow, CUDA
    `;
  },

  about: function() {
    return `
<div class="title">━━━ DEVELOPER PROFILE ━━━</div>
<br>
<span class="highlight-cyan">Name:</span> Full-Stack Developer & Systems Architect
<span class="highlight-cyan">Experience:</span> 8+ years in software engineering
<span class="highlight-cyan">Philosophy:</span> "Code elegance meets performance optimization"
<br>
<span class="highlight-magenta">Core Values:</span>
  ✦ Simplicity through clarity
  ✦ Performance through design
  ✦ Reliability through testing
  ✦ Scalability through architecture
<br>
<span class="highlight-magenta">Specializations:</span>
  ► Game Engine Development
  ► Real-time Systems Architecture
  ► High-Performance Computing
  ► Database Optimization
  ► DevOps & Infrastructure
<br>
Passionate about building elegant solutions that scale.
Constant learner of emerging technologies.
Open-source contributor & community advocate.
    `;
  },

  quote: function() {
    const quotes = [
      { text: "Simplicity is prerequisite for reliability.", author: "Edsger W. Dijkstra" },
      { text: "Code is like humor. When you have to explain it, it's bad.", author: "Cory House" },
      { text: "Make it work, make it right, make it fast.", author: "Kent Beck" },
      { text: "Premature optimization is the root of all evil.", author: "Donald Knuth" },
      { text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.", author: "Martin Fowler" },
      { text: "The only way to go fast, is to go well.", author: "Robert C. Martin" },
      { text: "Beautiful is better than ugly.", author: "Zen of Python" },
      { text: "Less is more.", author: "Ludwig Mies van der Rohe" },
      { text: "Perfection is not just about control. It's also about letting go.", author: "Stanley Kubrick" }
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    return `<span class="highlight-cyan">"${quote.text}"</span><br><span class="text-muted">— ${quote.author}</span>`;
  },

  matrix: function() {
    let output = '<div class="ascii-art">';
    for (let i = 0; i < 12; i++) {
      for (let j = 0; j < 50; j++) {
        const chars = '01アイウエオカキクケコサシスセソタチツテト';
        output += `<span class="matrix-rain">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
      }
      output += '<br>';
    }
    output += '</div>';
    output += 'The Matrix has you... <span class="success">[Connection Secured]</span>';
    return output;
  },

  stats: function() {
    const uptime = Math.floor((Date.now() - sessionStartTime) / 1000);
    const hours = Math.floor(uptime / 3600);
    const minutes = Math.floor((uptime % 3600) / 60);
    const seconds = uptime % 60;
    
    return `
<div class="title">━━━ SESSION DIAGNOSTICS ━━━</div>
<br>
<span class="highlight-magenta">Commands Executed:</span> <span class="highlight">${commandCount}</span>
<span class="highlight-magenta">Session Uptime:</span> ${hours}h ${minutes}m ${seconds}s
<span class="highlight-magenta">Environment:</span> Client-Side JavaScript / WebAssembly
<span class="highlight-magenta">Status:</span> <span class="success">OPTIMAL</span>
<span class="highlight-magenta">Memory:</span> Browser Runtime
<span class="highlight-magenta">CPU Load:</span> Negligible
    `;
  },

  time: function() {
    const now = new Date();
    const formatted = now.toLocaleString('en-US', { 
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });
    return `<span class="highlight-cyan">System Time:</span> ${formatted}`;
  },

  weather: function() {
    const conditions = [
      { status: 'Optimal', temp: '98.6°F', humidity: '42%', emoji: '⚡' },
      { status: 'Clear Skies', temp: '72°F', humidity: '35%', emoji: '☀️' },
      { status: 'Light Protocols', temp: '68°F', humidity: '50%', emoji: '🌤️' },
      { status: 'Data Storm', temp: '104°F', humidity: '89%', emoji: '⛈️' }
    ];
    const condition = conditions[Math.floor(Math.random() * conditions.length)];
    return `
<span class="highlight-magenta">System Weather Report:</span>
Condition: ${condition.emoji} <span class="highlight">${condition.status}</span>
Temperature: <span class="warning">${condition.temp}</span>
Humidity: ${condition.humidity}
Pressure: 1013.25 mbar
Wind Speed: Variable
    `;
  },

  ascii: function() {
    return `
<div class="ascii-art">
  ╔═══════════════════════════════════════════════╗
  ║     <span class="highlight-cyan">////// NEXUS COMMAND TERMINAL //////</span>      ║
  ║   <span class="highlight-green">Advanced Development Environment Suite</span>   ║
  ╚═══════════════════════════════════════════════╝

    :::    :::    :::    :::   ::::::::: ::::::::::
   :+:    :+:+:  :+:+:  :+:   :+:       :+:
  +:+    +:+ +:+ +:+ +:+ +:+  +:+       +:+
 +#+    +#+  +:+ +#+  +:+ +#+  +#++:++#  +#++:++#
+#+    +#+#+#+#+#+ +#+ +#+ +#+       +#+ +#+
#+#    #+#   #+#  #+#  #+# #+#       #+# #+#
###    ###    ###   ###  ### ########### ##########

</div>
    `;
  },

  hack: function() {
    let output = '<div class="title">━━━ INITIALIZING SECURITY BREACH ━━━</div><br>';
    output += '<span class="info">Scanning network architecture...</span><br>';
    
    setTimeout(() => {}, 200);
    
    const tasks = [
      '[████████░░] 82% - Port enumeration in progress',
      '[██████████] 100% - Firewall vulnerabilities identified',
      '[████████░░] 84% - Decrypting authentication protocols',
      '[██████████] 100% - Privilege escalation vector found'
    ];
    
    tasks.forEach((task, idx) => {
      output += task + '<br>';
    });
    
    output += '<br><span class="success">▶ Access Granted. Welcome to the system.</span>';
    return output;
  },

  system: function() {
    return `
<div class="title">━━━ SYSTEM SPECIFICATIONS ━━━</div>
<br>
<table class="table">
  <tr>
    <th>Component</th>
    <th>Details</th>
  </tr>
  <tr>
    <td>OS</td>
    <td>Chrome OS / WebAssembly Runtime</td>
  </tr>
  <tr>
    <td>Kernel</td>
    <td>V8 JavaScript Engine</td>
  </tr>
  <tr>
    <td>Architecture</td>
    <td>x64 / ARM (Multi-platform)</td>
  </tr>
  <tr>
    <td>CPU Cores</td>
    <td>${navigator.hardwareConcurrency || 'Unknown'}</td>
  </tr>
  <tr>
    <td>RAM Available</td>
    <td>${(navigator.deviceMemory || 'Unknown')} GB</td>
  </tr>
  <tr>
    <td>Display</td>
    <td>${window.screen.width}x${window.screen.height}</td>
  </tr>
  <tr>
    <td>Browser</td>
    <td>${navigator.userAgent.split('Chrome/')[1]?.split(' ')[0] || 'Unknown'}</td>
  </tr>
  <tr>
    <td>Connection</td>
    <td>${navigator.onLine ? '<span class="success">Online</span>' : '<span class="error">Offline</span>'}</td>
  </tr>
</table>
    `;
  },

  network: function() {
    return `
<div class="title">━━━ NETWORK DIAGNOSTICS ━━━</div>
<br>
<span class="highlight-cyan">Latency Test:</span>
[████████████████░░] 84ms - Excellent

<span class="highlight-cyan">Bandwidth:</span>
Download: 854 Mbps
Upload: 421 Mbps
Jitter: 2ms

<span class="highlight-cyan">Routing:</span>
${Math.floor(Math.random() * 20) + 5} hops detected
IPv4: <span class="info">192.168.${Math.floor(Math.random() * 256)}.${Math.floor(Math.random() * 256)}</span>
Packets: <span class="success">0% loss</span>
    `;
  },

  ls: function(args) {
    const files = [
      '📁 projects/',
      '📁 documents/',
      '📁 assets/',
      '📄 README.md',
      '📄 LICENSE',
      '📄 config.json',
      '🔐 .gitignore',
      '🔐 .env'
    ];
    return files.join('<br>');
  },

  whoami: function() {
    return `<span class="highlight-cyan">root</span>@<span class="highlight-magenta">nexus</span>`;
  },

  echo: function(args) {
    if (args.length === 0) {
      return '<span class="error">echo: missing argument</span>';
    }
    return args.join(' ');
  },

  clear: function() {
    history.innerHTML = '';
    return null;
  },

  exit: function() {
    renderOutput('Closing terminal session...', 'warning');
    setTimeout(() => {
      renderOutput('<span class="success">Session terminated. Thanks for visiting!</span>', 'success');
      input.disabled = true;
    }, 500);
    return null;
  },

  easter: function() {
    const easterEggs = [
      '<span class="highlight-green">🐰 You found the Easter Bunny! </span><br>The rabbit hole goes deeper...',
      '<span class="highlight-magenta">✨ "The cake is a lie" ✨</span>',
      '<span class="highlight-cyan">🚀 Houston, we have a problem... JK everything is fine! 🚀</span>',
      '<span class="info">🎮 All your base are belong to us 🎮</span>',
      '<span class="warning">🌵 It\'s dangerous to go alone! Take this: 🗡️ 🌵</span>',
      '<span class="highlight-orange">💬 "I\'ve been waiting for you..." - The Portal 💬</span>'
    ];
    return easterEggs[Math.floor(Math.random() * easterEggs.length)];
  }
};

function getDetailedHelp(cmd) {
  const details = {
    skills: 'Display your technical expertise and proficiency levels across various technologies and frameworks.',
    projects: 'View all active projects with detailed metrics, descriptions, and technologies used.',
    quote: 'Display a random quote about programming or development philosophy.',
    matrix: 'Trigger a digital rain effect similar to The Matrix movie.',
    stats: 'Show current session statistics including commands executed and uptime.',
    time: 'Display the current system time and date in formatted output.',
    ascii: 'Show ASCII art and visual graphics.',
    hack: 'Run a fake hacking/security breach simulation sequence.',
    system: 'Display detailed system specifications and hardware information.',
    network: 'Show network diagnostics, latency, bandwidth, and routing information.',
    ls: 'List directory contents and files.',
    whoami: 'Display current user information.',
    echo: 'Print text to the terminal.',
    clear: 'Clear all terminal history and start fresh.',
    exit: 'Close the terminal session.',
    about: 'View developer background, philosophy, and specializations.'
  };
  
  if (details[cmd]) {
    return `<span class="title">━━━ HELP: ${cmd.toUpperCase()} ━━━</span><br><br>${details[cmd]}<br><br>Usage: <span class="highlight">${cmd}</span>`;
  } else {
    return `<span class="error">No help available for command: ${cmd}</span>`;
  }
}

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const rawCmd = input.value.trim();
    
    if (rawCmd !== "") {
      commandCount++;
      echoCommand(rawCmd);
      
      const [cmdName, ...args] = rawCmd.split(/\s+/);
      const cmd = cmdName.toLowerCase();
      processCommand(cmd, args);
    }
    
    input.value = '';
    setTimeout(() => {
      window.scrollTo(0, document.body.scrollHeight);
    }, 100);
  }
});

document.addEventListener('click', () => {
  input.focus();
});

function echoCommand(cmd) {
  const echoLine = document.createElement('div');
  echoLine.className = 'history-block cmd-echo';
  echoLine.innerHTML = `<span class="highlight-magenta">root@nexus</span><span class="highlight-cyan">:~$</span> ${escapeHtml(cmd)}`;
  history.appendChild(echoLine);
}

function processCommand(cmd, args) {
  if (cmd === 'clear') {
    history.innerHTML = '';
    return;
  }
  
  let response = commands[cmd];
  
  if (typeof response === 'function') {
    response = response(args);
  }
  
  if (response) {
    if (cmd === 'echo') {
      renderOutput(response);
    } else {
      renderOutput(response, '');
    }
  } else {
    renderOutput(`<span class="error">zsh: command not found: ${cmd}</span><br>Type <span class="highlight">help</span> for available commands.`, 'error');
  }
}

function renderOutput(htmlContent, extraClass = '') {
  const outputWrapper = document.createElement('div');
  outputWrapper.className = `history-block cmd-output ${extraClass}`;
  outputWrapper.innerHTML = htmlContent;
  history.appendChild(outputWrapper);
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
