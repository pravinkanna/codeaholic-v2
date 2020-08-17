const express = require('express');
const router = express.Router();
const { createSubmission, getSubmission, deleteSubmission, createShare, getShare, deleteShare } = require('../controllers/ide')


router.route('/')
    .post(createSubmission)

router.route('/share')
    .post(createShare)

router.route('/share/:id')
    .get(getShare)
    .delete(deleteShare)

router.route('/:token')
    .get(getSubmission)
    .delete(deleteSubmission)

module.exports = router;