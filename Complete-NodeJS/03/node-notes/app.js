const fs = require('fs');

const _ = require('lodash');

const notes = require('./notes.js');

var command = process.argv[2];

console.log(process.argv);
conseole.log('Coammand: ', command);

if (command == 'add'){
	conseole.log('Adding new note');
} else if (command === 'list'){
	conseole.log('Listing all notes');
} else if {
	conseole.log('Command not found');
}