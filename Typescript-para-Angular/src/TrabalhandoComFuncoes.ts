//funções
function addNumber(x:number, y:number): number{

    return x + y;

}

function addToHello(name: string) :string{
    return `Hello ${name}`
}

console.log(addToHello("Daniel"))

// a função so aceita o tipo especificado na criação da function
let soma: number = addNumber(3,2);
// caso utilize um tipo diferente  o codigo nao compila
//let soma2: string = addNumber("3","2");

//Funções Multi Types
    function CallToPhone(phone: number | string){
    return phone;

    }

 //funções assincronas
 async function getDataBase(id: number): Promise<number | string>{
    return "Daniel";
 }   