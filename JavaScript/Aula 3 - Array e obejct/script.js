//oque são vetores ou arrays

//como declarar um array
//let array =['string' , 1, true];
//console.log[array];

//pode guardar vários tipos de dados
//let array = ['String',1 , true, ['array1'], ['array2'],['array3']];
//console.log(array[3]);

//array.forEach(function(item, index){console.log(item, index)});

//array.push('novo', 'item');
//console.log(array);

//array.pop();
//console.log(array);

//array.shift();
//console.log(array);

//array.unshift('Novo item');
//console.log(array);

//console.log(array.indexOf(true))

//array.splice(0,3);
//console.log(array);

//array.slice(0,3);
//console.log(array);

//declarando object

let object = { string: 'String', number: 1, boolean: true, array:["array"], objectInterno: {objectInterno: 'objeto Interno'}};
console.log(object.boolean);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {string, boolean, number} = object;
console.log(string, boolean, number);
