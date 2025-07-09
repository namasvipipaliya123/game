const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/invite-code', authController.getInviteCode);
router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
