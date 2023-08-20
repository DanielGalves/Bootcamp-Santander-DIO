var jogador1 = 0;
var jogador2 = 0;
var placar;


//if(jogador1 != -1){
//    if(jogador1 > 0){
//        console.log('Jogador 1 marcou ponto!');
//    } else if(jogador2 > 0) {
//        console.log('Jogador 1 marcou ponto!');    
//    } else {
//        console.log('Ninguem marcou ponto!');
//    } 
//}

joogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos' ) :
console.log('Jogadores Inválidos')
if(jogador1 > 0 && jogador2 == 0){
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
} else if(jogador2 > 0 && jogador1==0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador2 > jogador1;    
} else {
    console.log('Ninguem marcou ponto!');
} 

switch (placar){
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!!!');
        break;
    default:
        console.log('ninguem ganhou!!!');
}


let array = ['valor1','valor2', 'valor3', 'valor4', 'valor5'];
let object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

for( let i = 0; i < array.length; i++){
    console.log(array[i])
}

for(let i in array) {
    console.log(i);
}

for (i in object){
    console.log(i);
}

for (i of array){
    console.log(i);
}

for (i of object.propriedade1){
    console.log(i);
}

var a =0;

while(a < 10){
    a++;
    console.log(a);
}

do{
    console.log(a);
    a--
}while( a > 0);