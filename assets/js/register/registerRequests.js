const registerBtn = document.getElementById('register');


registerBtn.addEventListener('click', async function(event) {
    event.preventDefault();
    
    if(emailReadyForSend && passwordReadyForSend) {

        let data = {
            name: `${firstNameInput.value} ${secondNameInput.value}`,
            email: emailInput.value,
            tel: telInput.value,
            pass: passwordInput.value,
            date: new Date().toLocaleDateString("en-US")
        };
        
        
        db.transaction(function (tx){

            
            tx.executeSql(`SELECT email FROM registered_users WHERE email ='${data.email}'`, [], function (tx, results) { 

                
                let asnwer = Array.from(results.rows);

                let counter = 0;

                if(asnwer.length > 0) {

                    createMessage('A user with this email address already exists', 'error');

                } else {

                    counter++;
                    
                    createMessage('registration completed successfully', 'success');

                    setTimeout( () => {
                        window.location.href = 'login';
                    }, 2000)

                    db.transaction(function (tx){
                        tx.executeSql(`INSERT INTO registered_users VALUES (${counter}, '${data.name}', '${data.email}', '${data.tel}', '${data.pass}', '${data.date}')`)
                    })

                }    
            
            }, null);
            
            
        })
        
         
    } else {
        createMessage('The field "mail" and "password" are required', 'error');  
    }
    
})

