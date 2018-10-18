module.exports.middlewares = function (app) {
    // Add headers
    app.use(function (req, res, next) {

        // Website you wish to allow to connect
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

        // Request methods you wish to allow
        res.setHeader('Access-Control-Allow-Methods', 'GET');

        // Request headers you wish to allow
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        // res.setHeader('Access-Control-Allow-Credentials', true);

        // Pass to next layer of middleware
        next();
    });
}

module.exports.constants = {
    port: 3000,
    mta: {
        key: '9f66793aa69d52cd938a1d3659310a7c',
        stations: [
            {
                id: 'G33',
                feed: 31,
                direction: 'S',
                limit: 2
            }, {
                id: 'G33',
                feed: 31,
                direction: 'N',
                limit: 2
            }, {
                id: 'A46',
                feed: 26,
                direction: 'S',
                limit: 2
            }
        ]
    }
}