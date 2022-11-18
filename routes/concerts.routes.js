const express = require('express');
const { json } = require('express');
const router = express.Router();
//const db = require('../nowyDB')

const concertControllers =require('../controllers/concerts.controllers')


router.get('/concerts', concertControllers.getAll );
router.get('/concerts/:id',concertControllers.getOne);
router.post('/concerts',concertControllers.post);
router.put('/concerts/:id',concertControllers.putOne);
router.delete('/concerts/:id',concertControllers.deleteOne);


module.exports = router;