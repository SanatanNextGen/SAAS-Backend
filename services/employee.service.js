const employeeRepo = require('../repositories/employee.repository');

exports.createEmployee = (data) => employeeRepo.create(data);
exports.getAllEmployees = () => employeeRepo.findAll();
exports.getEmployeeById = (id) => employeeRepo.findById(id);
exports.updateEmployee = (id, data) => employeeRepo.update(id, data);
exports.deleteEmployee = (id) => employeeRepo.remove(id);
