var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMulti = document.getElementById('buttonMulti');
var buttonDev = document.getElementById('buttonDev');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');


function onButtonPlusClick() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var result = number1 + number2;
    console.log(result);
}
function onButtonMinusClick() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var result = number1 - number2;
    console.log(result);
}
function onButtonMultiClick() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var result = number1 * number2;
    console.log(result);
}
function onButtonDevClick() {
    var number1 = Number(input1.value);
    var number2 = Number(input2.value);
    var result = number1 / number2;
    console.log(result);
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMulti.addEventListener('click', onButtonMultiClick);
buttonDev.addEventListener('click', onButtonDevClick);