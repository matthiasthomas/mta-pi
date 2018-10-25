const express = require('express')
const app = express()
const config = require('./config.js');
const middlewares = require('./middlewares.js');

app.use(express.static('web'));
middlewares(app);
require('./routes.js')(app);

app.listen(config.port, () => console.log(`Example app listening on port ${config.port}!`))