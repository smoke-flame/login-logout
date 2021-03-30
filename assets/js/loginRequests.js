const loginBtn = document.getElementById('login');
const toRegister = document.getElementById('to-register');

const loginEmail = document.getElementById('login-email');
const loginPassword = document.getElementById('login-password');

const messageArea  = document.querySelector('.form-messages');

toRegister.addEventListener('click', event => {
    event.preventDefault();  
    window.location.href = '/';
});


loginBtn.addEventListener('click', event => {

    event.preventDefault();
    if(loginEmail.value && loginPassword.value){

        let canLogin = false;

        db.transaction(function (tx) {

            tx.executeSql('SELECT email, password FROM registered_users', [], function (tx, results) {

                let asnwer = Array.from(results.rows);
                asnwer.forEach( item => {
                    if(item.email == loginEmail.value && item.password == loginPassword.value) {

                        localStorage.setItem('email', item.email);
                        localStorage.setItem('password', item.password);

                        canLogin = true;  
                    }
                })

                console.log(canLogin);
                if(canLogin) {

                    createMessage('You have successfully logged into your account', 'success');

                    setTimeout( () => {
                        window.location.href = 'success';
                    }, 2000)

                } else {

                    createMessage('Invalid email or password', 'error');
                }

             }, null)

        })
        // запрос



    } else {
        createMessage('Both fields are required', 'error');
    }

    // если оба импута заполнены {

    //     делаем запрос в бд


    //     если почта и пароль существуют -> выводим сообщение и переходим на страницу успеха

    //     иначе ошибка -> не сущесвует такого пользователя
    // } иначе {
    //     выводим сообщение что поля не заполнены
    // }

        

})