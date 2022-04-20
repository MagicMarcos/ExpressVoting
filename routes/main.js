const express = require('express');
const router = express.Router();
const homeController = require('../controllers/main');
const { useSocket } = require('../middleware/socket-io');

router.get('/', useSocket, homeController.getIndex);

module.exports = router;
