const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
// const GoogleStrategy = require('passport-google-oauth20');

const User = require('../models/User');

const cookieExtracor = req => {
    let token = null;
    if (req && req.cookies) {
        token = req.cookies["access_token"];
    }
    return token;
}

// Authorization 
passport.use(new JwtStrategy({
    jwtFromRequest: cookieExtracor,
    secretOrKey: "Thisisthebestsecretorkeyintheentiremilkywaygalaxy"
}, (payload, done) => {
    User.findById({ _id: payload.sub }, (err, user) => {
        if (err)
            return err;
        if (user)
            return done(null, user);
        else
            return done(null, false);
    })
}))

//Authenticate local strategy with email and password
passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        // checks User found
        if (!user)
            return done(null, false, { message: 'Email not exists' });
        //Checks password is correct
        user.comparePassword(password, done);

    } catch (err) { // If something wrong with DB
        return done(err);
    }
}))
