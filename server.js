const express = require('express');

const app = express();

app.use(express.static(__dirname + '/assets/css'));



/////////////////// pages

//register page
app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(__dirname + '/register.html');
});


//login page
app.get('/login', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(__dirname + '/login.html');
});


//success page
app.get('/success', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(__dirname + '/success-login.html');
});





//////////////////////// docs
// styles
app.get('/assets/css/style.css', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.sendFile(__dirname + '/assets/css/style.css');
})

// js files
app.get('/assets/js/:name', (req, res) => {
    res.sendFile( `${__dirname}/assets/js/${req.params.name}`);
})

// images
app.get('/assets/img/:name', (req, res) => {
    res.sendFile( `${__dirname}/assets/img/${req.params.name}`);
})
app.listen(3000)