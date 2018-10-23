const weatherfn = {};
const fetch = require('node-fetch');
const config = require('./config.js');
const constants = config.constants;

weatherfn.getWeather = async () => {
    try {
        const url = constants.openweather.url
            + '/weather?zip='
            + constants.openweather.zip_code
            + ','
            + constants.openweather.country
            + '&units='
            + constants.openweather.units
            + '&APPID='
            + constants.openweather.key;

        const response = await fetch(url, { method: 'GET' });
        const json = await response.json();
        const result = {
            temperature: {
                current: Math.round(json.main.temp),
                min: Math.round(json.main.temp_min),
                max: Math.round(json.main.temp_max)
            },
            description: json.weather[0].description,
            icon: json.weather[0].icon
        };
        return result;
    } catch (error) {
        console.log(error);
    }
}



module.exports = weatherfn;