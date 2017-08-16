console.log('Starting notes.js');

var addNote = (title, body) => {
	console.log('Adding Note', title, body);
};

var getAll = () => {
	console.log('Getting all Notes');
};

var getNote = (title) => {
	console.log('Getting note', title);
};

var removeNote = (title) => {
	console.log('Removing note', title);
};


module.exports = {
	//addNote = addNote; = addNote, sempre que ambos tem exatamente o mesmo nome
	addNote,
	getAll,
	getNote,
	removeNote
};