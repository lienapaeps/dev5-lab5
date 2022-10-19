const express = require('express');
const router = express.Router();
const messagesController = require('../controllers/messages');

// get all messages
router.get('/', messagesController.getAll);

// get id
router.get('/:id', messagesController.getById);

// post
router.post('/', messagesController.create);

// put id
router.put('/:id', messagesController.update);

// delete id
router.delete('/:id', messagesController.delete);

// get user 
router.get('/user/:username', messagesController.getByUsername);

module.exports = router;