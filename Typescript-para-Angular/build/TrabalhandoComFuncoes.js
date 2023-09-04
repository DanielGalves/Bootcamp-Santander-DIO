"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//funções
function addNumber(x, y) {
    return x + y;
}
function addToHello(name) {
    return `Hello ${name}`;
}
console.log(addToHello("Daniel"));
// a função so aceita o tipo especificado na criação da function
let soma = addNumber(3, 2);
// caso utilize um tipo diferente  o codigo nao compila
//let soma2: string = addNumber("3","2");
//Funções Multi Types
function CallToPhone(phone) {
    return phone;
}
//funções assincronas
function getDataBase(id) {
    return __awaiter(this, void 0, void 0, function* () {
        return "Daniel";
    });
}
