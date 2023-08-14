import { Router } from 'express';
const fb = require('fibonacci');

import * as ApiController from '../controllers/apiController';

const router = Router();

router.post('/registerUser', ApiController.register);
router.post('/login', ApiController.login);
router.get('/listEmail', ApiController.listEmail);
router.get('/listAll', ApiController.listAll);
router.delete('/deleteUser/:id', ApiController.deleteUser);
router.patch('/updateUser/:id', ApiController.updateUser);






export default router;
