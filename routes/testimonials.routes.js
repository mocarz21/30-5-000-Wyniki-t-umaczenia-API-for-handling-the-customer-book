const express = require('express');
const router = express.Router();
//const db = require('../nowyDB');

const testimonialsControllers =require('../controllers/testimonials.controllers')
router.get('/testimonials',testimonialsControllers.getAll )
router.get('/testimonials/random',testimonialsControllers.getRandom)
router.get('/testimonials/:id',testimonialsControllers.getOne)
router.post('/testimonials',testimonialsControllers.post);
router.put('/testimonials/:id',testimonialsControllers.putOne)
router.delete('/testimonials/:id',testimonialsControllers.deleteOne)

module.exports = router;