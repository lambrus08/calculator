/*
/!**
 * Created by godson on 10/29/15.
 *!/

//callback function defined
function callback(type, value, item) {
    switch (value) {
        case undefined:
            $('#display_area').html("");
            break;
        default:
            $('#display_area').html(value);
            break;
    }
}
// my_calculator - creates a new calculator object
var my_calculator = new calculator(callback);
//after DOM load add click handlers to all buttons
$(document).ready(function () {
    $('button').on('click', function () {
        var val = $(this).text();
        switch (val) {
            case 'AC':
                my_calculator.allClear();
                break;
            default:
                my_calculator.addItem($(this).text());
                break;
        }
    });
});

*/
var myCalculator = new calculator(callBack); // setting global and object

function callBack(value, type, item){//function to grab values from display,also setting with parameters
    switch (value) {//switch statement to pick a block of code expression is set to my value parameter
        case undefined://case made for undefined, if undefined matches then it will display code below
            $("#display").html(" ");//targeting my display and leaving it with open strings
            break;
        default:
            $("#display").html(value);//if defined then execute by targeting my displays value set my function parameter
            break;
    }
}



$("document").ready(function(){// running function once dom is ready
    $("button").on("click", function(){//targeting button running a function once clicked
        var val = $(this).text();// making variable for button value
        console.log('key: ', val);
        switch  (val) {//switch inside statement is my value field
            case "CE":// if case CE is displayed then will clear my calculator
                myCalculator.allClear();//clears all calculator
                break;//breaks out of switch block
            default : myCalculator.addItem($(this).text());//our default is to add what ever is out display value and
                break;//stored in myCalculator

        }

    });
});