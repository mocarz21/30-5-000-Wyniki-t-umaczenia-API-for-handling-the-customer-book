const express = require('express');
const router = express.Router();
const db = require('./db/db.json')


// const db = [
//     { id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
//     { id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
//   ];
const app = express();
// const postRoutes = require('./');//?

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use('/api', postRoutes); //?

router.route('/testimonials').get((req,res ) => {
    res.json(db.posts)
});

app.get('/testimonials/random',(req,res)=>{
    const random = Math.floor(Math.random() * db.length);
    res.json(db.find(element => element.id ===  random + 1));
})

app.get('/testimonials/:id',(req,res)=>{
    const abc = parseInt(req.params.id)
    res.json(db.find(element => element.id ===  abc));
})


app.post('/testimonials', (req, res) => {
    const random = db.length +(Math.floor(Math.random() * 100))
    res.json(req.body);
    const object={id: random, author: req.body.name, text: req.body.text} 
    db.push(object)
  });

app.put('/testimonials/:id',(req,res)=>{
    const object={id: parseInt(req.params.id), author: req.body.author, text: req.body.text} 
    const abc = parseInt(req.params.id)
    res.json(db.find(element => element.id === abc));
    db.splice(1,3)
    db.push(object);

})
app.delete('/testimonials/:id',(req,res) => {
    const abc = parseInt(req.params.id)
    res.json(db.find(element => element.id === abc));
    db.splice(1,3);
})

app.use((req,res) => {
    res.status(404).send('404 not found')
})

app.listen(4000, () => {
  console.log('Server is running on port: 4000');
});

module.exports = router;