const request = require('postman-request')

const forecast = (lat, long, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=30698f082515ebcb6bf3577bf4811ca8&query=${lat},${long}&units=f`

    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather services.')
        } else if (body.error) { 
            callback('Unable to find location. Try another search.')
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast