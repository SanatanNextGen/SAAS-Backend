const consigneeRepo = require('../repositories/consignee.repository');

exports.createConsignee = async (data) => await consigneeRepo.create(data);

exports.getAllConsignees = async () => await consigneeRepo.findAll();

exports.getConsigneeById = async (id) => await consigneeRepo.findById(id);

exports.updateConsignee = async (id, data) => await consigneeRepo.updateById(id, data);

exports.deleteConsignee = async (id) => await consigneeRepo.deleteById(id);
