const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/user')


router.route('/')
    .post(controller.registerUser)

router.route('/poap/:address')
    .get(controller.getUsersTickets)

module.exports = router;