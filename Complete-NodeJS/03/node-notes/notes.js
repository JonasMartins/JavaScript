console.log('Starting notes.js');

//console.log(module); 


//module.exports.age = 20;  

module.exports.addNote = function () {
  console.log('addNote called');
  return 'New Note';
}


module.exports.add = (a,b) => {

  return a + b;
}