let frutasVermelhas = new Array();

//frutasCitricas[0] = "Morango";
frutasVermelhas.push("Morango");
frutasVermelhas.push("Maçã");
frutasVermelhas.push("Cereja");
frutasVermelhas.push("Framboesa");

console.log(frutasVermelhas);

let primeiraFrutaRemovida = frutasVermelhas.shift();//remove o primeiro elemento do array
console.log(`${primeiraFrutaRemovida} foi removido da cesta`);
console.log(frutasVermelhas);