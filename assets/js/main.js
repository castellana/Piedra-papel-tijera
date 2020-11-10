const fiveRounds = document.getElementById('five')
const tenRounds = document.getElementById('ten')
const fifteenRounds = document.getElementById('fifteen')
const twentyRounds = document.getElementById('twenty')

const countdown = document.getElementById('countdown')
//probamos si funciona la función:
// const play = () => {
//     console.log(five.checked);
// }
let mycount = 0
const play = () => {
    mycount++
    if (fiveRounds.checked && mycount<= 5) {
        countdown.innerHTML = `Rounds: ${mycount}/5`
    } else if (tenRounds.checked && mycount<= 10) {
        countdown.innerHTML = `Rounds: ${mycount}/10`
    } else if (fifteenRounds.checked && mycount<= 15) {
        countdown.innerHTML = `Rounds: ${mycount}/15`
    } else if (twentyRounds.checked && mycount<= 20) {
        countdown.innerHTML = `Rounds: ${mycount}/20`
    } else {
        `Try again`
    }  
} //end of const play

let optionsArray = ["rock", "paper", "scissors"];

//picking a random item from an array:
//fórmula general: let randomValue = myArray[Math.floor(Math.random() * myArray.length)];
let computerChoice = optionsArray[Math.floor(Math.random() * 3)];
console.log(optionsArray.length);
console.log(computerChoice);

