const express = require('express');
const router = express.Router();
const passport = require('../config/passport');



exports.authenticate = async (req, res, next) => {
    passport.authenticate('google', { scope: ['profile'] })
}

exports.googleCallback = async (req, res, next) => {
    passport.authenticate('google', { failureRedirect: ['/'] })
}