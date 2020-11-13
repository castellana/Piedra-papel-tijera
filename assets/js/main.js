const countdown = document.getElementById('countdown-rounds')
const options=["rock","paper","scissors"];
let userPoints=0;
let computerPoints=0;
let mycount = 0
const rock= 0;
const paper = 1;
const scissors = 2;

//Reset the game
document.querySelector('#reset-button').addEventListener('click', () =>
location.reload())

//Play the game
function play(value) {
    const userScore = document.getElementById('user-score');
    const computerScore = document.getElementById('computer-score');
    const textWin = "<p style='color: #1d6623; font-weight: bold; margin-top: 2vh; font-size: 1.5rem;'> You won this round! :-)</p>";
    const textLost = "<p style='color:red; margin-top: 2vh; font-size: 1.5rem;'> You lost this round :-( </p>";
    const textTie = "<p style='color:blue; margin-top: 2vh;font-size: 1.5rem;'> You both tied this round</p>";
    let result =document.getElementById("result");


    //How many rounds?
    mycount++
    const rounds = document.querySelector('input:checked').value;
    countdown.innerHTML = `Rounds: ${mycount}/${rounds}`
   

    //Get the Choices of user and computer:
    let userChoice = value;
    let computerChoice = Math.floor(Math.random()*3);
    let message = document.getElementsByClassName('message').innerHTML = `You chose <b> ${options[userChoice]}</b>, the computer chose <b> ${options[computerChoice]}</b>`
    message += "<br>"
    
    //Compare both choices:
    if(userChoice == rock) {
        if(computerChoice == rock) {
        message += textTie;
        }
        else if(computerChoice == paper){
            message += "-Paper beats Rock-" + textLost;
            computerPoints++;
        }
        else if(computerChoice == scissors){
            message += "-Rock beats Scissors-" + textWin;
            userPoints++;
        }
    }
    
    if(userChoice == paper) {
        if(computerChoice == rock) {
        message += "-Paper beats Rock-" + textWin;
        userPoints++;
        }
        else if(computerChoice == paper){
        message += textTie;
        }
        else if(computerChoice == scissors){
        message += "-Scissors beat Paper-" + textLost;
        computerPoints++;
        }
    }
    
    if(userChoice == scissors){
        if(computerChoice == rock){
        message += "-Rock beats Scissors-" + textLost;
        computerPoints++;
        }
        else if(computerChoice == paper){
        message += "-Scissors beat Paper-" + textWin;
        userPoints++;
        } else if(computerChoice == scissors){
        message += textTie;
        }
    }
    
    //we print results
    result.innerHTML = message;
    userScore.innerHTML = userPoints;
    computerScore.innerHTML = computerPoints;
   
    //Rounds finished:
    if (mycount == rounds) {
        console.log("test");
        document.querySelector(".options").style = 'display:none';
        if (userPoints > computerPoints) {
            result.innerHTML += `<span class="span-final">You are the winner!</span>` 
            userScore.style = 'font-weight: bold'
        } else if (userPoints < computerPoints) {
            console.log("rounds finished");
            result.innerHTML += `<span class="span-final">Sorry, you lost at the end...</span>`
            computerScore.style = 'font-weight: bold'
        } else {
            result.innerHTML += `<span class="span-final">You both tied. Try more rounds!</span>`
            userScore.style =  'font-weight: bold'
            computerScore.style= 'font-weight: bold'
        }
    }
} //end of play()


