/*








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
 case "C":
 myCalculator.clear();
 break;
 default : myCalculator.addItem($(this).text());//our default is to add what ever is out display value and
 break;//stored in myCalculator

 }

 });
 });

 */



/*
 function inputs(num1,num2){
 var outputArray = [];
 var add = num1 + num2;
 outputArray.push(""+(num1+"+"+num2)+("="+add));
 var subtract = num1 - num2;
 outputArray.push(""+(num1+"-"+num2)+("="+subtract));
 var multiply = num1 * num2;
 outputArray.push(""+(num1+"*"+num2)+("="+multiply));
 var divide = num1 / num2;
 outputArray.push(""+(num1+"/"+num2)+("="+divide));
 console.log(outputArray);
 }
 inputs(6,2);



 var index = 0;

 */
var num1 = null;
var num2 = null;
var op = null;
var calc_values = [''];//calculator object
var calc_index = 0;


//click hander to call the function
$('document').ready(function () {
    $(".key").on("click", 'button', function () {
        console.log('number button was clicked');
        var button_text = $(this).text();
        input_number(button_text);
    });//targets all of my calculator board and add click handler.. will also call calculate function
    $(".operators-container").on("click", "button", function () {
        console.log("operator button was clicked", $(this));
        var ops_text = $(this).text();
        input_operator(ops_text);
    });
    $(".equals").on("click", "button", function () {
        console.log("equals was clicked", $(this));
        input_equal(num1, op, num2);
    });

});

//the function to be called
function input_number(input) {
    console.log('input number function was called');
    console.log(input);
    calc_values[calc_index] += input;
    console.log('array is now ', calc_values);
    $("#display").text(calc_values[calc_index]);

}


//the function to be called
function input_operator(op) {
    console.log("input operator number function was called");
    console.log(op);
    calc_index++;
    calc_values[calc_index] = op;
    calc_index++;
    calc_values[calc_index] = "";
    //calc_index = 1;
    console.log("array is now ", calc_values);


}

function opPick(num1, op, num2) {
    switch (op) {
        case "+":
            total = Number(num1) + Number(num2);
            break;
        case "-":
            total = Number(num1) - Number(num2);
            break;
        case "x":
            total = Number(num1) * Number(num2);
            break;
        case "/":
            if (num2 === 0) {
                return "error"
            } else {
                total = Number(num1) / Number(num2);
            }
            break;

    }
    return total;

}


function input_equal() {
    var num1 = null;
    var num2 = null;
    var op = null;
    var result = null;

    for (i = 0; calc_values.length > 1 && i < calc_values.length; i++) {
        if (!isNaN(calc_values[i])) {
            if (num1 === null) {
                num1 = calc_values[i];
            } else {
                num2 = calc_values[i];
                result = opPick(num1, op, num2);
                calc_values[0] = result;
                calc_values.splice(i - 1, 2);
                num1 = null;
                num2 = null;
                op = null;
            }

        }else{
            op = calc_values[i];
        }
    }


}


