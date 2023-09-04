// objeto - sem previsibilidade
let produto: object = {
    name: "Master Chief",
    cidade: "Brasilia",

}

//objeto tipado - com previsibilidade 
type ProdutoLoja = {
    nome: String;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja ={
    nome: "Caderno",
    preco: 15.99,
    unidades: 3

}