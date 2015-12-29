var numb1 = null;
var numb2 = null;
var operator = null;
var inputStorage = [''];
var storageArrayIndex = 0;


$(document).ready(function()
    {
        $('.operand').on('click', function()
        {
            console.log('operand button was clicked');
            console.log(this);
            var digit =  $(this).val();
            console.log('grabbing number value', digit);
            addOperandsToArray(digit);
        });

        $('.operator').on('click', function()
        {
            console.log('operator was clicked');
            var op = $(this).val();
            console.log('operator is:', op);
            addOperatorsToArray(op);

        });

        $('.equals').on('click', function()
        {
            console.log('equals was clicked');
            $(this).val();
            calculation(numb1, operator, numb2);
        });
    }
);

function addOperandsToArray(number)
{
    console.log(number);
    inputStorage[storageArrayIndex] += number;
    console.log('current array value is, operand pressed:', inputStorage);
    $('#screenDisplay').val(inputStorage[storageArrayIndex]);
}

function addOperatorsToArray(opInput)
{
    console.log(opInput);
    storageArrayIndex++;
    inputStorage[storageArrayIndex] = opInput;
    console.log('current array value is, operator pressed:', inputStorage);
    storageArrayIndex++;
    inputStorage[storageArrayIndex] = '';
    console.log('current data inside storage array:',inputStorage);
}

function calculation(numb1, operators, numb2)
{

}


