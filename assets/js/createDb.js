// create webSQL

const db = openDatabase('users', '1.0', 'list of users', 2 * 1024 * 1024);

db.transaction(function (tx) {
   tx.executeSql("CREATE TABLE IF NOT EXISTS registered_users('id' INTEGER NOT NULL PRIMARY KEY, name TEXT, email TEXT, mobile TEXT, password TEXT, register_date DATETIME)");
   // tx.executeSql("INSERT INTO registered_users VALUES (100, 'admin', 'admin@gmail.com', '911', 'qwerty123', '30.03.2021')")
});



// delete webSQL

// db.transaction(function (tx) {
//    tx.executeSql('DROP TABLE registered_users');
// });