const express = require('express');
const router = express.Router();

const { authenticate, googleCallback } = require('../controllers/auth');


router.route('/google')
    .get(authenticate)

router.route('/google/callback')
    .post(googleCallback)

module.exports = router;
