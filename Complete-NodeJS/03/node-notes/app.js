const fs = require('fs');
const os = require('os');


var user = os.userInfo();
console.log(user);
/*
fs.appendFile('greetings.txt', 'HelloWorld', function (err) {
 
  if(err){
    console.log('Unable to read file');
  }
});

*/