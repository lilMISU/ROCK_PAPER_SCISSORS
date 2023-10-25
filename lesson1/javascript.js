function getComputerChoice() {
    const options = ["rock", "paper", "scissors"];
    let random = Math.random() * 10 % 3;
    return options[Math.floor(random)];
}
let compVal = getComputerChoice();

let score = document.querySelector('#score');
score.style.backgroundColor = "#3498db";
score.style.color = "white";
score.style.fontSize = "24px";
score.style.padding = "10px";
score.style.display = "flex";
score.style.justifyContent = "center";
score.style.alignItems = "center";


let yourPoints = 0;
let compPoints = 0;
score.innerHTML = yourPoints + " " + compPoints;
let yourVal;

let btnRock = document.querySelector('#rock');
btnRock.addEventListener('click', () => {
    yourVal = "rock";
    PlayRound(yourVal, compVal);
    compVal = getComputerChoice();
});

let btnPaper = document.querySelector('#paper');
btnPaper.addEventListener('click', () => {
    yourVal = "paper";
    PlayRound(yourVal, compVal);
    compVal = getComputerChoice();
});

let btnScissors = document.querySelector('#scissors');
btnScissors.addEventListener('click', () => {
    yourVal = "scissors";
    PlayRound(yourVal, compVal);
    compVal = getComputerChoice();
});

function PlayRound(yourVal, compVal) {
    let result;
    switch (yourVal.toLowerCase()) {
        case "rock": {
            switch (compVal) {
                case "rock": result = "DRAW";
                    break;
                case "paper": result = "YOU LOSE";
                    break;
                case "scissors": result = "YOU WIN";
                    break;
            }
            break;
        }
        case "paper": {
            switch (compVal) {
                case "paper": result = "DRAW";
                    break;
                case "scissors": result = "YOU LOSE";
                    break;
                case "rock": result = "YOU WIN";
                    break;
            }
            break;
        }

        case "scissors": {
            switch (compVal) {
                case "scissors": result = "DRAW";
                    break;
                case "rock": result = "YOU LOSE";
                    break;
                case "paper": result = "YOU WIN";
                    break;
            }
            break;
        }

    }
    if (result === "YOU WIN")
        yourPoints++;
    else if (result === "YOU LOSE")
        compPoints++;

    score.innerHTML = yourPoints + " " + result + " " + compPoints;

    if(yourPoints===5)
    score.innerHTML+= '<br>' + 'YOU WON';
    if(compPoints===5)
    score.innerHTML+= '<br>' + 'YOU LOST';
    return result;
}



