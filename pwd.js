// process.stdout.write("prompt > ");

// process.stdin.on("data", (data) => {
//   const cmd = data.toString().trim();

//   if (cmd === "pwd") {
//     process.stdout.write(process.cwd());
//     process.stdout.write("\npromt > ");
//   }
// });

module.exports = function () {
    // if (cmd === "pwd") {
        process.stdout.write(process.cwd());
        process.stdout.write("\npromt > ");
//    }  
} 