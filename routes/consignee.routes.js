const express = require('express');
const router = express.Router();
const consigneeController = require('../controllers/consignee.controller');

router.post('/', consigneeController.create);
router.get('/', consigneeController.getAll);
router.get('/:id', consigneeController.getById);
router.put('/:id', consigneeController.update);
router.delete('/:id', consigneeController.delete);

module.exports = router;
