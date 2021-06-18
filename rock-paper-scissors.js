(function game () {

    const playerChoices = ['rock', 'paper', 'scissors'];
    let playerChoice;
    let computerChoice;

    document.getElementById("rock").addEventListener('click', function () {
        playerChoice = playerChoices[0]
    });
    document.getElementById("paper").addEventListener('click', function () {
        playerChoice = playerChoices[1]
    });
    document.getElementById("scissors").addEventListener('click', function () {
        playerChoice = playerChoices[2]
    });

    document.getElementById("play").addEventListener('click', function () {

       computerChoice = playerChoices[Math.floor(Math.random()*playerChoices.length)];

       if (playerChoice === computerChoice) {
           document.getElementById('result').innerHTML = `It's a tie! The computer took ${computerChoice}.`
       } else {
           if (playerChoice === playerChoices[0] && computerChoice === playerChoices[2]
               || playerChoice === playerChoices[1] && computerChoice === playerChoices[0]
               || playerChoice === playerChoices[2] && computerChoice === playerChoices[1]) {
               document.getElementById("result").innerHTML = `Congratulations! You won! The computer took ${computerChoice}.`
           } else {document.getElementById("result").innerHTML = `Too bad you lose! The computer took ${computerChoice}.`}
       }

    });


})()

