const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/photo-app', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', () => {
//     console.log('Database connected');
// });

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/usa', (req, res) => {
    res.render('usa');
})

app.get('/canada', (req, res) => {
    res.render('canada');
})

app.get('/au', (req, res) => {
    res.render('au');
})

app.get('/contact', (req, res) => {
    res.render('contact');
})

// app.get('/usa', async (req, res) => {
//     const usa = await Usa.find({ });
//     res.render('usa/index', {usa});
// })

// app.get('/photos/:id', async (req, res) => {
//     // const photo = await Photo.findById(req.params.id);
//     res.render('photos/show');
// })

app.listen(3000, () => {
    console.log('Serving on port 3000');
})

