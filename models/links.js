const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    eventId: {type: Number},
    links: {type: []},
    count: {type: Number, default: 0}
})

const Link = mongoose.model('link', linkSchema);

module.exports = Link;