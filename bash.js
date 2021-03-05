process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  // console.log(cmd.slice(0, 2));
  if (cmd === "pwd") {
    const pwd = require("./pwd.js");
    pwd();
  }
  if (cmd === "ls") {
    require("./ls.js")();
  }
  if (cmd.slice(0, 3) === "cat") {
    require("./cat.js")(cmd.slice(4));
  }
});
