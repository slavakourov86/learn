var arrayOfButtons = document.getElementsByClassName('operation-button');
var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

function makeOper(parOper) {
    var Number1 = Number(input1.value);
    var Number2 = Number(input2.value);
    if (parOper === '+') {
        var result = Number1 + Number2;
        console.log(result);
    }
    else if (parOper === '-') {
        var result = Number1 - Number2;
        console.log(result);
    }
    else if  (parOper === '*') {
        var result = Number1 * Number2;
        console.log(result);
    }
    else if  (parOper === '/') {
        var result = Number1 / Number2;
        console.log(result);
    }
    else {
        var result = 'Operation is unknown';
        console.log(result);
        console.log(parOper);
    }
}

function onButtonClick(eventObject) {
    var clickedEl = eventObject.currentTarget;
    var oper = clickedEl.innerHTML;
    makeOper(oper);
}



for (var i=0; i <arrayOfButtons.length; i++) {
    var button = arrayOfButtons[i];
    button.addEventListener('click', onButtonClick);
}
console.log(arrayOfButtons);