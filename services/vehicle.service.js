const vehicleRepository = require('../repositories/vehicle.repository');

const createVehicle = async (vehicleData) => vehicleRepository.createVehicle(vehicleData);
const getVehicles = async () => vehicleRepository.getVehicles();
const getVehicleById = async (id) => vehicleRepository.getVehicleById(id);
const updateVehicle = async (id, data) => vehicleRepository.updateVehicle(id, data);
const deleteVehicle = async (id) => vehicleRepository.deleteVehicle(id);

module.exports = {
  createVehicle,
  getVehicles,
  getVehicleById,
  updateVehicle,
  deleteVehicle,
};
