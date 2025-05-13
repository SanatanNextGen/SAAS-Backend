const consignorRepo = require('../repositories/consignor.repository');

exports.createConsignor = async (data) => await consignorRepo.create(data);

exports.getAllConsignors = async () => await consignorRepo.findAll();

exports.getConsignorById = async (id) => await consignorRepo.findById(id);

exports.updateConsignor = async (id, data) => await consignorRepo.updateById(id, data);

exports.deleteConsignor = async (id) => await consignorRepo.deleteById(id);
