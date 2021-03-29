const express = require('express');

const bodyParser = require("body-parser");

const app = express();

app.use(express.static(__dirname + '/assets/css'));
app.use(bodyParser.json())


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS registered_users('id' INTEGER NOT NULL PRIMARY KEY, name TEXT, email TEXT, mobile TEXT, password TEXT, register_date DATETIME)");

})
let counter = 0;


//////////////////////  queryes 

app.post('/post', async (req, res) => {
    counter++;
    let data = req.body;
    console.log(data);
    db.run(`INSERT INTO registered_users ('id', name, email, mobile, password, register_date)
     VALUES ('${counter}', '${data.name}', '${data.email}', '${data.tel}', '${data.pass}', '${new Date()}')`);
    res.send(JSON.stringify('sucess'));
});


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