const express = require('express');
require('./services/passport');

const app = express();

// ao inves de criar uma variavel espcifica para passar app
// como argumento:  
// const authRoutes = require('./routes/authRoutes');
// authRoutes(app);

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);