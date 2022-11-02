const express = require('express');
const router = express.Router();
const db = require('../nowyDB')

router.route('/testimonials').get( (req,res ) => {
    res.json(db.testimonials)
});

router.route('/testimonials/random').get((req,res)=>{
    const random = Math.floor(Math.random() * db.length);

    res.json(db.testimonials.find(element => element.id ===  random + 1));
})

router.route('/testimonials/:id').get((req,res)=>{
    const abc = parseInt(req.params.id)
    res.json(db.testimonials.find(element => element.id ===  abc));
})


router.route('/testimonials').post((req, res) => {
    res.json(req.body);
    const random = db.length +(Math.floor(Math.random() * 1000))
    if(db.testimonials.find(element => element.id === random)){
        random =random + random
    };
    const object={id: random, author: req.body.author, text: req.body.text} 
    db.testimonials.push(object)
  });

router.route('/testimonials/:id').put((req,res)=>{
    const object={id: parseInt(req.params.id), author: req.body.author, text: req.body.text} 
    const abc = parseInt(req.params.id)
    db.testimonials = db.testimonials.map(element =>{
        if(element.id === abc){
            return object
        }else{
            return element
        }
    })

    res.json(object)
})
router.route('/testimonials/:id').delete((req,res) => {
    const abc = parseInt(req.params.id)
    let deleted = db.testimonials.filter(element => element.id !== abc) 
    db.testimonials = deleted  
    res.json(deleted); 

})

module.exports = router;