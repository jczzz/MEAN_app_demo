
var router = require('express').Router();


router.use('/', require('./static'));
router.use('/api', require('./api'));

module.exports = router;
