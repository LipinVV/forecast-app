require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const request = require('request');
const path = require("path");

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(cors({
    origin: 'https://forecast-app-leaflet.herokuapp.com/'
}));

app.get('/forecast', (req, response) => {
    // const api_key = process.env.REACT_APP_API_KEY;
    const api_key = 4e91f308-8e25-44fd-a108-bb8d5a6aac1b;
    const url = `https://api.weather.yandex.ru/v2/forecast?lat=${req.query.lat}&lon=${req.query.lon}`
    request({
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Headers": "X-Yandex-API-Key",
            "X-Yandex-API-Key": api_key
        },
        uri: url,
        method: 'GET'
    }, function (err, res) {
        response.send(res.body);
    });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on ${port}`);
});
