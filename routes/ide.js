const express = require('express');
const router = express.Router();
const { runSubmission, deleteSubmission } = require('../controllers/ide')
const { createShare, getShare, deleteShare } = require('../controllers/share')


router.route('/')
    .post(runSubmission)

router.route('/share')
    .post(createShare)

router.route('/share/:id')
    .get(getShare)
    .delete(deleteShare)

router.route('/:token')
    .delete(deleteSubmission)

module.exports = router;