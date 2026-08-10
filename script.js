const input = document.getElementById('command-input');
const history = document.getElementById('history');

// Boot Sequence
window.onload = () => {
  renderOutput("Initializing Luau Dev Environment...", "string");
  setTimeout(() => {
    renderOutput("Welcome, Vicente. Type <span class='highlight'>help</span> to begin.", "");
  }, 600);
};

// Command Database
const fileSystem = {
  whoami: `<span class="title">Vicente Arauz</span><br>
           11th Grade @ CEP | Full-Stack Luau Developer<br>
           Currently bridging Roblox architecture with modern Web Dev.`,
           
  skills: `> <span class="highlight">Core:</span> Luau, Roblox Frameworks, DataStores, OOP<br>
           > <span class="highlight">Web:</span> HTML5, CSS3, JavaScript (ES6+)<br>
           > <span class="highlight">Tools:</span> Moon Animator, Blender, Git`,
           
  projects: `[1] <span class="highlight">Kaze-Machi</span>: Coastal town map integration & Luau codebase architecture.<br>
             [2] <span class="highlight">Terminal Portfolio</span>: Raw JS/CSS interface.`,
             
  sports: `> <span class="highlight">Gridiron:</span> Vicente 'Nine' Arauz (Defensive Tackle / Edge Rusher)<br>
           > <span class="highlight">Pitch:</span> 'La Pantera' (Striker)`,
           
  status: `Working on Kaze-Machi. Counting down to Daniel Caesar in Bogotá (Nov 2026).`,
  
  help: `Available commands:<br>
         <span class="highlight">whoami</span>   - Developer identity<br>
         <span class="highlight">skills</span>   - Technical stack<br>
         <span class="highlight">projects</span> - Current work<br>
         <span class="highlight">sports</span>   - Athletics info<br>
         <span class="highlight">status</span>   - Current objective<br>
         <span class="highlight">clear</span>    - Wipe terminal output`
};

// Event Listener for Input
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const rawCmd = input.value.trim();
    const cmd = rawCmd.toLowerCase();
    
    if (rawCmd !== "") {
      echoCommand(rawCmd);
      processCommand(cmd);
    }
    
    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});

// Force focus on input when clicking anywhere
document.addEventListener('click', () => {
  input.focus();
});

// Helper Functions
function echoCommand(cmd) {
  const echoLine = document.createElement('div');
  echoLine.className = 'history-block cmd-echo';
  echoLine.innerHTML = `vicente@cep:~ $ ${cmd}`;
  history.appendChild(echoLine);
}

function processCommand(cmd) {
  if (cmd === 'clear') {
    history.innerHTML = '';
    return;
  }

  if (fileSystem[cmd]) {
    renderOutput(fileSystem[cmd]);
  } else {
    renderOutput(`zsh: command not found: ${cmd}`, 'error');
  }
}

function renderOutput(htmlContent, extraClass = '') {
  const outputWrapper = document.createElement('div');
  outputWrapper.className = `history-block cmd-output ${extraClass}`;
  outputWrapper.innerHTML = htmlContent;
  history.appendChild(outputWrapper);
}
