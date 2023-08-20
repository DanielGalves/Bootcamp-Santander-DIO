function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - soma (+)\n 2 - subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão Inteira (\)\n 6 - Potenciação (**)'));
}
let num1 = Number(prompt('Informe o primeiro numero: '));
let num2 = Number(prompt('Informe o segundo numero: '));
let resultado;

function soma(){
    resultado = num1 + num2;
    alert('${num1} + ${num2} = ${resultado}');
}

function subtracao(){
    resultado = num1 - num2;
    alert(num1 + ' - ' + num2 + ' = ' + resultado);
}

function multiplicacao(){
    resultado = num1 * num2;
    alert('${num1} * ${num2} = ${resultado}');
}

function divisaoReal(){
    resultado = num1 / num2;
    alert('${num1} / ${num2} = ${resultado}');
}

function divisaoInteira(){
    resultado = num1 % num2;
    alert('O resto da divisão entre o ${num1} e o ${num2} é ${resultado}');
}

function potenciacao(){
    resultado = num1 ** num2;
    alert('O ${num1} elevado ao  ${num2} é ${resultado}');
}


switch(operacao){
    case 1:
        soma();
        break;       
    case 2:
        subtracao();
        break;
    case 3:
        multiplicacao();
         break; 
    case  4:
        divisaoReal();
        break;
    case  5:
        divisaoInteira();
        break;      
    case  6:
        potenciacao();
        break;
    default:
        alert('Operação inválida!!');
    
}

calculadora();
