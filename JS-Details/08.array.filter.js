const numeros = [5, 10, 14, 26, 32, 67, 67, 78, 76];

const numeroEncontrado = numeros.filter((n) => {
    return n == 67;
});
const nomes = [
    "Laura",
    "Walyson",
    "Julia",
    "Eloysa",
    "Lívia",
    "Amy",
    "Davi",
    "Gabriel",
    "Fontes",
    "Marcos",
    "Felipe",
    "Paulo",
    "Maria",
    "Edu"
];

pessoasLegais =nomes.filter((nome) => {
   return nome.length <= 3 || nome.length == 6;
});
console.log(pessoasLegais);


// console.log(numeroEncontrado);