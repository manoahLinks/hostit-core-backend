const express = require('express'),
    router = express.Router(),
    controller = require('../controllers/events')

router.route('/')
    .post(controller.createEvent)

router.route('/:eventId/purchase-ticket') 
    .post(controller.buyTicket)

router.route('/:eventId/cancel-event')
    .patch(controller.cancelEvent)
    
router.route('/:eventId/cliam')
    .post(controller.cliamPoap)

router.route('/:eventId/verify-cliam')
    .post(controller.confirmEligibility)

router.route('/reschedule-event')
    .patch(controller.rescheduleEvent)

router.route('/:eventId/create-event-ticket')
    .post(controller.createEventTicket)

module.exports = router;