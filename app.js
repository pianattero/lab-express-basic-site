const express = require('express');

const hbs = require('hbs');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/home', (req, res, next) => res.render('home'));
app.get('/about', (req, res, next) => res.render('about'));
app.get('/works', (req, res, next) => res.render('works'));


app.listen(3000, () => console.log('🏃‍ on port 3000'));
