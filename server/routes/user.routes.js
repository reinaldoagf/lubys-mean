const express= require('express');
const router= express.Router();

const userController= require('../controllers/user.controller');

router.get('/api/users',userController.getUsers);
router.get('/api/users/:id', userController.getUser);
router.post('/api/users', userController.storeUser);
router.put('/api/users/:id', userController.updateUsers);
router.delete('/api/users/:id', userController.deleteUser);

module.exports=router;