const router = require('express').Router();
const empCtrl = require('./employee.controller');

router.post('/', function(req, res) {
  try {
    empCtrl.registerNewEmployee(req.body, (err, result) => {
      if (err) {
        console.log("Error with empCtrl.registerNewEmployee ERROR: ", err);
        return res.status(400).send({ message: 'Encountering errors, please try later..!' });
      }
      return res.send(result);
    })
  } catch (ex) {
    return res.status(500).send({ message: 'Experiencing issues in processing your request, please try later..!' });
  }
})

router.get('/', function(req, res) {
  try {
  	let findQueryParams = {}; //requ.query.params.empIds
  	let options = {};
    empCtrl.findEmployees(findQueryParams, options, (err, result) => {
      if (err) {
        console.log("Error with empCtrl.findEmployees ERROR: ", err);
        return res.status(400).send({ message: 'Encountering errors, please try later..!' });
      }
      return res.send(result);
    })
  } catch (ex) {
    return res.status(500).send({ message: 'Experiencing issues in processing your request, please try later..!' });
  }
})

router.get('/:empid', function(req, res) {
  try {
    empCtrl.getEmployeeById(req.params.empid, (err, result) => {
      if (err) {
        console.log("Error with empCtrl.getEmployeeById ERROR: ", err);
        return res.status(400).send({ message: 'Encountering errors, please try later..!' });
      }
      return res.send(result);
    })
  } catch (ex) {
    return res.status(500).send({ message: 'Experiencing issues in processing your request, please try later..!' });
  }
})

module.exports = router;