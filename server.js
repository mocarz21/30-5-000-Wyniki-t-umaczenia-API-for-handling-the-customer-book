const express = require('express');
const router = express.Router();


// const db = [
//     { id: 1, author: 'John Doe', text: 'This company is worth every coin!' },
//     { id: 2, author: 'Amanda Doe', text: 'They really know how to make you happy.' },
//   ];

const app = express();

const testimonialsRoutes = require('./routes/testimonials.routes');
const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use('/api', testimonialsRoutes)  // jeżeli zrobię /testimonials nie działa czemu ?? musze dac dostep do wszystkich zaczynajacych sie od ?
app.use('/api', concertsRoutes)
app.use('/api', seatsRoutes)



app.use((req,res) => {
    res.status(404).send('404 not found!')
})

app.listen(4000, () => {
  console.log('Server is running on port: 4000');
});

module.exports = router;