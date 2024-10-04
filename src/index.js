const path = require('path');
const express = require('express');
const morgan = require('morgan');
const {engine} = require('express-handlebars');
//const events = require('events');
const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

// Thiết lập đường dẫn cho các file template
app.set('views', path.join(__dirname,'./resources/views'));
//console.log('Views directory:', path.join(__dirname, '..', 'resources', './views'));



app.get('/', (req, res) => {
  res.render( "home"); 
});

app.get('/news', (req, res) => {
  res.render( "news"); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
