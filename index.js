const express = require('express');
const app = express();

// setting view engine to ejs
app.set('view engine', 'ejs'); // for templates -> npm i ejs -> templates go in views directory
// setting the public directory to serve static files (css, js, images)
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});

// index
app.get('/', (req, res) => {
    res.render('index');
});

// other route
app.get('/other', (req, res) => {
    res.send('Other route');
});

// patern matching route
app.get('/user/:id/:nombre', (req, res) => {
    const { id, nombre } = req.params;
    res.send(`User id: ${id}, nombre: ${nombre}`);
});

// query string route
app.get('/search', (req, res) => {
    const { name, age } = req.query; // extracting query string from url (?name=juan&age=20) 
    res.send(`Name: ${name}, age: ${age}`);
});

// random route
app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { num: num }); // second argument is an object with data to be passed to the template 
});

// reddit route
app.get('/r/:reddit', (req, res) => {
    const { reddit } = req.params;
    res.render('reddit', { reddit: reddit });
});

// dog route 
app.get('/dogs', (req, res) => {
    const dogs = ['husky', 'pug', 'labrador', 'poodle', 'beagle'];  // simulate a database
    res.render('dogs', { dogs: dogs });
});

// * route 
app.get('*', (req, res) => {
    res.send('404');
});

