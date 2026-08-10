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
    <td>Active projects & repositories</td>
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
<span class="highlight-magenta">► Core Languages & Frameworks:</span>
  • Luau                    [████████████████░░] 95%
  • JavaScript/ES6+         [████████████░░░░░░] 85%
  • HTML5 & CSS3            [███████████░░░░░░░] 80%
<br>
<span class="highlight-magenta">► Roblox Specialization:</span>
  • Framework Architecture  [████████████████░░] 90%
  • Game Systems Design     [█████████████░░░░░] 85%
  • DataStore Integration   [████████████████░░] 90%
  • OOP & Design Patterns   [████████████░░░░░░] 85%
<br>
<span class="highlight-magenta">► Web Development:</span>
  • Frontend Development    [███████████░░░░░░░] 80%
  • Responsive Design       [██████████░░░░░░░░] 75%
  • Interactive UI/UX       [███████████░░░░░░░] 80%
<br>
<span class="highlight-magenta">► Developer Tools:</span>
  • Git & GitHub            [████████████████░░] 92%
  • Visual Studio Code      [█████████████░░░░░] 85%
  • Roblox Studio           [████████████████░░] 92%
  • Web Development Tools   [███████████░░░░░░░] 80%
    `;
  },

  projects: function() {
    return `
<div class="title">━━━ ACTIVE PROJECTS ━━━</div>
<br>
<span class="highlight-cyan">[1] Kaze-Machi</span>
    Type: Game Framework Architecture
    Platform: Roblox
    Status: <span class="success">PRODUCTION</span>
    Experience: 6 years of iterative development
    Description: Advanced Roblox game framework specializing in scalable game systems architecture, map integration patterns, and server/client synchronization.
    Technologies: Luau, Roblox Studio, DataStore Systems
    Features:
      • Modular game system architecture
      • Seamless map integration & loading
      • Efficient player data persistence
      • Real-time server-client communication
<br>
<span class="highlight-cyan">[2] Web-Terminal</span>
    Type: Interactive Portfolio & Development Environment
    Platform: Web (Browser-based)
    Status: <span class="success">ACTIVE</span>
    Description: Custom terminal-based portfolio website simulating a development environment. Showcases projects, skills, and system diagnostics through an interactive CLI interface.
    Technologies: JavaScript ES6+, HTML5, CSS3, DOM APIs
    Features:
      • Interactive command-line interface
      • Project showcase & documentation
      • Real-time system diagnostics
      • Responsive terminal design
    `;
  },

  about: function() {
    return `
<div class="title">━━━ DEVELOPER PROFILE ━━━</div>
<br>
<span class="highlight-cyan">Name:</span> Full-Stack Luau Developer & Systems Architect
<span class="highlight-cyan">Grade:</span> 11th Grade
<span class="highlight-cyan">Specialization:</span> Roblox Framework Engineering + Web Development
<span class="highlight-cyan">Experience:</span> 6 years of professional Roblox development
<br>
<span class="highlight-magenta">Core Philosophy:</span>
Bridging the gap between Roblox framework engineering and modern web development. 
I specialize in building scalable, maintainable systems that prioritize clean code 
architecture and performance optimization.
<br>
<span class="highlight-magenta">Key Values:</span>
  ✦ Code clarity over clever solutions
  ✦ Scalable architecture from the start
  ✦ Continuous learning & improvement
  ✦ Community contribution & mentorship
<br>
<span class="highlight-magenta">Specializations:</span>
  ► Roblox Game Framework Architecture
  ► Object-Oriented Design & Patterns
  ► Game Systems Design & Integration
  ► Full-Stack Web Development
  ► Interactive UI/UX Implementation
