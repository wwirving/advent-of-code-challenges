var fs = require("fs");
var input = fs.readFileSync("./passports.txt").toString('utf-8');

var passports = input.split("\n\n");
// passport criteria

function passportCheck (stringA) {

    var byr = stringA.search("byr");
    var iyr = stringA.search("iyr");
    var eyr = stringA.search("eyr");
    var hgt = stringA.search("hgt");
    var hcl = stringA.search("hcl");
    var ecl = stringA.search("ecl");
    var pid = stringA.search("pid");
    //var cid = stringA.search("cid");

    if (byr == -1 || iyr == -1 || eyr == -1 || hgt == -1 || hcl == -1 || ecl == -1 || pid == -1) {
        return "invalid";
    } else {
        return "valid";
    }
}

function databaseSearch (stringA) {

    var validCount = 0;
   
    for (i=0; i < passports.length; i++){
        
    var check = passportCheck(stringA[i]);
    
            if (check == "valid"){
        
            var category = passports[i].replace(/^\s+|\s+$/g,'').split(/\s+/);
            var catArray = []

            category.forEach(function(element) {
            catArray.push(element.split(":"))
                });

            const passport = Object.fromEntries(catArray);

            var authToken = 0;

            if (passport.pid.length == 9){
                authToken += 1;
                pidCount +=1;
            }
            if (parseInt(passport.eyr) >= 2020 && parseInt(passport.eyr) <= 2030){
                authToken += 1;
                eyrCount +=1;
            }
            if (parseInt(passport.iyr) >= 2010 && parseInt(passport.iyr) <= 2020) {
                authToken += 1;
                iyrCount +=1;
            }
            if (parseInt(passport.byr) >= 1920 && parseInt(passport.byr) <= 2002) {
                authToken += 1;
                byrCount +=1;
            }
            if (passport.hgt.search("cm") !== -1){
                if (parseInt(passport.hgt.slice(0,3)) >= 150 && parseInt(passport.hgt.slice(0,3)) <= 193) {
                    authToken += 1;
                
                    hgtCount +=1;
                }
            }
            if (passport.hgt.search("in") !== -1){
                if (parseInt(passport.hgt.slice(0,3)) >= 59 && parseInt(passport.hgt.slice(0,3)) <= 76) {
                    authToken += 1;
                    hgtCount += 1;
                }
            }
            if (passport.hcl.length == 7 && passport.hcl.charAt(0) == "#"){
                if (passport.hcl.search(/^[g-zG-Z]+$/) == -1 ){
                    authToken += 1;
                    hclCount += 1;
                }
            }
            if (passport.ecl == "amb" ||
                passport.ecl == "blu" ||
                passport.ecl == "brn" ||
                passport.ecl == "gry" ||
                passport.ecl == "grn" ||
                passport.ecl == "hzl" ||
                passport.ecl == "oth" 
                ){
                    authToken += 1;
                    eclCount +=1;
            }
            if (authToken == 7) { 
                validCount += 1;
            }
            
        }
    }

    return validCount;

}

console.log(databaseSearch(passports));
