var numb1 = null;
var numb2 = null;
var operator = null;
var inputStorage = [''];
var splicedStorage = [];
var storageArrayIndex = 0;
var decimal = false;
var equalsPressed = false;


$(document).ready(function () {
        $('.operand').on('click', function () {
            console.log('operand button was clicked');
            console.log(this);
            var digit = $(this).val();
            console.log('grabbing number value', digit);
            addOperandsToArray(digit);
        });

        $('.operator').on('click', function () {
            console.log('operator was clicked');
            var op = $(this).val();
            console.log('operator is:', op);
            addOperatorsToArray(op);
            enableDecimal();

        });

        $('.equals').on('click', function () {
            console.log('equals was clicked');
            $(this).val();
            equalsCalc(numb1, operator, numb2);
            enableDecimal()
        });

        $('#clearAll').on('click', function () {
            console.log('clear all was clicked');
            clearAll();
            enableDecimal()
        });

        $('#decimal').on('click', function () {
            console.log('decimal clicked');
            var decimal = $(this).val();
            console.log(decimal);
            addDecimal();
            addOperandsToArray(decimal);
        });
    }
);

function addOperandsToArray(number) {
    if(isNaN(inputStorage[storageArrayIndex]) === true){
        return
    }
    if (typeof inputStorage[storageArrayIndex] === 'number') {
        inputStorage[storageArrayIndex] = number;
    }
    else {
        console.log(number);
        inputStorage[storageArrayIndex] += number;
    }


    console.log('current array value is, operand pressed:', inputStorage);
    $('#screenDisplay').val(inputStorage[storageArrayIndex]);

}

function addOperatorsToArray(opInput) {

    if(isNaN(inputStorage[storageArrayIndex]) === true){
        return
    }

    if (inputStorage[inputStorage.length - 1] === '')
    // this will execute is last item pressed was an operator
    // or it is completely empty
    //TODO: check if array is empty
    {

        inputStorage[inputStorage.length - 2] = opInput;


    }
    else {


        if (inputStorage.length === 3 && equalsPressed === false) {
            equalsCalc();
        }

        console.log('test one two three;', opInput);
        storageArrayIndex++;
        inputStorage[storageArrayIndex] = opInput;
        console.log('current array value is, operator pressed:', inputStorage[storageArrayIndex]);
        storageArrayIndex++;
        inputStorage[storageArrayIndex] = '';
        console.log('current data inside storage array:', inputStorage);

    } //end of else statement


    equalsPressed = false;
}

function addDecimal() {
    if (decimal == false) {
        $('#decimal').prop('disabled', true);
        decimal = true;
    }
}
function enableDecimal() {
    if (decimal == true) {
        $('#decimal').prop('disabled', false);
        decimal = false;
    }
}

function calculation(numb1, operator, numb2) {

    switch (operator) {

        case '+':
            total = Number(numb1) + Number(numb2);
            break;

        case '-':
            total = Number(numb1) - Number(numb2);
            break;

        case 'x':
            total = Number(numb1) * Number(numb2);
            break;

        case '/':
            if (numb2 === '0') {
                return 'Error';
            } else {
                total = Number(numb1) / Number(numb2);
            }
            break;


    }
    return total;

}

function equalsCalc() {
    var numb1 = null;
    var numb2 = null;
    var operator = null;
    var result = null;
    //can we do math?
//ie do we have 3 things in inputstorage, and the last one is a numeric string
// if not a number, ie an empty string
//      take the operand from inputStorage[0] and copy it to 2
// if it isn't 3 things in input storage
//  if it is 1 thing
//      do I have spliceStorage?
//          if yes, copy spliceStorage into inputStorage starting from element 2
//          if no, we can't do math, show error
// if not, exit with error
    if (inputStorage.length === 1){
        return
    }
    if (!(inputStorage.length === 3 && !isNaN(parseFloat(inputStorage[inputStorage.length - 1])))) {

        inputStorage[2] = inputStorage[0];

    }
    for (i = 0; inputStorage.length > 1 && i < inputStorage.length; i++)
        // loop which looks inside my input array.  If the length of array
        // is greater than 1 and index of array is less than the array length then
        // we increment arrays input
    {
        if (!isNaN(inputStorage[i])) {
            if (numb1 === null) {
                numb1 = inputStorage[i];

            } else {
                numb2 = inputStorage[i];
                result = calculation(numb1, operator, numb2);
                inputStorage[0] = result;
                equalsPressed = true;
                splicedStorage = inputStorage.splice(i - 1, 2);
                if (typeof inputStorage[0] === 'number' && inputStorage.length === 1) {
                    console.log('spliced storage = ', splicedStorage);
                    inputStorage.splice(1, 2, splicedStorage[0], splicedStorage[1]);
                    console.log('concat is complete', inputStorage);
                }

                console.log('equals pressed, array current status:', inputStorage);
                numb1 = null;
                numb2 = null;
                operator = null;
                storageArrayIndex = 0;
            }
            showDisplay(result);
        } else {
            operator = inputStorage[i];
        }
    }


}


function showDisplay(currentInput) {
    $('#screenDisplay').val(currentInput);
}

function clearAll() {
    numb1 = null;
    numb2 = null;

    inputStorage = [''];
    storageArrayIndex = 0;
    $('#screenDisplay').val('0');
}

