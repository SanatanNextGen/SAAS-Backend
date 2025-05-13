const express = require('express');
const router = express.Router();
const consignorController = require('../controllers/consignor.controller');

router.post('/', consignorController.create);
router.get('/', consignorController.getAll);
router.get('/:id', consignorController.getById);
router.put('/:id', consignorController.update);
router.delete('/:id', consignorController.delete);

module.exports = router;
