const fs = require('fs');
const os = require('os');

const _ = require('lodash');

const notes = require('./notes.js');

/* function from nodash */
console.log(_.isString('test'));


/* function from nodash */
var filterArray = _.uniq(['test', 1,'test',2,1,3,4,5]);
console.log(filterArray);

/*Saida: ['test',1,2,3,4,5], retirando as duplicatas */




/*

var res = notes.addNote();
console.log(res);
console.log('Result: ', notes.add(17,-5));


var user = os.userInfo();
//console.log(user);
fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age} years old!` , function (err) {
 
  if(err){
    console.log('Unable to read file');
  }
});

*/