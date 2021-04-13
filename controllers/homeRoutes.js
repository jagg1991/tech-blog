const router = require('express').Router();
const { Post, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', (req, res) => {
    // If the user is already logged in, redirect the request to another route


    res.render('home');
});
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});
router.get('/signup', (req, res) => {
    //calling handlebars file
    res.render('signup')
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard')
});
module.exports = router;

