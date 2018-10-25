## Project

This project is a simple application that displays MTA information for the next trains to come, as defined in the `server/config.js` file.

It also displays the current weather forecast (as defined in the `server/config.js` file).

Use it however you wish, fork it, modify it. As for me, I decided to display the webapp on a screen in my living room, so I can see it in the morning.

## Node.JS Server

In order to start the server, just run `node server.js` in the server folder.

You will need to configure the config.js file. 

The `process.env.MTA_KEY` and `process.env.OPENWEATHER_KEY` that you will see in this file are environment variables that need to be defined in a `.env` file, you just have to create this file in the server folder and add the following lines to it:

`MTA_KEY=yourmtakey`
`OPENWEATHER_KEY=youropenweatherkey`

## Web Project

This is an Angular project.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.