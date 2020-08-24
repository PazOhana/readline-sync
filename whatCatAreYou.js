const input = require('readline-sync');

let ansArr = [3,1,2,0]; //is a key for summing up a scaleable result

let sum = 0;

console.log(`

                                                             _____ __ 
 _ _ _ _       _              _                     _____   |___  |  |
| | | | |_ ___| |_    ___ ___| |_    ___ ___ ___   |  |  |    |  _|  |
| | | |   | .'|  _|  |  _| .'|  _|  | .'|  _| -_|  |  |  |    |_| |__|
|_____|_|_|__,|_|    |___|__,|_|    |__,|_| |___|  |_____|    |_| |__|
                                                                     
The most awesome game ever made with js since this afternoon!
`);

let questionsArr = [ //each line is an array, contains a question and another array of answers- mixed in a constant scale of 3-1-2-0
    ['What would you do if you were hungry?',['ill go hunt something','order something idk','make a sandwitch','yell moooooom!']],
    ['Your car is broken, what would you do?',['ill take a day off and fix it myself!','yell moooooom!','ill take it to the garage','what car? im a cat. let me sleep.']],
    ['Could you please help me with...',['Sure!','oh why me!?','ok, i could free up some time for you','do i have to?']],
    ['Friends are comming and your house is a mess...',['what mess? ive just finished washing the floors','ill try hiding things in drawers','ill spend an hour cleaning up','who cares?']],
    ['Will you participate in a bootcamp?',['sir yes sir!','im sorry but im pacifist','sure, it might help my future!','will you just let me sleep already?']]
];

for (i=0; i<5; i++){
    index = undefined;
    index = input.keyInSelect(questionsArr[i][1], questionsArr[i][0]);

        while (questionsArr[i][1][index] === undefined){
            index = input.keyInSelect(questionsArr[i][1], 'Oh common, im not AI! tell me what you think!');
        }

    index = ansArr[index]; //translates back to a summable value
    sum += index;
if (i<4){    
console.log(`
 / _/ 
( o.o ) Ok, Next question:
 > ^ <
`)}
}

console.log(`
                     __ 
 _____              |  |
|     |___ ___ _ _ _|  |
| | | | -_| . | | | |__|
|_|_|_|___|___|_____|__|

And finally! the results are:`);

switch (true) {
    case (sum < 7):
        console.log('Youre a Persian cat, your\'e so lazy! \ntry to do a little more!');
        break;
    case (sum < 14):
        console.log('Youre a Balinese cat, sometimes you feel sleepy but suddenly your\'e up for a mission!\njust please, do not destroy our couch...');
        break;
    case (sum < 21):
        console.log('Youre a Bangal cat, we cant keep up with you being so active!\ngive us some of what your\'e drinking!');
        break;
}