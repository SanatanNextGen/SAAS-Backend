const brokerRepo = require('../repositories/broker.repository');

exports.createBroker = async (data) => await brokerRepo.create(data);

exports.getAllBrokers = async () => await brokerRepo.findAll();

exports.getBrokerById = async (id) => await brokerRepo.findById(id);

exports.updateBroker = async (id, data) => await brokerRepo.updateById(id, data);

exports.deleteBroker = async (id) => await brokerRepo.deleteById(id);
