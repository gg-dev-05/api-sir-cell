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

// update a news
// req.body: title, image, text
router.put('/:id', CatchAsync(async (req, res) => {
    const id = req.params.id
    const news = await News.findById(id);
    const updatedNews = await News.findByIdAndUpdate(id, {...news._doc, ...req.body}, {returnOriginal: false});
    res.send(updatedNews)

}))

module.exports = router