// part one

function charCount (str, letter){
    var letterCount = 0;
    for (let p = 0; p < str.length; p++){
        if (str.charAt(p) == letter){
            letterCount += 1;
        }
    }
    return letterCount;
}

var fs = require("fs");
var input = fs.readFileSync("./passwords.txt").toString('utf-8');

var list = input.split("\n");

var correctPasswords = 0;

for (var i = 0; i < list.length; i++) {
    var split = list[i].split(':');

    let keys = split[0];
    let values = split[1];

    var chop = keys.split(" ");
    var range = chop[0].split("-");

    let letter = chop[1];
    let lowRange = range[0];
    let highRange = range[1];

    let y = values;
    let freq = charCount(y, letter);

    if (freq >= lowRange && freq <= highRange){
        correctPasswords += 1;
    }
}

console.log(correctPasswords);


// part two


for (var i = 0; i < list.length; i++) {
    var split = list[i].split(':');

    let keys = split[0].trim();
    let values = split[1].trim();

    var chop = keys.split(" ");
    var range = chop[0].split("-");

    let letter = chop[1];
    let firstPos = range[0] -1;
    let secondPos = range[1] -1;

    let sepArray = values.split('');

    console.log(sepArray);

    if (sepArray[firstPos] == letter && sepArray[secondPos] !== letter){
        correctPasswords += 1;
    } else if 
    (sepArray[firstPos] !== letter && sepArray[secondPos] == letter){
        correctPasswords +=1;
    }
}

console.log(correctPasswords)