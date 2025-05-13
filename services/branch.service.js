const branchRepository = require('../repositories/branch.repository');

exports.createBranch = async (data) => await branchRepository.createBranch(data);
exports.getAllBranches = async () => await branchRepository.getAllBranches();
exports.getBranchById = async (id) => await branchRepository.getBranchById(id);
exports.updateBranch = async (id, data) => await branchRepository.updateBranch(id, data);
exports.deleteBranch = async (id) => await branchRepository.deleteBranch(id);
