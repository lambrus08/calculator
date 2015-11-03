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


var calc_values = [''];//calculator object
var calc_index = 0;


//click hander to call the function
$(".key").on("click", 'button',function(){
    console.log('number button was clicked');
    var button_text = $(this).text();
    input_number(button_text);
});//targets all of my calculator board and add click handler.. will also call calculate function


//the function to be called
function input_number(input) {
    console.log('input number function was called');
    console.log(input);
    calc_values[calc_index]+= input;
    console.log('array is now ',calc_values);

}


$(".operators-container").on("click", "button"  ,function(){
    console.log("operator button was clicked", $(this));
    var ops_text = $(this).text();
    input_operator(ops_text);
});



//the function to be called
function input_operator(input){
    console.log("input operator number function was called");
    console.log(input);
    calc_index++;
    calc_values[calc_index]= input;
    calc_index++;
    calc_values[calc_index] = "";
    //calc_index = 1;
    console.log("array is now ", calc_values);


}

$(".equals").on("click", "button" , function(){
    console.log("equals was clicked", $(this));
    console.log("current length true: ", calc_values.length == 1);
    console.log("current length: ", calc_values.length);
    console.log("current index : " ,calc_values[calc_index].length -1);
    console.log("current length : ", calc_values.length);
    $(this).text();
    var num1 = null;
    var op = $(".operator").text();
    var num2 = null;
    console.log("op button: ", $(".operator").text());
    input_equal(num1,op,num2);
});

function input_equal(num1,op,num2){
    num1 = null;
    num2 = null;
    for (i=0; i<calc_values.length; i++){
        if(calc_values[calc_index] == calc_values.length == 1){
            if(calc_values[calc_index] == op) {
                num1 = calc_values[calc_index] - 1;

            }
                else {
                num2 = calc_values[calc_index] + 1;





            }

        }

    }
}

