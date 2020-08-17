const express = require('express');
const router = express.Router();
const { createSubmission, getSubmission, deleteSubmission, createShare } = require('../controllers/ide')


router.route('/')
    .post(createSubmission)

router.route('/share')
    .post(createShare)

router.route('/:token')
    .get(getSubmission)
    .delete(deleteSubmission)

module.exports = router;