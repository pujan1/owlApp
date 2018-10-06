const express = require('express');
const router = express.Router();


router.get('/standings', (req, res, next) => {

    res.send('standings')

});

router.get('/schedule', (req, res, next) => {

    res.send('schedule')

});

router.get('/players', (req, res, next) => {

    res.send('players')

});

router.get('/live-match', (req, res, next) => {

    res.send('live-match')

});

router.get('/news', (req, res, next) => {

    res.send('news')

});

router.get('/teams', (req, res, next) => {

    res.send('teams')

});

router.get('/stats', (req, res, next) => {

    res.send('stats')

});


module.exports = router;