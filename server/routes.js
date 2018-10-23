const mtafn = require('./mta-fn.js');
const weatherfn = require('./weather-fn.js');
module.exports = (app) => {

    app.get('/', async (req, res) => {
        res.send('I\'m working just fine!');
    });

    app.use('/live', async (req, res) => {
        return res.json(await mtafn.getAllSchedules());
    });

    app.use('/status', async (req, res) => {
        return res.json(await mtafn.getStatus());
    });

    app.use('/weather', async (req, res) => {
        return res.json(await weatherfn.getWeather());
    });
}