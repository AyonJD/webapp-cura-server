const express = require('express')
const { createUser, getUser, loginUser } = require('../Controllers/UsersController.js');
const router = express.Router();

router.get('/', getUser);
router.post('/signup', createUser)
router.post('/login', loginUser)

module.exports = router;