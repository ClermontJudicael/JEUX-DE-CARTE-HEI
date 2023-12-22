// fichier vide à travailler
const prompt = require('prompt-sync')();

let card = ['eau', 'feu', 'plante'];

function asciiArt() {
  console.log('  ______________________________________');
  console.log(' /   _______________________________    \\');
  console.log('|   |            __ __              |   |');
  console.log('| _ |    /\\     ) _) /\'\'\'\'\',        |   |');
  console.log('|(.)|   <  >    \\ ) // \'  \',        |   |');
  console.log('| ` |    \\/       \\/// ~ |~:    +   |   |');
  console.log('|   |             ///*\\  \' :    |   |   |');
  console.log('|   |            ///***\\_~.\'    |   |   |');
  console.log('|   |  .\'.    __///````,,..\\_   |   |   |');
  console.log('|   |   ` \\ _/* +_\\#\\\\~\\ooo/ \\  |   |   |');
  console.log('|   |     |/:\\ + *\\_\\#\\\\~\\so/!!\\|   |   |');
  console.log('|   |    _\\_::\\ * + \\-\\#\\\\o/!!!\\|   |   |');
  console.log('|   |   / <_=::\\ + */_____@_!!!_|   |   |');
  console.log('|   |  <__/_____\\ */( /\\______ _|   |   |');
  console.log('|   |   |_   _ __\\/_)/\\* \\   ._/  > |   |');
  console.log('|   |   | !!! @     /* + \\::=_>_/   |   |');
  console.log('|   |   |\\!!!/o\\\\#\\_\\ + * \\::_\\     |   |');
  console.log('|   |   | \\!!/os\\~\\#_\\_* + \\:/|     |   |');
  console.log('|   |   |  \\_/ooo\\~\\\\#\\+_*/- \\      |   |');
  console.log('|   |   |    \\\'\`\\`,,,,///      .`.  |   |');
  console.log('|   |   |     ,.- ***///        \'   |   |');
  console.log('|   |   |    : ~  \\*///             |   |');
  console.log('|   |   +    : |   \\//\\             |   |');
  console.log('|   |        ,~  ~ //_( \\     /\\    | ; |');
  console.log('|   |        ,\'  ` /_(__(    <  >   |(_)|');
  console.log('|   |         `````           \\/    |   |');
  console.log('|   |_______________________________|   |');
  console.log(' \\______________________________________/');
}


function randomCardAi(array) {
  let i = Math.floor(Math.random() * array.length);
  return array[i];
}

function askCard() {
  return prompt('Your card (feu/eau/plante): ');
}

function compareAnswer(playerChoice, aiChoice) {
  if (playerChoice == 'feu') {
    if (aiChoice == 'feu') {
      return 0;
    } else if (aiChoice == 'eau') {
      return 2;
    } else if (aiChoice == 'plante') {
      return 1;
    }
  } else if (playerChoice == 'eau') {
    if (aiChoice == 'feu') {
      return 1;
    } else if (aiChoice == 'eau') {
      return 0;
    } else if (aiChoice == 'plante') {
      return 2;
    }
  } else if (playerChoice == 'plante') {
    if (aiChoice == 'plante') {
      return 0;
    } else if (aiChoice == 'feu') {
      return 2;
    } else if (aiChoice == 'eau') {
      return 1
    }
  } else {
    return;
  }
}

function main() {
  let round = 1;
  let playerScore = 0;
  let aiScore = 0;

  while (round < 4) {
    console.log('ROUND : ', round);
    let playerChoice = askCard();
    let aiChoice = randomCardAi(card);

    let result = compareAnswer(playerChoice, aiChoice);

    if (result == 1) {
      playerScore++;
      console.log('Player won!!\n');
      console.log('Player card: ', playerChoice);
      console.log('AI card: ', aiChoice, '\n');
    } else if (result == 2) {
      aiScore++;
      console.log('AI won!!\n');
      console.log('Player card: ', playerChoice);
      console.log('AI card: ', aiChoice, '\n');
    } else if (result == 0) {
      console.log('Same card\n');
      console.log('Player card: ', playerChoice);
      console.log('AI card: ', aiChoice, '\n');
    } else {
      console.log('Your card is invalide');
    }
    round++;
  }

  if (playerScore > aiScore) {
    console.log('Winner is player');
    console.log('Player score : ', playerScore);
    console.log('AI score: ', aiScore);
  } else if (playerScore == aiScore) {
    console.log('Draw');
    console.log('Player score : ', playerScore);
    console.log('AI score: ', aiScore);
  } else {
    console.log('Winner is AI, LOOSER!!!! ');
    console.log('Player score : ', playerScore);
    console.log('AI score: ', aiScore);
  }

  // ask if the player want to replay
  let answer = prompt('Do you want to play again? (y/n): ');
  if (answer == 'y') {
    main();
  } else {
    console.log('Quiting.......');
    return;
  }
}

asciiArt();
main();
