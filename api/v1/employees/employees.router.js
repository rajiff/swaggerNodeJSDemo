const router = require('express').Router();

router.get('/', function(req, res) {
  res.send([{ id: 1000, name: 'Basav' }]);
})

module.exports = router;