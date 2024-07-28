const Link = require('../models/links');
const { generateArray } = require('../utils/helpers');


exports.addLinks = async (req, res) => {

    const {
        links
    } = req.fields;

    const {eventId} = req.params;

    try {

        const foundEvent = await Link.findOne({eventId});

        if(foundEvent) {
            throw new Error('Links already exist for this event');
        }

        const linksArr = links.split(",");

        const linkObj = generateArray(linksArr)

        console.log(linkObj)
        const response = await Link.create({eventId: eventId, links: linkObj});

        return res.status(200).json({message: "success", data: response});
        
    } catch (error) {
        res.status(400).json({message: 'error', error: error.message});
    }
}

exports.getAllLinks = async (req, res) => {
    try {
        const response = await Link.find({})

        return res.status(200).json({message: "success", data: response});
        
    } catch (error) {
        res.status(400).json({message: 'error', error: error.message});
    }
}

module.exports = exports