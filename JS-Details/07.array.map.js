const hobbies = [
    "Correr", 
    "Nadar", 
    "Jogar Bola",
    "Viajar",
    "Lutar", 
    "Conversar Muito", 
    "Ler Livro", 
    "Malhar na Academia",
    "Maratonar Séries",
    "Dormir",
    "Jogar Basquete"
];

const novosHobbies = hobbies.map((hob) => {
    return `<p> ${hob}</p>`;
});

console.log(novosHobbies);