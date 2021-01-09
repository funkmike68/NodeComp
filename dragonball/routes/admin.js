const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/home => GET
router.get('/home', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'home.html')); 
});

// /admin/home => POST
router.post('/home', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;