var fs = require("fs");
var input = fs.readFileSync("./hashforest.txt").toString('utf-8');

var lines = input.split("\n");

function treeCounter (xValue, yValue) {
    var posX = 0;
    var posY = 0;
    var treeCount = 0;

    while (posY < lines.length-1){
        posX += xValue;
        posX %= lines[0].length;
        posY += yValue;
        let hash = lines[posY].charAt(posX);
            
        if (hash == '#') {
                treeCount += 1;
            }
            
        }
return treeCount;

}

const a = treeCounter(1,1);
const b = treeCounter(3,1);
const c = treeCounter(5,1);
const d = treeCounter(7,1);
const e = treeCounter(1,2);


function sumA (a,b,c,d,e) {
    return a * b * c * d * e;
}

console.log(sumA(a,b,c,d,e));