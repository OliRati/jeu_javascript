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


let computerChoice = 2; /* powerPc(); */
let userChoice = 0;

console.log(`Computer  : ${tabName[computerChoice]}  User : ${tabName[userChoice]}`);

if (computerChoice === userChoice)
    console.log("None won");
else if (testWinner(computerChoice, userChoice))
    console.log('Computer won');
else if (testWinner(userChoice, computerChoice))
    console.log('User won');
    
    