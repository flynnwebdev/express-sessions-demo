var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  if (req.session.views) {
    req.session.views++
    res.render('index', {
      title: 'Welcome Back!',
      message: `
        <h2>You've visited ${req.session.views} times!</h2>
        <p>Cookie expires in ${req.session.cookie.maxAge / 1000} seconds.</p>
      `
    });
  } else {
    req.session.views = 1
    res.render('index', {
      title: 'Welcome!',
      message: 'Welcome to the session demo! Refresh!'
    });
  }
});

module.exports = router;