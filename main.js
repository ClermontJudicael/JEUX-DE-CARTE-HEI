const prompt = require('prompt-sync')();
const art = require('./art');


function compareAnswer(playerCard, aiCard) {
  if (playerCard == 'feu') {
    if (aiCard == 'feu') {
      return 0;
    } else if (aiCard == 'eau') {
      return 2;
    } else if (aiCard == 'plante') {
      return 1;
    }
  } else if (playerCard == 'eau') {
    if (aiCard == 'feu') {
      return 1;
    } else if (aiCard == 'eau') {
      return 0;
    } else if (aiCard == 'plante') {
      return 2;
    }
  } else if (playerCard == 'plante') {
    if (aiCard == 'plante') {
      return 0;
    } else if (aiCard == 'feu') {
      return 2;
    } else if (aiCard == 'eau') {
      return 1
    }
  } else {
    return;
  }
}


function randomCardAi(array) {
  let i = Math.floor(Math.random() * array.length);
  return array[i];
}

function askCard() {
  return prompt('Your card (feu/eau/plante): ');
}

function main() {
  let round = 1;
  let scoreAI = 0;
  let scorePlayer = 0;
  for (let i = 1; i <= 3; i++) {
    // notre liste de carte
    let AIinventory = ['feu', 'plante', 'eau'];

    console.log('Round ', round);

    let aiCard = randomCardAi(AIinventory);
    let playerCard = prompt('Choisir une carte (feu/eau/plante) : ');

    let result = compareAnswer(playerCard, aiCard);


    if (result == 1) {
      scorePlayer++;
      console.log('Le joueur gagne !\n');
      console.log('Carte du joueur:', playerCard);
      console.log('Carte de l\'IA:\n');

    } else if (result == 2) {
      scoreAI++;
      console.log('L\'IA gagne !!\n');
      console.log('Carte du joueur:', playerCard);
      console.log('Carte de l\'IA: ', aiCard, '\n');
    } else if (result == 0) {
      console.log('Les cartes sont les mêmes\n');
      console.log('Carte du joueur:', playerCard);
      console.log('Carte de l\'IA: ', aiCard, '\n');
    } else {
      console.log('Carte invalide');
    }
    round++;
  }

  art.finalResult(scoreAI, scorePlayer, '\n\n');

  let replay = prompt('Voulez vous rejouer (y/n)>');

  if (replay.toLowerCase() == 'y') {
    main();
  } else if (replay.toLowerCase() == 'n') {
    console.log('Fin de la partie.....');
    return;
  } else {
    console.log('Invalid command, quiting anyway...');
    return;
  }
}

art.fire();
art.eau();
main();
