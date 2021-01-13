const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// /admin/home => GET
router.get('/home', (req, res, next) => {
  res.render('home', {pageTitle: 'Home', path: '/admin/home'}); 
});

// /admin/home => POST
router.post('/home', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;