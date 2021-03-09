var fs = require("fs");
var n = fs.readFileSync("./passwords.txt").toString('utf-8');

var table = n.split("\n");
var digits = [];
var finalNumbers = [];

function convNum(someArray, anotherArray) {
    for (i=0; i < someArray.length; i++){
        let j = parseInt(someArray[i]);
        anotherArray.push(j);
    }
    
}

function checkSum(digitArray, outArray) {
    for (i=0; i < digitArray.length; i++){
        for (j=0; j<digitArray.length; j++){
            for (p=0; p<digitArray.length; p++){
                if (digitArray[i]+digitArray[j]+digitArray[p] == 2020){
                    outArray.push(digitArray[i]);
                    outArray.push(digitArray[j]);
                    outArray.push(digitArray[p]);
                
                }

            }
            
        }
    }
}

function finalSum (finalArray) {
    return finalArray[0] * finalArray[1] * finalArray[2];
}

convNum(table, digits);
checkSum(digits,finalNumbers);

console.log(finalSum(finalNumbers));



