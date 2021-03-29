const express = require('express');

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({extended: false});

const app = express();

app.use(express.static(__dirname + '/assets/css'));


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(function() {
    db.run("CREATE TABLE registered_users (info TEXT)");

})

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


//////////////////////  queryes 

app.post('/post', urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify('sucess'))
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