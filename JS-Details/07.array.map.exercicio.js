const numeros = 
[
    50,
    200,
    250,
    800,
    992.87,
    800,
    500,
    9876,
    99,
    134
];
console.log(`Array original: ${numeros}`);

const numerosMultiplicados = numeros.map((num) => {
    return num * 2;
});

console.log(`Array modificado:`);
console.log();

let textoResultado = "";
numerosMultiplicados.forEach((num) => {
    textoResultado += `${num} | `;
});

//remove o ultimo pipe

textoResultado = textoResultado.substring(0, textoResultado.length - 3);
console.log(textoResultado);