<br>
Passionate about creating elegant solutions that scale. Active in open-source 
communities and dedicated to continuous learning of emerging technologies.
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

  hack: async function() {
    // Return a promise that resolves after async operations
    return new Promise(async (resolve) => {
      let output = '<div class="title">━━━ INITIALIZING SECURITY ANALYSIS ━━━</div><br>';
      output += '<span class="info">Scanning network architecture...</span><br>';
      renderOutput(output);
      
      const tasks = [
        { progress: 82, text: 'Port enumeration in progress' },
        { progress: 100, text: 'Firewall vulnerabilities identified' },
        { progress: 84, text: 'Decrypting authentication protocols' },
        { progress: 100, text: 'Privilege escalation vector found' }
      ];
      
      for (const task of tasks) {
        await new Promise(resolve => setTimeout(resolve, 800));
        const bar = '█'.repeat(Math.floor(task.progress / 10)) + '░'.repeat(10 - Math.floor(task.progress / 10));
        renderOutput(`[${bar}] ${task.progress}% - ${task.text}`);
      }
      
      await new Promise(resolve => setTimeout(resolve, 600));
      renderOutput('<span class="success">▶ Access Granted. Welcome to the system.</span>', 'success');
      resolve();
    });
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

  ls: function() {
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
    return `<span class="highlight-cyan">developer</span>@<span class="highlight-magenta">nexus</span>`;
  },

  echo: function(args) {
    if (args.length === 0) {
      return '<span class="error">echo: missing argument</span>';
    }
    return args.join(' ');
  },

  clear: function() {
    history.innerHTML = '';
    return 'clear'; // Return special marker
  },

  exit: function() {
    renderOutput('Closing terminal session...', 'warning');
    setTimeout(() => {
      renderOutput('<span class="success">Session terminated. Thanks for visiting!</span>', 'success');
      input.disabled = true;
    }, 500);
    return 'exit'; // Return special marker
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
    about: 'View developer background, philosophy, specializations, and core values.',
    quote: 'Display a random quote about programming or development philosophy.',
    matrix: 'Trigger a digital rain effect similar to The Matrix movie.',
    stats: 'Show current session statistics including commands executed and uptime.',
    time: 'Display the current system time and date in formatted output.',
    ascii: 'Show ASCII art and visual graphics.',
    hack: 'Run a realistic hacking/security analysis simulation with staggered progress.',
    system: 'Display detailed system specifications and hardware information.',
    network: 'Show network diagnostics, latency, bandwidth, and routing information.',
    ls: 'List directory contents and files.',
    whoami: 'Display current user information.',
    echo: 'Print text to the terminal.',
    clear: 'Clear all terminal history and start fresh.',
    exit: 'Close the terminal session gracefully.'
  };
  
  if (details[cmd]) {
    return `<span class="title">━━━ HELP: ${cmd.toUpperCase()} ━━━</span><br><br>${details[cmd]}<br><br>Usage: <span class="highlight">${cmd}</span>`;
  } else {
    return `<span class="error">No help available for command: ${cmd}</span>`;
  }
}

input.addEventListener('keydown', async (e) => {
  if (e.key === 'Enter') {
    const rawCmd = input.value.trim();
    
    if (rawCmd !== "") {
      commandCount++;
      echoCommand(rawCmd);
      
      const [cmdName, ...args] = rawCmd.split(/\s+/);
      const cmd = cmdName.toLowerCase();
      await processCommand(cmd, args);
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

async function processCommand(cmd, args) {
  // Handle clear command specially
  if (cmd === 'clear') {
    history.innerHTML = '';
    return;
  }
  
  // Handle exit command specially
  if (cmd === 'exit') {
    renderOutput('Closing terminal session...', 'warning');
    setTimeout(() => {
      renderOutput('<span class="success">Session terminated. Thanks for visiting!</span>', 'success');
      input.disabled = true;
    }, 500);
    return;
  }
  
  let response = commands[cmd];
  
  if (typeof response === 'function') {
    response = await response(args);
  }
  
  // Only render output if response is not a special marker (clear/exit)
  if (response && response !== 'clear' && response !== 'exit') {
    renderOutput(response, '');
  } else if (!response) {
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
