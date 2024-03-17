document.getElementById("alrt").onclick = function() {
    alert("Ayan")

}
document.getElementById("dng").onclick=function(){
    alert("0301")
}
document.getElementById("shw").onclick=function(){
    document.getElementById("par").innerHTML= "Variable Name"
    document.getElementById("ott").innerHTML= "VarNaame"
}
document.getElementById("cml").onclick=function(){
    document.getElementById("par").innerHTML="Example of camelcase"
    document.getElementById("ott").innerHTML="thisIsCamelCase"
}

    // plus
document.getElementById("sm").onclick = function () {
    document.getElementById("par").innerHTML = "";
    document.getElementById("ott").innerHTML = "";

    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    
    document.getElementById("ott").innerHTML = "<p class='text-center'>" + sum + "</p>";
    let par= "let num1 = " + num1 + ";<br> let num2 = "+ num2 + "; <br> let sum = num1 + num2; "

    document.getElementById("par").innerHTML = par;

}
// subtract
document.getElementById("sb").onclick = function () {
    document.getElementById("par").innerHTML = "";
    document.getElementById("ott").innerHTML = "";

    let num1 = 10;
    let num2 = 5;
    let sub = num1 - num2;
    
    document.getElementById("ott").innerHTML = "<p class='text-center'>" + sub + "</p>";
    let par= "let num1 = " + num1 + ";<br> let num2 = "+ num2 + "; <br> let sub = num1 - num2; "

    document.getElementById("par").innerHTML = par;}

    // multiply
document.getElementById("ml").onclick = function () {
    document.getElementById("par").innerHTML = "";
    document.getElementById("ott").innerHTML = "";

    let num1 = 10;
    let num2 = 5;
    let mul = num1 * num2;
    
    document.getElementById("ott").innerHTML = "<p class='text-center'>" + mul + "</p>";
    let par= "let num1 = " + num1 + ";<br> let num2 = "+ num2 + "; <br> let mul = num1 * num2; "

    document.getElementById("par").innerHTML = par;}

    // calculat
    document.getElementById("cl").onclick = function () {
        document.getElementById("par").innerHTML = "";
        document.getElementById("ott").innerHTML = "";
    
        let someCalculate = 36 / 6 * 3 + 2 ** 4 - (3 + 5);
    
        document.getElementById("ott").innerHTML = "<p class='text-center'>" + someCalculate + "</p>";
        let par = "let someCalculate = 36 / 6 * 3 + 2 ** 4 - (3 + 5);"
    
        document.getElementById("par").innerHTML = par;
    
    }

    //    divide
document.getElementById("div").onclick = function () {
    document.getElementById("par").innerHTML = "";
    document.getElementById("ott").innerHTML = "";

    let num1 = 10;
    let num2 = 5;
    let div = num1 / num2;
    
    document.getElementById("ott").innerHTML = "<p class='text-center'>" + div + "</p>";
    let par= "let num1 = " + num1 + ";<br> let num2 = "+ num2 + "; <br> let div = num1 / num2; "

    document.getElementById("par").innerHTML = par;}

    ""
    // clear
    document.getElementById("clearone").onclick=function(){
        document.getElementById("par").innerHTML = ""}
    document.getElementById("cleartwo").onclick=function(){
        document.getElementById("ott").innerHTML = ""

    }
