const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventsSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    venue: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    speakers: [
        {
            name: {
                type: String,
                required: true,
            },
            designation: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            }
        }
    ],
    oc: [
        {
            name: {
                type: String,
                required: true,
            },
            designation: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            description: {
                type: String,
            }
        }
    ],
})

const Events = mongoose.model('events', EventsSchema);
module.exports = Events