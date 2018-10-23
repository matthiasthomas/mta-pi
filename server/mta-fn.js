const Mta = require('mta-gtfs');
const mtafn = {};
const config = require('./config.js');
const constants = config.constants;

var mta = new Mta({
    key: constants.mta.key, // only needed for mta.schedule() method
});

contains = (a, obj) => {
    var i = a.length;
    while (i--) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}

mtafn.getStatus = async () => {
    let status = {};
    try {
        status = await mta.status('subway');
    } catch (e) {
        console.error(e);
    }
    let trains = {};
    try {
        trains = await mtafn.getAllSchedules();
    } catch (e) {
        console.error(e);
    }
    let result = [];
    for (let r of status) {
        for (let t of trains) {
            if (r.name.indexOf(t.id) > -1 && !contains(result, r)) {
                result.push(r);
            }
        }
    }
    return result;
}

mtafn.getSchedule = async (id, feed, direction, limit) => {
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

mtafn.getAllSchedules = async () => {
    let result = [];
    for (let station of constants.mta.stations) {
        let trains = await mtafn.getSchedule(station.id, station.feed, station.direction, station.limit);
        result = result.concat(trains);
    }
    return result;
}

mtafn.test = async () => {
    let result = mta.stop(635);
    return result;
}

module.exports = mtafn;