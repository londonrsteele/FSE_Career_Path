const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
      return userInput;
    } else {
      console.log('Error! User did not choose rock, paper, or scissors.');
    }
  }
  
  const getComputerChoice = () => {
    const choice = Math.floor(Math.random() * 3);
    switch (choice) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'paper';
        break;
      case 2:
        return 'scissors';
        break;
    }
  }
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === 'bomb') {
      return 'User!';
    } else if (userChoice === computerChoice) {
      return 'Tie!';
    } else if (userChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer!';
      } else { // scissors
        return 'User!';
      }
    } else if (userChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer!';
      } else { // rock
        return 'User!';
      }
    } else if (userChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer!';
      } else { // paper
        return 'User!';
      }
    }
  }
  
  function playGame() {
    let userChoice = getUserChoice('paper');
    console.log('user: ' + userChoice);
    let computerChoice = getComputerChoice();
    console.log('computer: ' + computerChoice);
    console.log('winner: ' + determineWinner(userChoice, computerChoice));
  }
  
  playGame();