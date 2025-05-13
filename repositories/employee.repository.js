const Employee = require("../models/employee.model");

exports.create = async (data) => {
  return await Employee.create(data);
};

exports.findAll = async () => {
  return await Employee.find();
};

exports.findById = async (id) => {
  return await Employee.findById(id);
};

exports.update = async (id, data) => {
  return await Employee.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await Employee.findByIdAndDelete(id);
};
