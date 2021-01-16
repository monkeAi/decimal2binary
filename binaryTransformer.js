function D2B(ourNum){
    var ostanek = [];
    var currentNum = ourNum;
    while (currentNum != 0){
        currentOst = currentNum % 2;
        currentNum = Math.floor(currentNum / 2);
        //console.log(currentNum, currentOst);
        ostanek.unshift(currentOst);
    }
    /*
    for(i = currentNum; currentNum > 0; currentNum = Math.floor(currentNum / 2)){
        currentOst = currentNum % 2;
        console.log(currentNum, currentOst);
        ostanek.unshift(currentOst);
    }*/

var joinedOst = ostanek.join("");
//console.log("Binary number: " + joinedOst);
return joinedOst;
}

console.log(D2B(1483));


