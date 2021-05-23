const userInstagram = require("user-instagram");

var post = prompt("enter post url(example:5D78W28W like that:")

userInstagram(post)
.then(console.log)
  .catch(console.error);
