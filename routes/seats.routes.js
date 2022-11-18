const express = require('express');
const router = express.Router();
const db = require('../nowyDB')

const seatsControllers =require('../controllers/seats.controllers')

router.get('/seats', seatsControllers.getAll);
router.get('/seats/:id',seatsControllers.getOne )
router.post('/seats',seatsControllers.post );
router.put('/seats/:id',seatsControllers.putOne )
router.delete('/seats/:id',seatsControllers.deleteOne )

module.exports = router;