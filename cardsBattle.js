const input = require('readline-sync');
let cardSym = ['♢','♣','♤','♥'];
let arrow = ['🢤','🢥','☺'];
let cardOpt = ['1 ','2 ','3 ','4 ','5 ','6 ','7 ','8 ','9 ','10','11','12'];
let contGame = true;
let winner;
var player1 = new Object();
player1.name;
player1.bank = 50;
player1.bet;
player1.round;

var player2 = new Object();
player2.multiplayer;
player2.name = 'computer';
player2.bank = 50;
player2.bet;
player2.round;


//initialize

player1.name = input.question("Whats your name?: ");
player2.multiplayer = input.keyInSelect(['Play against pc'], 'Select an option: ',{cancel: 'play with a friend'});
if (player2.multiplayer == -1){
player2.name = input.question("Player 2, Whats your name?: ");
}

//gameloop

while (contGame){
    //place bets
    player1.bet = input.question(`${player1.name}, put a bet between 0 and ${player1.bank}: `);
    if (player1.bet > player1.bank || player1.bet < 0){
        throw new Error('Credit refused because a gambler isnt allowed to overdraft!');
    }
    if (player2.multiplayer == -1){
        player2.bet = input.question(`${player2.name}, put a bet between 0 and ${player2.bank}: `);
        if (player2.bet > player2.bank || player2.bet < 0){
            throw new Error('Credit refused because a gambler isnt allowed to overdraft!');
        }
    }
    else {
        player2.bet = Math.floor(Math.random()*(player2.bank-1))+1
    }

    //gameround
    player1.round = cardOpt[Math.floor(Math.random()*(12-1))+1];
    player2.round = cardOpt[Math.floor(Math.random()*(12-1))+1];

    if (Number(player1.round) > Number(player2.round)){
        winner = 0;
        player1.bank += Number(player1.bet);
        player2.bank -= Number(player2.bet);
    }
    else if (Number(player1.round) < Number(player2.round)){
        winner = 1;
        player2.bank += Number(player2.bet);
        player1.bank -= Number(player1.bet);
    }
    else {
        winner = 2;
        //no points here
    }
//wow such graphics
console.log(`

     ${player1.name}                               ${player2.name}
 _____________________               _____________________ 
|                     |             |                     |
| ${player1.round}                  |             | ${player2.round}                  |
|                     |             |                     |
|                     |             |                     |
|                     |             |                     |
|                     |             |                     |
|          ${cardSym[Math.floor(Math.random()*4)]}          |      ${arrow[winner]}      |          ${cardSym[Math.floor(Math.random()*4)]}          |
|                     |             |                     |
|                     |             |                     |
|                     |             |                     |
|                     |             |                     |
|                   ${player1.round}|             |                   ${player2.round}|
|_____________________|             |_____________________|

`)

    if (winner == 2){
        console.log('tie! no winner in this round.');
    }
    else {
        console.log(`Player ${winner+1} wins!!!`);
    }
        //Checks if to continue gameloop
    console.log(`${player1.name} has ${player1.bank} left, and ${player2.name} has ${player2.bank} left!`);
        if (player1.bank < 1 || player2.bank < 1 ){
                contGame = false;
        }
        else {
            contGame = input.keyInSelect(['No'], 'Continue? ',{cancel: 'Yes'});
        }

}

//summery

if (player1.bank < player2.bank){
    console.log(`And the winner is ${player2.name}!!!`);
}
else if (player1.bank > player2.bank){
    console.log(`And the winner is ${player1.name}!!!`);  
}
else {
    console.log('Its a tie! how lovely');
}