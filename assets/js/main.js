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

    //How many rounds?
    mycount++
    const rounds = document.querySelector('input:checked').value;
    // console.log(rounds);
    countdown.innerHTML = `Rounds: ${mycount}/${rounds}`

    if (mycount == rounds) {
        console.log("test");
        document.querySelector(".options").style = 'display:none';
    }
    


    const textWin = "<span style='color:green;'> You won! :-)</span>";
    const textLost = "<span style='color:red;'> You lost :-( </span>";
    const textTie = "<span style='color:blue;'> You tied</span>";


    let result =document.getElementById("result");
    // let message="";

    

    // message +="<div>You chose <b>" + options[userChoice]+"</b></div>";
    // message +="<div>The computer chose <b>"+ options[computerChoice]+"</b></div>";
   

    //Get the Choices of user and computer:
    let userChoice = value;
    let computerChoice = Math.floor(Math.random()*3);
    let message = document.getElementsByClassName('result-p').innerHTML = `You chose <b> ${options[userChoice]}</b>, the computer chose <b> ${options[computerChoice]}</b>`
     message +="<div style='font-size:1.3em; padding:10px;'>";
    
    //Compare both choices:
    if(userChoice == rock) {
        if(computerChoice == rock) {
        message += textTie;
        }
        else if(computerChoice==paper){
            message += "Rock loses against paper" + textLost;
            computerPoints++;
        }
        else if(computerChoice==scissors){
            message += "Rock wins against scissors" + textWin;
            userPoints++;
        }
    }
    
    if(userChoice==paper) {
        if(computerChoice==rock) {
        message += "Paper wins against rock" + textWin;
        userPoints++;
        }
        else if(computerChoice==paper){
        message += textTie;
        }
        else if(computerChoice==scissors){
        message += "Paper loses against scissors" + textLost;
        computerPoints++;
        }
    }
    
    if(userChoice==scissors){
        if(computerChoice==rock){
        message += "Scissors loses against rock" + textLost;
        computerPoints++;
        }
        else if(computerChoice==paper){
        message += "Scissors wins against paper" + textWin;
        userPoints++;
        } else if(computerChoice==scissors){
        message += textTie;
        }
    }
    message +="</div>";
    
    //--- imprimimos resultados----
    result.innerHTML=message;

    const userScore = document.getElementById('user-score');
    const computerScore = document.getElementById('computer-score');
    userScore.innerHTML = userPoints;
    computerScore.innerHTML = computerPoints;
    }


// document.querySelector('button').addEventListener('click', () => {


//userChoice
// const getUserChoice = function(){
//     console.log(this.id);    /////////undefined!!!!!!
//     // return this;
// }
// document.getElementById('rock').onclick = getUserChoice;
// document.getElementById('paper').onclick = getUserChoice;
// document.getElementById('scissors').onclick = getUserChoice;



//         if(getUserChoice === 'paper'){
//             if(computerChoice === 'scissors'){
//                 result.innerHTML = `Computer Wins`;
//                 computerPoints++
//                 updateScore();
//                 return;
//             } else {
//                 result.innerHTML = `PLayer Wins`;
//                 userPoints++;
//                 updateScore();
//                 return;
//             }
//         }






///SIGUIENTE FUNCIÓN: RANDOM Y VERGLEICH
// " First, create a method called handleChange() that has a parameter called event . When the method is called, it receives an event object that contains a string of text from the input element. You can access this string with event.target.value inside the method. Update the input property of the component’s state with this new string."

///mit "this"
// document.getElementById("options").addEventListener('change', selectOption);
// function selectOption() {
//     let selected = this.options[this.selectedIndex].value;
//     document.querySelector("#option-selected").innerHTML = `Sie haben ausgewählt: ${selected}`
// }


/* <select id="my-select">
<option value="" disabled selected>Select One</option>
<option value="select1">Select 1</option>
<option value="select2">Select 2</option>
<option value="select3">Select 3</option>
<option value="select4">Select 4</option>
<option value="select5">Select 5</option>
</select>

<p id="option-selected"></p> */




