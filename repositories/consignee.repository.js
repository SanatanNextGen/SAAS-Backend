const Consignee = require('../models/consignee.model');

exports.create = async (data) => await Consignee.create(data);

exports.findAll = async () => await Consignee.find();

exports.findById = async (id) => await Consignee.findById(id);

exports.updateById = async (id, data) => await Consignee.findByIdAndUpdate(id, data, { new: true });

exports.deleteById = async (id) => await Consignee.findByIdAndDelete(id);
