const express = require('express');
const router = express.Router();
const cors = require('cors');
const path = require('path')
const socket = require('socket.io')

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
app.use(cors())
app.use(express.static(path.join(__dirname, '/client/build')));

app.use((req, res, next) => { //Po to aby w każdym pliku endpointy miały dostęp do s. websocket przy uzyciu req.io
  req.io = io;
  next();
});



app.use('/api', testimonialsRoutes)  // jeżeli zrobię /testimonials nie działa czemu ?? musze dac dostep do wszystkich zaczynajacych sie od ?
app.use('/api', concertsRoutes)
app.use('/api', seatsRoutes)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});



app.use((req,res) => {
    res.status(404).send('404 not found!')
})

const server = app.listen(process.env.PORT || 8000, () => {
  console.log('Server is running on port: 8000');
});

const io=socket(server)

io.on('connection',(socket)=>{
  console.log('New client! Its id – ' + socket.id)
})

module.exports = router;