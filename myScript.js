var button = document.getElementById("var1");
var calculation = document.getElementById("var2");
var textBox = document.getElementById("var3");

function buttonPressed(){
    var textValue = textBox.value;
    //if (isNaN(textValue) == false){
    calculation.innerHTML = D2B(textValue);
    //}
    /*
    else{
        calculation.innerHTML = "You can only type in numbers"
        document.getElementById("img").style.display = "block";
    }*/
    
}
function D2B(ourNum){
    var ostanek = [];
    var currentNum = ourNum;
    while (currentNum != 0){
        currentOst = currentNum % 2;
        currentNum = Math.floor(currentNum / 2);
        //console.log(currentNum, currentOst);
        ostanek.unshift(currentOst);
    }
    var joinedOst = ostanek.join("");
    return joinedOst;
    }