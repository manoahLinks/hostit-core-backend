const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/links');


router.route('/')
    .get(controller.getAllLinks)

router.route('/:eventId/addlinks')
    .post(controller.addLinks)


module.exports = router;