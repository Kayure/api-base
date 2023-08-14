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


router.get('/fibonacci', (req, res) => {
    const number = fb.iterate(10000);
    res.send(number);
});

// router.get('/fibonacciThreaded', async (req, res) => {
//     runFibonacci({ iterations: 10000 }).then(result => log.info(result));
//     res.send('processing');
//   });





export default router;