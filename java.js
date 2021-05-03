alert("This is a JavaScript Calculator");
function compute()
{
    var check1 = document.getElementById("number1").value;
    var check2 = document.getElementById("number2").value;
    var num1 = (document.getElementById("number1").value)*1;
    var num2 = (document.getElementById("number2").value)*1;
    let ans = 0;
    if (check1 === "" || check2 ==="")
    {
        document.getElementById("answer").innerHTML = "Please input both values.";
    }
    else if (isNaN(num1)===true || isNaN(num2)===true)
    {
        document.getElementById("answer").innerHTML = "Please only input numbers.";
    }
    else if(document.getElementById("plus").checked===true)
    {
        ans = num1+num2;
        document.getElementById("answer").innerHTML = "Answer: " + ans;
    }
    else if (document.getElementById("minus").checked===true)
    {
        ans = num1-num2;
        document.getElementById("answer").innerHTML = "Answer: " + ans;
    }
    else if (document.getElementById("mult").checked===true)
    {
        ans = num1*num2;
        document.getElementById("answer").innerHTML = "Answer: " + ans;
    }
    else if (document.getElementById("div").checked===true)
    {
        ans = num1/num2;
        document.getElementById("answer").innerHTML = "Answer: " + ans;
    }
    else 
    {
        document.getElementById("answer").innerHTML = "Please select an operator.";
    }
    return;
}


