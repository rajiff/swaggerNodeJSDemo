const router = require('express').Router();

router.post('/', function(req, res) {
  res.send({ id: 1000, name: 'Basav' });
})

router.get('/', function(req, res) {
  res.send([{ id: 1000, name: 'Basav' }]);
})

router.get('/:empid', function(req, res) {
  res.send({ id: req.params.empid, name: 'Basav' });
})

module.exports = router;