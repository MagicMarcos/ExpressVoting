const express = require('express');
const router = express.Router();
const postsController = require('../controllers/vote');

router.put('/vote/:id', postsController.updateVote);

module.exports = router;
