const userInstagram = require("user-instagram");
const prompt = require('prompt-sync')();

var username = prompt("enter username:")

userInstagram(username)
.then(console.log)
  .catch(console.error);
