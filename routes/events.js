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

// update event
// req.body: title, date, image, venue, description, speakers, oc
router.put('/:id', CatchAsync(async (req, res) => {
    const id = req.params.id
    const events = await Events.findById(id);
    const obj = req.body;
    let updatedEvent;
    if("oc" in obj){
        updatedEvent = await Events.findByIdAndUpdate(id, {$addToSet: {"oc": obj.oc}}, {returnOriginal: false});
        delete obj.oc
    }
    if("speakers" in obj){
        updatedEvent = await Events.findByIdAndUpdate(id, {$addToSet: {"speakers": obj.speakers}}, {returnOriginal: false});
        delete obj.speakers
    }
    updatedEvent = await Events.findByIdAndUpdate(id, {...events._doc, ...obj}, {returnOriginal: false});
    res.send(updatedEvent)
}))

// Clear all events ROUTE
router.get('/clear', CatchAsync(async (req, res) => {
    if(req.headers.token === process.env.token){
        await Events.deleteMany()
        return res.send("Successfully Cleared all events")
    }
    else res.send("Not Authorized")
}))
module.exports = router