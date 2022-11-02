const express = require('express');
const router = express.Router();
const db = require('../nowyDB')


router.route('/concerts').get( (req,res ) => {
    res.json(db.concerts)
});

router.route('/concerts/:id').get((req,res)=>{
    const abc = parseInt(req.params.id)
    res.json(db.concerts.find(element => element.id ===  abc));
})


router.route('/concerts').post((req, res) => {
    res.json(req.body);
    const random = db.concerts.length +(Math.floor(Math.random() * 1000))
    if(db.concerts.find(element => element.id === random)){
        random =random + random
    };
    const object={id: random, performer: req.body.performer, genre: req.body.genre, price: req.body.price, day: req.body.day, image: req.body.image } 
    db.concerts.push(object)
  });

router.route('/concerts/:id').put((req,res)=>{
    const object={id: parseInt(req.params.id), performer: req.body.performer, genre: req.body.genre, price: req.body.price, day: req.body.day, image: req.body.image } 
    const abc = parseInt(req.params.id)
    db.concerts=db.concerts.map(element =>{
        if(element.id === abc){
            return object
        }else{
           return element
        }
    })
    res.json(body)
})
router.route('/concerts/:id').delete((req,res) => {
    const abc = parseInt(req.params.id)
    let deleted = db.concerts.filter(element => element.id !== abc) //normalnie bym wstawił return
    db.concerts = deleted  // czemu to mi nie działa
    res.json(deleted); 

})

module.exports = router;