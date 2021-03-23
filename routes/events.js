const router = require('express').Router();
const Events = require('../models/events');

const CatchAsync = require('../utils/CatchAsync')

// get all events
router.get('/', CatchAsync(async (req, res) => {
    const events = await Events.find({});
    res.send(events)
}))

// add new news item
// req.body: title, date, image, venue, description, speakers, oc
router.post('/', CatchAsync(async (req, res) => {
    const events = new Events(req.body);
    await events.save();
    res.send(events)
}))

module.exports = router