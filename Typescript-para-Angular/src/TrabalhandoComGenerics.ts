//generics

function concatArray<T>(...itens: T[]): T[]{
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1,5], [3]);
const strArray = concatArray<string[]>(["Felipe", "Goku"], ["Vegeta"]);

console.log(numArray);
console.log(strArray);