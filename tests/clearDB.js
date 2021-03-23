const { default: axios } = require('axios');
require('dotenv').config();

// Token necessary for clearing database
axios.defaults.headers.get['token'] = process.env.token

// Remove All previous news
axios.get('http://localhost:5000/news/clear')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })

// Remove All previous events
axios.get('http://localhost:5000/events/clear')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  })