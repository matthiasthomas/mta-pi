const express = require('express')
const app = express()
const config = require('./config.js');
const constants = config.constants;

app.use(express.static('web'));
config.middlewares(app);
require('./routes.js')(app);

app.listen(constants.port, () => console.log(`Example app listening on port ${constants.port}!`))