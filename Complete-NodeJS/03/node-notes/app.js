const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var res = notes.addNote();
//console.log(res);

console.log('Result: ', notes.add(17,-5));

/*

var user = os.userInfo();
//console.log(user);
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old!` , function (err) {
 
  if(err){
    console.log('Unable to read file');
  }
});

*/