// Maneiras de declararar Arrays

let dados: string[] = ["Felipe","Ana","adriana"];

let dados2: Array<string> =  ["Felipe","Ana","adriana"];

//Array Mult Types sem ordem definida
let infos: (string | number| boolean)[] = ["Daniel", 30, 1.65, true];

//tuplas - Array Multi Type com ordem definida
let boleto: [string, number, number] = ["Conta de agua", 170.90, 93098];

// Arrays Métodos utiliza os mesmos metodos do JavaScript