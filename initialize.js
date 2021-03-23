// Initial Configuration of the express app

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


require('dotenv').config();

const app = express()
app.use(cors());
app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

const connection = mongoose.connection;
connection.once("open", () => {
	console.log("MongoDB database linked successfully!");
});

module.exports = app;