
const prompt = require ('prompt-sync')();

function menu (){
    console.log("----------------------------");
    console.log("|       jeu de cartes      |");
    console.log("----------------------------");
    console.log("|      1)  jouer           |");
    console.log("|      2)  quitter         |");
    console.log("----------------------------");
    let choice =+ prompt("que faire : ");
    console.log("----------------------------");
    if (choice==1){
        Game();
    }
    else if (choice == 2){
        console.log("|    a bientot.");
        console.log("----------------------------");
    }
}
menu();

function Game() {
    let playerName = prompt("saisir votre nom: ");
    let round = 0;
    let scoreAI = 0;
    let scorePlayer = 0;
    for (let i = 1; i <= 3; i++) {
        console.log("----------------------------");
        console.log("|   "+playerName +" VS IA"+" Round " + i+":");
        console.log("----------------------------");
        let AIinventory = ["feu", "plante", "eau"];
        let randomIndex = Math.floor(Math.random() * AIinventory.length);
        let element = AIinventory[randomIndex];
        let chosenCard = prompt("Choisir une carte (feu/eau/plante) : ");
        switch (chosenCard) {
            case "feu":
                console.log("L'AI utilise : " + element);
                switch (element) {
                    case "eau":
                        console.log("Round " + i);
                        console.log("Point pour l'AI.");
                        scoreAI++;
                        round++;
                        break;
                    case "plante":
                        console.log("Round " + i);
                        console.log("Point pour le joueur.");
                        scorePlayer++;
                        round++;
                        break;
                    case "feu":
                        console.log("Round " + i);
                        console.log("Égalité.");
                        round++;
                        break;
                    default:
                        break;
                }
                break;
            case "eau":
                console.log("L'AI utilise : " + element);
                switch (element) {
                    case "plante":
                        console.log("Round " + i);
                        console.log("Point pour l'AI.");
                        scoreAI++;
                        round++;
                        break;
                    case "feu":
                        console.log("Round " + i);
                        console.log("Point pour le joueur.");
                        scorePlayer++;
                        round++;
                        break;
                    case "eau":
                        console.log("Round " + i);
                        console.log("Égalité.");
                        round++;
                        break;
                    default:
                        break;
                }
                break;
            case "plante":
                console.log("L'AI utilise : " + element);
                switch (element) {
                    case "feu":
                        console.log("Round " + i);
                        console.log("Point pour l'AI.");
                        scoreAI++;
                        round++;
                        break;
                    case "eau":
                        console.log("Round " + i);
                        console.log("Point pour le joueur.");
                        scorePlayer++;
                        round++;
                        break;
                    case "plante":
                        console.log("Round " + i);
                        console.log("Égalité.");
                        round++;
                        break;
                    default:
                        break;
                }
                break;
            default:
                console.log("Veuillez choisir une carte valide : feu, eau ou plante.");
                i--;
                break;
        }
    }
    if (scoreAI > scorePlayer) {
        console.log("------------------------------------------------");
        console.log("|   score de l'AI: " + scoreAI + " - " + "score de " + playerName + " : " + scorePlayer + "      ");
        console.log("|             victoire de AI                   |");
        console.log("------------------------------------------------");
    }
    else if (scoreAI < scorePlayer) {
        console.log("------------------------------------------------");
        console.log("|   score de l'AI: " + scoreAI + " - " + "score de " + playerName + " : " + scorePlayer + "      ");
        console.log("|              victoire de "+ playerName           );
        console.log("------------------------------------------------");
    }
    else if (scoreAI == scorePlayer) {
        console.log("------------------------------------------------");
        console.log("|   score de l'AI: " + scoreAI + " - " + "score du " + playerName + " : " + scorePlayer + "      ");
        console.log("|                 resultat : null              |");
        console.log("------------------------------------------------");
    }
    ending();
}


function ending() {
    let choice = prompt("voulez vous encore jouer(N/Y)? ");
    if (choice == "Y") {
        GamePLay();
    }
    else if (choice == "N") {
        menu();
    }
    else {
        console.log("invalid command.");
        ending();
    }
}
