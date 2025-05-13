const Consignor = require("../models/consignor.model");

exports.create = async (data) => await Consignor.create(data);

exports.findAll = async () => await Consignor.find();

exports.findById = async (id) => await Consignor.findById(id);

exports.updateById = async (id, data) =>
  await Consignor.findByIdAndUpdate(id, data, { new: true });

exports.deleteById = async (id) => await Consignor.findByIdAndDelete(id);
