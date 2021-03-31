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
app.get('/admin', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile(__dirname + '/admin-panel.html');
});





//////////////////////// docs
// styles
app.get('/assets/css/:name', (req, res) => {
    res.set('Content-Type', 'text/css');
    res.sendFile(__dirname + `/assets/css/${req.params.name}`);
})

// js files
app.get('/assets/js/:name', (req, res) => {
    res.sendFile(`${__dirname}/assets/js/${req.params.name}`);
})
app.get('/assets/js/login/:name', (req, res) => {
    res.sendFile(`${__dirname}/assets/js/login/${req.params.name}`);
})
app.get('/assets/js/register/:name', (req, res) => {
    res.sendFile(`${__dirname}/assets/js/register/${req.params.name}`);
})

// images
app.get('/assets/img/:name', (req, res) => {
    res.sendFile(`${__dirname}/assets/img/${req.params.name}`);
});
app.get('/assets/img/check-marks/:name', (req, res) => {
    res.sendFile(`${__dirname}/assets/img/check-marks/${req.params.name}`);
});
app.get('/assets/img/icons/:name', (req, res) => {
    res.sendFile(`${__dirname}/assets/img/icons/${req.params.name}`);
})
app.listen(3000)