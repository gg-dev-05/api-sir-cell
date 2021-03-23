// Add fake events to database for testing
function addEvents(){

    const data = require('./dummyEvents')
    const axios = require('axios')
    
    data.forEach((event) => {
        axios.post('http://localhost:5000/events', 
            event
            )
            .then(function (response) {
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    })
}

module.exports = addEvents