const axios = require('axios');
const url = 'https://randomuser.me/api/?results=20';

async function fetchData () {
    return axios.get(url).then(function (response) {
        console.log(response.data.results);
    }).catch(function (error) {
        console.log("Error: ", error.response.data);
    });
}

fetchData();