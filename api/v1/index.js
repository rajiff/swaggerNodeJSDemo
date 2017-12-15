const router = require('express').Router();

router.use('/employees', require('./employees'));

module.exports = router;