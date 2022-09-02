const fs = require("fs");

// add a line to a lyric file, using appendFile
fs.appendFile("static/users_test.txt", "\nRight there up on Broadway", (err) => {
  if (err) throw err;
  console.log("The lyrics were updated!");
});
