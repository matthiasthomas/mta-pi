require('dotenv').config();

module.exports = {
    port: 3000,
    mta: {
        key: process.env.MTA_KEY,
        stations: [
            {
                id: 'G33',
                feed: 31,
                direction: 'S',
                limit: 1
            },
            {
                id: 'G33',
                feed: 31,
                direction: 'N',
                limit: 1
            }, {
                id: 'A46',
                feed: 26,
                direction: 'S',
                limit: 2
            }
        ]
    },
    openweather: {
        url: 'https://api.openweathermap.org/data/2.5',
        key: process.env.OPENWEATHER_KEY,
        zip_code: '11216',
        country: 'us',
        units: 'metric'
    }
}