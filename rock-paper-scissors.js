(function game () {

    const playerChoices = ['rock', 'paper', 'scissors'];
    let playerChoice;
    let computerChoice;
    let wins = 0;
    let ties = 0;
    let losses = 0;


    document.getElementById("rock").addEventListener('click', function () {
        playerChoice = playerChoices[0];
        document.getElementById("option").innerHTML = "You selected rock.";
    });
    document.getElementById("paper").addEventListener('click', function () {
        playerChoice = playerChoices[1];
        document.getElementById("option").innerHTML = "You selected paper.";
    });
    document.getElementById("scissors").addEventListener('click', function () {
        playerChoice = playerChoices[2];
        document.getElementById("option").innerHTML = "You selected scissors.";
    });

    document.getElementById("play").addEventListener('click', function () {

        let resultStyle = document.getElementById('result')
       computerChoice = playerChoices[Math.floor(Math.random()*playerChoices.length)];

       if (playerChoice === computerChoice) {
           ties++
           document.getElementById('result').innerHTML = `It's a tie! The computer took ${computerChoice}.`;
           document.getElementById("ties").innerHTML = `Ties: ${ties}`;
           resultStyle.classList.remove("win")
           resultStyle.classList.remove("loss")
           resultStyle.classList.add ("tie")
       } else {
           if (playerChoice === playerChoices[0] && computerChoice === playerChoices[2]
               || playerChoice === playerChoices[1] && computerChoice === playerChoices[0]
               || playerChoice === playerChoices[2] && computerChoice === playerChoices[1]) {
               wins++;
               document.getElementById("result").innerHTML = `Congratulations! You won! The computer took ${computerChoice}.`;
               document.getElementById("wins").innerHTML = `Wins: ${wins}`;
               resultStyle.classList.remove("loss")
               resultStyle.classList.remove("tie")
               resultStyle.classList.add("win");
           } else {
               losses++;
               document.getElementById("result").innerHTML = `Too bad you lose! The computer took ${computerChoice}.`;
               document.getElementById("losses").innerHTML = `Losses: ${losses}`;
               resultStyle.classList.remove("win")
               resultStyle.classList.remove("tie")
               resultStyle.classList.add("loss");
           }
       }

       document.getElementById("play").innerHTML = `Play again?`
    });


})()

