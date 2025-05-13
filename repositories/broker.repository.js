const Broker = require('../models/broker.model');

exports.create = async (data) => await Broker.create(data);

exports.findAll = async () => await Broker.find();

exports.findById = async (id) => await Broker.findById(id);

exports.updateById = async (id, data) => await Broker.findByIdAndUpdate(id, data, { new: true });

exports.deleteById = async (id) => await Broker.findByIdAndDelete(id);
