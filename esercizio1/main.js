'use strict';

//  SOLUZIONE INIZIALE con INPUT


// const mailArray = ['mail1@gmail.com', 'mail2@gmail.com', 'mail3@gmail.com', 'mail4@gmail.com', 'mail5@gmail.com', 'mail5@gmail.com',];

// const sendButton = document.getElementById('send-btn');

// sendButton.addEventListener('click', function(){
//     let inputValue = document.getElementById('email').value;
//     console.log('The Email address entered is: ', inputValue);
//     let trueValue;
//     let confirmElement = document.getElementById('confirm');

//     for (let i = 0; i < mailArray.length; i++) {
//         if (mailArray[i] === inputValue){
//             trueValue = true;
//             break;
//         }
//     }
    
//     if (trueValue) {
//         confirmElement.innerHTML = 'Email address successfully found'
//     }else {
//         confirmElement.innerHTML = 'Email address could not be found'
//     }
//     console.log ('Result: ', confirmElement.innerHTML);
// });


// CORREZIONE con PROMPT
const usersList = ['mail1@gmail.com', 'mail2@gmail.com', 'mail3@gmail.com', 'mail4@gmail.com', 'mail5@gmail.com', 'mail5@gmail.com',];

// console.log(usersList);

// Stato iniziale
let canAccess = false;

// Verifica
const user = prompt('Inserisci la tua mail');

for(let i = 0; i < usersList.length; i++){
    if(user === usersList[i]){
        canAccess = true;
        break;
    }
    // debugger;
}

// Stato finale
if (canAccess === true){
    console.log('Puoi accedere');
}else {
    console.log(' Non puoi accedere');
}

// Oppure 
// if (canAccess){
//     console.log('Puoi accedere');
// }else {
//     console.log(' Non puoi accedere');
// }

// Oppure (si riferisce al -> (let canAccess = false) che cambia valore nel for;)
// if (!canAccess){
//     console.log(' Non puoi accedere');
// }else {
//     console.log('Puoi accedere');
// }
