function performOperation() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = (document.getElementById('operation').value);
    var result = 0;
    
switch(operation){
    case "addition":
    result = num1 + num2;
    break;
    case "subtraction":
    result = num1 - num2;
    break;
    case "multiplication":
        result = num1 * num2;
        break;
        case "division":
        result = num1 / num2;
        break;
        case "modulus":
        result = num1 % num2;
        break;

}
    document.getElementById('result').value = result;
    }