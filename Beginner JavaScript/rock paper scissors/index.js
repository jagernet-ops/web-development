let userChoice = null;
const userTurn = function(userInput, userName){
    switch(userInput.toLowerCase()){
        case 'rock':
            console.log(`${userName}: threw rock!`);
            userChoice = 3;
            break;
        case 'scissors':
            console.log(`${userName}: threw scissors!`);
            userChoice = 2;
            break;
        case 'paper':
            console.log(`${userName}: threw paper!`);
            userChoice = 1;
            break;
        case 'bomb':
            console.log(`${userName}: ooh the secret move!`);
            userChoice = 4;
            break;
        default:
            console.log(`You can\'t throw ${userInput} silly billy!`);
            break;
    }
}

userTurn('rock', 'Jager');

let computerChoice = null;
const computerTurn = Math.floor(Math.random()*3)+1;
switch (computerTurn){
    case 1:
        console.log('Computer threw paper!');
        computerChoice = 1;
        break;
    case 2:
        console.log('Computer threw scissors!');
        computerChoice = 2;
        break;
    case 3:
        console.log('Computer threw rock!');
        computerChoice = 3;
        break;
}

if(userChoice === computerChoice){
    console.log('Tie, nobody wins!');
}else if((userChoice === 3 && computerChoice === 2)||(userChoice === 2 && computerChoice === 1)||(userChoice === 1 && computerChoice === 3)){
    console.log('You win!');
}else if((computerChoice === 3 && userChoice === 2)||(computerChoice === 2 && userChoice === 1)||(computerChoice === 1 && userChoice === 3)){
    console.log('The computer wins!')
}else if(userChoice === 4){
    console.log('You win! You used a bomb what else did you think was going to happen?');
}else{
    console.log('Something went wrong!');
}




