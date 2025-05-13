const express = require('express');
const router = express.Router();
const brokerController = require('../controllers/broker.controller');

router.post('/', brokerController.create);
router.get('/', brokerController.getAll);
router.get('/:id', brokerController.getById);
router.put('/:id', brokerController.update);
router.delete('/:id', brokerController.delete);

module.exports = router;
