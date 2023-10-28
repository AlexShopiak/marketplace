const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

mongoose.connect('mongodb+srv://alex:0000@sandboxcluster.wh0wned.mongodb.net/?retryWrites=true&w=majority');

const mainRoutes = require('./routes/mainRoutes');
const productsRoutes = require('./routes/productsRoutes');
const profileRoutes = require('./routes/profileRoutes');

app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/profile', profileRoutes);

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
    console.log('Listen on:', port);
    console.log(`http://localhost:${port}/`);
});