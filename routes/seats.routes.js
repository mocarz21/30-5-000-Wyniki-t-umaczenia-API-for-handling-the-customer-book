const express = require('express');
const router = express.Router();
const db = require('../nowyDB')

router.route('/seats').get( (req,res ) => {
    res.json(db.seats)
});

router.route('/seats/:id').get((req,res)=>{
    const abc = parseInt(req.params.id)
    res.json(db.seats.find(element => element.id ===  abc));
})


router.route('/seats').post((req, res) => {
    res.json(req.body);
    const random = db.seats.length +(Math.floor(Math.random() * 1000))
    const object={id: random, day: req.body.day, seat: req.body.seat, client: req.body.client,email: req.body.email}
    if(db.seats.find(elem =>elem.seat !== object.seat)){
        if(db.seats.find(element => element.id === random)){
            random =random + random
        }; 
        db.seats.push(object)
            req.io.emit('seatsUpdated',(db.seats))
      }else{
        return  res.send("The slot is already taken...")
      }

  });

router.route('/seats/:id').put((req,res)=>{
    const object={id: parseInt(req.params.id), day: req.body.day, seat: req.body.seat, client: req.body.client,email: req.body.email} 
    const abc = parseInt(req.params.id)
    db.seats = db.seats.map(element =>{
        if(element.id === abc){
            return object
        }else{
            return element
        }
    })
    res.json(object)
})
router.route('/seats/:id').delete((req,res) => {
    const abc = parseInt(req.params.id)
    let deleted = db.seats.filter(element => element.id !== abc) 
    db.seats = deleted  
    res.json(deleted); 

})

module.exports = router;