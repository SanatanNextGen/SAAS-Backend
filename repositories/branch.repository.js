const Branch = require('../models/branch.model');

exports.createBranch = async (data) => await Branch.create(data);
exports.getAllBranches = async () => await Branch.find();
exports.getBranchById = async (id) => await Branch.findById(id);
exports.updateBranch = async (id, data) => await Branch.findByIdAndUpdate(id, data, { new: true });
exports.deleteBranch = async (id) => await Branch.findByIdAndDelete(id);
