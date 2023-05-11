const fetch = require('node-fetch');

const getPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/films/1/');
        const data = await res.json();
        return {
            title: data.title,
            results: data.res
        };
    } catch (err) {
        return err;
    }
}

const isCity = (city, db) => {
    return db.includes(city);
}

module.exports = { getPeople, isCity };