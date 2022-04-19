const express = require('express');
const router = express.Router();
const homeController = require('../controllers/main');

router.get('/', homeController.getIndex);

module.exports = router;
