const brokerService = require('../services/broker.service');

exports.create = async (req, res) => {
  try {
    const broker = await brokerService.createBroker(req.body);
    res.status(201).json(broker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const brokers = await brokerService.getAllBrokers();
    res.status(200).json(brokers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const broker = await brokerService.getBrokerById(req.params.id);
    if (!broker) return res.status(404).json({ message: 'Broker not found' });
    res.status(200).json(broker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const broker = await brokerService.updateBroker(req.params.id, req.body);
    res.status(200).json(broker);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    await brokerService.deleteBroker(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
