const output = document.getElementById("output");
const commandInput = document.getElementById("command");

const responses = {
    help: `
Available commands:
- about
- skills
- clear
`,
    about: `
Name: Ammaar
Role: Developer
Mode: Terminal Interface
`,
    skills: `
Java
Python
Machine Learning
Web Development
Linux
`
};

function print(text) {
    const p = document.createElement("pre");
    p.textContent = text;
    output.appendChild(p);
    output.scrollTop = output.scrollHeight;
}

print("Type 'help' to begin...\n");

commandInput.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        const cmd = commandInput.value.trim().toLowerCase();
        print("> " + cmd);

        if (cmd === "clear") {
            output.innerHTML = "";
        } else if (responses[cmd]) {
            print(responses[cmd]);
        } else {
            print("Command not found");
        }

        commandInput.value = "";
    }
});
