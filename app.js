var request = require('request');

const url = 'https://api.darksky.net/forecast/672124a6f1355452da2c8f30d9f24459/37.8267,-122.4233?lang=en';

request({ url: url, json: true }, (error, response) => {
    if (error) {
        console.log('Unable to connect to weather service!');
    } else if (response.body.error) {
        console.log('Unable to find location');
    } else {
        const temperature = response.body.currently.temperature;
        const precipProbability = response.body.currently.precipProbability;
        const summery = response.body.daily.data[0].summery;
        console.log(`${summery} its is currently ${temperature} degrees out. there is a ${precipProbability}% chnace of rain`);
    }
});

const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2FlZHNoYXJxYXdpIiwiYSI6ImNrMGRzYmlnazAxYXMzbW5wNWhkMmI3cHkifQ.I8P3Sfr7aL6JFtnp1FnQrA';
request({ url: geocodeURL, json: true }, (error, response) => {
    if (error) {
        console.log('unable to connect to location services');
    } else if (response.body.features.length === 0) {
        console.log('Unable to find location. Try another search. ');
    } else {
        const latitude = response.body.features[0].center[1];
        const longtitude = response.body.features[0].center[0];
        console.log(`${latitude} ${longtitude}`);
    }
});