const input = require('readline-sync');
console.log(`
██╗  ██╗ █████╗ ███╗   ██╗ ██████╗ ███╗   ███╗ █████╗ ███╗   ██╗██╗
██║  ██║██╔══██╗████╗  ██║██╔════╝ ████╗ ████║██╔══██╗████╗  ██║██║
███████║███████║██╔██╗ ██║██║  ███╗██╔████╔██║███████║██╔██╗ ██║██║
██╔══██║██╔══██║██║╚██╗██║██║   ██║██║╚██╔╝██║██╔══██║██║╚██╗██║╚═╝
██║  ██║██║  ██║██║ ╚████║╚██████╔╝██║ ╚═╝ ██║██║  ██║██║ ╚████║██╗
╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝ ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═╝
              Made with hope to stay at AppleSeeds :)
          No real men were hang in the proccess of making.

`);

let words = ['bootstrap','bootcamp','booties','bootable','boohoo'];
let g = 10;
let typeIn;
let word = words[Math.floor(Math.random()*(words.length))];
let scrword = word;
let changeFlag = false;
let end = false;
input.keyInPause();
for (i=0; i<word.length; i++){
    if (Math.round(Math.random()) == 1){
        for (j=0; j<word.length; j++){
            scrword = scrword.replace(word[i],'*');
        }
    }
}
while (!end){
console.log(`OK guess: ${scrword};
You have ${g} guesses left. OR ELSE!`);

typeIn = input.question('Guess a letter or the whole word: ');
typeIn = typeIn.replace(/[^a-zA-Z ]/g, "").toLocaleLowerCase();

if (typeIn == word){
    changeFlag = true;
    end = true;
}
else if (typeIn.length == 1){
    //check for that letter. remove a try if false, reveal if right.
    for (i=0; i<word.length; i++){
            if (typeIn === word[i]){
                scrword = scrword.substr(0, i) + typeIn + scrword.substr(i + 1);
                changeFlag = true;
            }
            
    }
}

if (!changeFlag){
    console.log('You are !right');
    g--;
    if (g === 0){
        throw new Error('No more guessing!');
    }
}
changeFlag = false;

if (!scrword.includes('*')){
    end = true;
}
console.log('_.~"~._.~"~._.~"~._.~"~._');
}
console.log(`You did it! the word is ${word}! And you had ${g} guesses left!`);