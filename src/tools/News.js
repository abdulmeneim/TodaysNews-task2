const request = require("request")
const Thenews = (callback) => {
    const api_url = "https://newsapi.org/v2/top-headlines?country=eg&apiKey=cf06d8a563e0438b9bbdcb8a4117ba10"
    request({ url: api_url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect news api service', undefined)
        }
        else if (response.status === "error") {
            callback(response.message, undefined)
        }
        else {
            callback(undefined, response)
        }
    })
}

module.exports = Thenews