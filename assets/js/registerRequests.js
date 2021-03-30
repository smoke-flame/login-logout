const registerBtn = document.getElementById('register');
const toLoginBtn = document.getElementById('to-login');



toLoginBtn.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = 'login';
});


registerBtn.addEventListener('click', async function (event) {
    event.preventDefault();
    validateEmail(emailInput.value);
    if (emailReadyForSend && passwordReadyForSend) {

        let data = {
            name: nameInput.value,
            email: emailInput.value,
            tel: telInput.value,
            pass: passwordInput.value,
            date: new Date().toLocaleDateString("en-US")
        };



        db.transaction(function (tx) {


            tx.executeSql('SELECT email FROM registered_users', [], function (tx, results) {

                let asnwer = Array.from(results.rows);
                let isAvailableMail = true;
                let counter = 0;

                asnwer.forEach(item => {
                    data.email == item.email ? isAvailableMail = false : false;
                })

                // if new email - success message & redirects to login page, else - error message
                if (isAvailableMail) {
                    counter++;

                    createMessage('Registration completed successfully', 'success');

                    setTimeout(() => {
                        window.location.href = 'login';
                    }, 2000)

                    db.transaction(function (tx) {
                        tx.executeSql(`INSERT INTO registered_users VALUES (${counter}, '${data.name}', '${data.email}', '${data.tel}', '${data.pass}', '${data.date}')`)
                    })


                } else {
                    createMessage('A user with this email address already exists', 'error');
                }

            }, null);


        })


    } else {
        createMessage('The field "mail" and "password" are required', 'error');
    }

})