const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminRoutes = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    //const home = adminRoutes.home;
    res.render('forms', {pageTitle: "Frieza's Many Forms", path: '/'});
});

module.exports = router;