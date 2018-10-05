const express = require('express');
const router = express.Router();


router.get('/standings', (req, res, next) => {

    res.send('standings')

});


module.exports = router;