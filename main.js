$(document).ready(function()
{
  $('input:button').on('click', function()
  {
      var inputValue = $(this).val();
      console.log('input value:', inputValue);
      screenDisplay(inputValue);
  });

});


function screenDisplay(input)
{
 var digit = $('#screenDisplay').val(input);

}

function add(numb1, numb2)
{
    return numb1 + numb2;
}

function subtract(numb1, numb2)
{
    return numb1 - numb2;
}

function divide(numb1, numb2)
{
    if (numb2 == 0)
    {
        alert('division by 0 is a NO, NO!');
        return 0;
    }

    return numb1 / numb2;
}

function multiply(numb1, numb2)
{
   return numb1 * numb2;
}