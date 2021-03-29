const registerBtn = document.getElementById('register');
const toLoginBtn = document.getElementById('to-login');



toLoginBtn.addEventListener('click', event => {
    event.preventDefault();
    window.location.href = 'login';
});


registerBtn.addEventListener('click', async function(event) {
    event.preventDefault();
    if(emailReadyForSend && passwordReadyForSend) {

        let data = {
            name: nameInput.value,
            email: emailInput.value,
            tel: telInput.value,
            pass: passwordInput.value
        };
        let response = await fetch('http://localhost:3000/post', {
                method: 'POST',
                body : JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
        }).then((response) => {

            return response.json();

          }).then(data => {

            // if data = success  - create success message & redirects to login page
              console.log(data);

          }).catch( err => {
            createMessage(  `An error ${err} has occurred`, 'error'); 
          })
       

    
        // send to server
    
        //show  success message & redirects to login page
        createMessage('registration completed successfully', 'success');

        // setTimeout( () => {
        //     window.location.href = 'login';
        // }, 1500)
         
    } else {
        createMessage('The field "mail" and "password" are required', 'error');  
    }
    
})

