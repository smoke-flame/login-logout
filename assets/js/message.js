function createMessage(message, type, area = messageArea) {

    // create message depending on the type
    let blockMessage = document.createElement('div');
    blockMessage.textContent = message;
    blockMessage.classList.add('form-messages__item');
    
    if(area.child) {
        return true;
    } 
        if(type === 'error') {
            blockMessage.classList.add('error-message');
        }
        else {
            blockMessage.classList.add('success-message');
        }
    
        // add block to html
        
        area.insertAdjacentElement('afterbegin', blockMessage);
        
        let messageInHtml = document.querySelector('.form-messages__item');
    
        // animation block appearance
        setTimeout( ()=> {  
    
            messageInHtml.classList.add('active');
        },0);
    
        setTimeout( () => {
    
            messageInHtml.classList.remove('active');
    
            // after animation delete block with message
            setTimeout (()=> {
                area.innerHTML = '';
            }, 700);
    
    
        }, 4000);
    
    
    
}