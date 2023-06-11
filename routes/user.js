const express = require('express');
const router = express.Router();

const { register, login, logout, getSaveProgram, saveProgram, authenticated } = require('../controllers/user');
const passport = require('passport');


router.route('/register')
  .post(register)

router.route('/login')
  .post(passport.authenticate('local', { session: false }), login)

router.route('/logout')
  .get(passport.authenticate('jwt', { session: false }), logout)

router.route('/save')
  .get(passport.authenticate('jwt', { session: false }), getSaveProgram)
  .post(passport.authenticate('jwt', { session: false }), saveProgram)

router.route('/authenticated')
  .get(passport.authenticate('jwt', { session: false }), authenticated)


module.exports = router;