'use strict';

const mailArray = ['mail1@gmail.com', 'mail2@gmail.com', 'mail3@gmail.com', 'mail4@gmail.com', 'mail5@gmail.com', 'mail5@gmail.com',];

const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', function(){
    let inputValue = document.getElementById('email').value;
    let trueValue;
    let confirmElement = document.getElementById('confirm');

    for (let i = 0; i < mailArray.length; i++) {
        if (mailArray[i] === inputValue){
            trueValue = true;
            break;
        }
    }
    
    if (trueValue) {
        confirmElement.innerHTML = 'Email address successfully found'
    }else {
        confirmElement.innerHTML = 'Email address could not be found'
    }
});


