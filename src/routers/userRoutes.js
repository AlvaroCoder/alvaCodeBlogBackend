const router = require('express').Router();
const express = require('express');
const UserController = require('../Controllers/userController');

const userController = UserController;
router.use(express.urlencoded({extended : true}));
router.post('/signUp', userController.signUp);

module.exports = router;