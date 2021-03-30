const loginBtn = document.getElementById('login');

const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');



loginBtn.addEventListener('click', event => {

    event.preventDefault();
    if (loginEmail.value && loginPassword.value) {


        db.transaction(function (tx) {
            // 
            tx.executeSql(`SELECT * FROM registered_users WHERE email = '${loginEmail.value}' AND password = '${loginPassword.value}'`, [], function (tx, results) {

                let answer = Array.from(results.rows);

                if (answer.length > 0) {
                    let array = answer[0];
                    localStorage.setItem('id', array.id);
                    localStorage.setItem('name', array.name);
                    localStorage.setItem('email', array.email);
                    localStorage.setItem('number', array.mobile);
                    localStorage.setItem('password', array.password);
                    createMessage('You have successfully logged into your account', 'success');

                    setTimeout(() => {
                        window.location.href = 'success';
                    }, 2000)

                } else {

                    createMessage('Invalid email or password', 'error');

                }


            }, null)

        })


    } else {
        createMessage('Both fields are required', 'error');
    }

})