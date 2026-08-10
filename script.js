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
    <td><span
