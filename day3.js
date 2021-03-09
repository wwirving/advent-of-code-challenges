var fs = require("fs");
var input = fs.readFileSync("./hashforest.txt").toString('utf-8');

var lines = input.split("\n");

var posX = 0;
var posY = 0;
var treeCount = 0;


while (posY < lines.length-1){
    posX += 3;
    posX %= lines[0].length;
    console.log(posX);
    posY += 1;
    let hash = lines[posY].charAt(posX);
        
    if (hash == '#') {
            treeCount += 1;
        }
        
    }

console.log(treeCount); 