const fetch = require('node-fetch');

const getPeople = () => {
    return fetch('https://swapi.dev/api/films/1/')
        .then(res => res.json())
        .then(data => {
            return {
                title: data.title,
                results: data.res
            }
        }).catch(err => err);
}

module.exports = getPeople;