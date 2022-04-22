const express = require('express');
const router = express.Router();
const postsController = require('../controllers/vote');
const { useSocket } = require('../middleware/socket-io');

router.put('/vote/:id', useSocket, postsController.updateVote);

module.exports = router;
