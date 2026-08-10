const input = document.getElementById('command-input');
const output = document.getElementById('output');

const commands = {
  help: "Available commands: about, skills, projects, clear",
  about: "Luau / Roblox Developer building game frameworks and learning modern Web Dev (HTML, CSS, JS).",
  skills: "• Game Dev: Luau, Roblox API, Framework Architecture• Web Dev: HTML5, CSS3, JavaScript (ES6+)",
  projects: "1. Kaze-Machi - Roblox Experience2. Web Terminal - Interactive GitHub Page"
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    const cmd = input.value.trim().toLowerCase();
    printLine(`$ ${input.value}`, 'green-text');

    if (cmd === 'clear') {
      output.innerHTML = '';
    } else if (commands[cmd]) {
      printLine(commands[cmd]);
    } else if (cmd !== '') {
      printLine(`Command not found: '${cmd}'. Type 'help' for commands.`, 'highlight');
    }

    input.value = '';
    window.scrollTo(0, document.body.scrollHeight);
  }
});

function printLine(text, className = '') {
  const p = document.createElement('p');
  if (className) p.classList.add(className);
  p.innerHTML = text;
  output.appendChild(p);
}