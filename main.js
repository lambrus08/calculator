var numb1 = null;
var numb2 = null;
var operator = null;
var numbers = [''];
var numbers_array= 0;


$(document).ready(function()
    {
        $('.operand').on('click', function(){
            console.log('button was clicked');
            var digit =  $('.operand').val();
            console.log('grabbing number value', digit);
        })
    }
);

