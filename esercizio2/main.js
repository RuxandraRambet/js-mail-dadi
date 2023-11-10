'use strict';

const userNumber = Math.floor((Math.random() * 6) + 1);
const computerNumber = Math.floor((Math.random() * 6) + 1);

console.log('Human player number is: ', userNumber);
console.log('Computer player number is: ', computerNumber);

document.querySelector('.user').innerHTML = 'Your number is: ' + userNumber;
document.querySelector('.computer').innerHTML = 'Computer number is: ' + computerNumber;

let winnerElement = document.querySelector('.winner');

if (userNumber === computerNumber) {
    winnerElement.innerHTML = "It's a tie";
    console.log( "It's a tie");
}else if ( userNumber > computerNumber) {
    winnerElement.innerHTML = " Human player wins";
    console.log( " Human player wins");
}else {
    winnerElement.innerHTML = "Computer wins"
    console.log( "Computer wins");
}


