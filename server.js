const express = require('express')
const app = express()
const Mta = require('mta-gtfs')
const port = 3000

const constants = require('./config.js').constants;
require('./config.js').middlewares(app);

var mta = new Mta({
    key: constants.key, // only needed for mta.schedule() method
});

async function getStatus() {
    let result = await mta.status('subway');
    result = result.filter((r) => {

    });
    return result;
}

async function getSchedule(id, feed, direction, limit) {
    direction = direction || false;
    limit = limit || false;
    let result = await mta.schedule(id, feed);
    let stop = await mta.stop(id);
    let stop_name = stop.stop_name;

    let trains = [];
    // Create trains array
    for (let d of ['N', 'S']) {
        let end = 0;
        for (let train of result.schedule[Object.keys(result.schedule)[0]][d]) {
            end++;
            trains.push({
                id: train.routeId,
                delay: train.delay,
                direction: d,
                arrival: train.arrivalTime,
                stop_name: stop_name
            });
            if (limit && (end === limit)) break;
        }
    }

    // if we defined a direction, get only this direction
    if (direction) {
        trains = trains.filter((train) => {
            return train.direction === direction;
        });
    }

    return trains;
}

async function getAllSchedules() {
    let result = [];
    for (let station of constants.stations) {
        let trains = await getSchedule(station.id, station.feed, station.direction, station.limit);
        result = result.concat(trains);
    }
    return result;
}

app.get('/', (req, res) => res.send('I\'m working just fine!'))
app.use(express.static('web'));
app.use('/live', async (req, res) => {
    return res.json(await getAllSchedules());
});
app.use('/status', async (req, res) => {

});

mta.status('subway').then(function (result) {
    console.log(result);
});



app.listen(port, () => console.log(`Example app listening on port ${port}!`))