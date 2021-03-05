const fs = require("fs");

module.exports = function (filename) {
  // console.log(filename);
  fs.readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
};
