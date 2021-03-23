// Add fake news to database for testing

const data = require('./dummyNews')
const axios = require('axios')

data.forEach((newsItem) => {
    axios.post('http://localhost:5000/news', 
        newsItem
        )
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
})