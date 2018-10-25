const weatherfn = {};
const fetch = require('node-fetch');
const config = require('./config.js');

weatherfn.getWeather = async () => {
    try {
        const url = config.openweather.url
            + '/weather?zip='
            + config.openweather.zip_code
            + ','
            + config.openweather.country
            + '&units='
            + config.openweather.units
            + '&APPID='
            + config.openweather.key;

        const response = await fetch(url, { method: 'GET' });
        const json = await response.json();
        let result = {};
        if (json && json.main && json.weather) {
            result = {
                temperature: {
                    current: Math.round(json.main.temp),
                    min: Math.round(json.main.temp_min),
                    max: Math.round(json.main.temp_max)
                },
                description: json.weather[0].description,
                icon: json.weather[0].icon
            };
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}



module.exports = weatherfn;