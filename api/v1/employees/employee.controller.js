
const findEmployees = function(findQueryParams, options, done) {
	done(null, [{ empId: 1000, name: 'Basav' }]);
}

const getEmployeeById = function(empId, done) {
	done(null, { empId: empId, name: 'Basav' });
}

const registerNewEmployee = function(newEmpObj, done) {
	done(null, { empId: 1000, name: 'Basav' });
}

module.exports = {
	findEmployees,
	getEmployeeById,
	registerNewEmployee
}