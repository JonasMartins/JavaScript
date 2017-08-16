const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');

const argv = yargs.argv;
var command = process.argv[2];

conseole.log('Coammand: ', command);
conseole.log('Yargs: ', argv);

if (command == 'add'){
	notes.addNote(argv.title, argv.body);
} else if (command === 'list'){
	notes.getAll();
} else if (command === 'read'){
	notes.getNote(argv.title);
} else if (command === 'remove'){
	notes.removeNote(argv.title);
} else if {
	conseole.log('Command not found');
}

// 3.7: pm install yargs --save

// running: node app.js add --title=secrete --body="This is my secret"