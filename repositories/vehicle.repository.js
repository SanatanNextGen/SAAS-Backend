const Vehicle = require('../models/vehicle.model');

const createVehicle = async (data) => Vehicle.create(data);
const getVehicles = async () => Vehicle.find();
const getVehicleById = async (id) => Vehicle.findById(id);
const updateVehicle = async (id, data) => Vehicle.findByIdAndUpdate(id, data, { new: true });
const deleteVehicle = async (id) => Vehicle.findByIdAndDelete(id);

module.exports = {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
