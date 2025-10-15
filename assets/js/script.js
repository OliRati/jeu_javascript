let tabName = [
    "feu",
    "eau",
    "terre"
];

/*
 * Function powerPc
 * ------------------------------------------
 * inputs : none
 * output : a number for the computer choice
 *   0 - for fire
 *   1 - for water
 *   2 - for soil
 */
function powerPc() {
    return Math.floor(Math.random() * 3);
}

/*
 * Function testWinner
 *   Check winner state
 * -----------------------------------------
 * inputs :
 *   choice1 as player 1 choice
 *   choice2 as player 2 choice
 * output :
 *   a boolean set as true if choice1 won on choice2
 */

function testWinner(choice1, choice2) {
    // Le feu bat la terre
    if ((choice1 === 0) && (choice2 === 2))
        return true;

    // L'eau bat le feu
    if ((choice1 === 1) && (choice2 === 0))
        return true;

    // La terre bat l'eau
    if ((choice1 === 2) && (choice2 === 1))
        return true;

    return false;
}

/* Recupere les boutons */

const boutonFeu = document.querySelector(".bouton-feu");
const boutonEau = document.querySelector(".bouton-eau");
const boutonTerre = document.querySelector(".bouton-terre");
const boutonRejouer = document.querySelector(".bouton-rejouer");

/* Recupere zone d'interractions */

const interractions = document.querySelector(".interractions");

/* Recupere les zones pour le score */

const nombreParties = document.querySelector(".partie-number");
const nombreGagnees = document.querySelector(".score-user");
const nombrePerdues = document.querySelector(".score-computer");

let partiesJouer;
let partiesGagnes;
let partiesPerdues;
let computerChoice;

function updateScores() {
    nombreParties.textContent = partiesJouer.toString();
    nombreGagnees.textContent = partiesGagnes.toString();
    nombrePerdues.textContent = partiesPerdues.toString();
}

function gameReset() {
    partiesJouer = 0;
    partiesGagnes = 0;
    partiesPerdues = 0;

    computerChoice = powerPc();

    boutonEau.disabled = false;
    boutonFeu.disabled = false;
    boutonTerre.disabled = false;
    boutonRejouer.disabled = true;

    updateScores();
    interractions.textContent = "Choisissez un élément...";
}

gameReset();

function theWinnerIs(userChoice) {
    let str = `Ordinateur : ${tabName[computerChoice]}\nVous : ${tabName[userChoice]}\nResultat : `;

    if (computerChoice === userChoice)
        str += "égalité";
    else if (testWinner(computerChoice, userChoice)) {
        partiesPerdues++;
        str += "L'ordinateur a gagné";
    }
    else if (testWinner(userChoice, computerChoice)) {
        str += "Vous avez gagné";
        partiesGagnes++;
    }

    /* Update interraction section */

    interractions.textContent = str;

    partiesJouer++;

    updateScores();
    
    if ((partiesPerdues === 10) || (partiesGagnes === 10)) {
        boutonEau.disabled = true;
        boutonFeu.disabled = true;
        boutonTerre.disabled = true;
        boutonRejouer.disabled = false;
        if (partiesGagnes === 10)
            interractions.textContent += "\nVous aves gagné la manche."
        else
            interractions.textContent += "\nVous avez perdu la manche."
    }
    else {
        computerChoice = powerPc();
        interractions.textContent += "\nEssayez encore...";
    }
}

boutonFeu.addEventListener("click", () => {
    // console.log("Feu clicked");
    theWinnerIs(0);
});

boutonEau.addEventListener("click", () => {
    // console.log("Eau clicked");
    theWinnerIs(1);
});

boutonTerre.addEventListener("click", () => {
    // console.log("Terre clicked");
    theWinnerIs(2);
});

boutonRejouer.addEventListener("click", () => {
    // console.log("Rejouer clicked");
    gameReset();
})