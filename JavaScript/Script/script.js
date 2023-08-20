alert("Ola Mundo!!!");
// tpos primitivos

//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numero = 1;
console.log(typeof(numero));

//string
var nome = "Ana";
console.log(typeof(nome));

//como declarar variavel
var variavel ="Daniel"; 
variavel = "Gama";
console.log(variavel);

let variavel2 = "Alice";
variavel2 = "Moraes";
console.log(variavel2);

const constante = "Danny";
//constante = "Dafinny";
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';
    console.log(escopoLocalInterno);
}

escopoLocal( );

//comparação
//var comparacao = ('0' = 0);
//console.log(comparacao);

//comparação identica
var comparacaoIdentica = '0' == 0;
console.log(comparacaoIdentica);

//adicao
var adicao = 1 + 1;
console.log(adicao);

//subtração
var subtracao = 1 - 1;
console.log(subtracao);

//multiplicacao
var multiplicacao = 1 * 1;
console.log(multiplicacao);

//divisao
var divisao = 2 / 2;
console.log(divisao);


