const router = require('express').Router();
const { Post, User } = require('../models');
// const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        // Get all projects and JOIN with user data
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('home', {
            posts,
            logged_in: req.session.logged_in,
            style: 'style.css'
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }

    res.render('login', {
        style: 'style.css'
    });
});
router.get('/signup', (req, res) => {
    //calling handlebars file
    res.render('signup', {
        style: 'style.css'
    })
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard', {
        style: 'style.css'
    })
});
module.exports = router;

