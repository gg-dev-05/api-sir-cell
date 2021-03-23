const router = require('express').Router();
const News = require('../models/news');

const CatchAsync = require('../utils/CatchAsync')

// get all news
router.get('/', CatchAsync(async (req, res) => {
    const news = await News.find({});
    res.send(news)
}))

// add new news item
// req.body: title, image, text
router.post('/', CatchAsync(async (req, res) => {
    const news = new News(req.body);
    await news.save();
    res.send(news)
}))

module.exports = router