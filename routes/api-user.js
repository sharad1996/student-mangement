var express = require('express');
var router = express.Router();
const userControllers = require('../controllers/user');

router.post('/addUser', userControllers.addUser);

router.get('/getUsers', userControllers.getUsers);

router.put('/updateUser/:id', userControllers.updateUser);

router.delete('/deleteUser/:id', userControllers.deleteUser);

router.post('/login', userControllers.loginUser);

module.exports = router;
