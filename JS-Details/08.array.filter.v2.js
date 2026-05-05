const estoque = [
    {   descricao: "Camisa Polo",
        cor: "Verde",
        preco: 19.99,
        perfil: "M",
        quantidade: 10,
        promocao: true

    },
    {   descricao: "Camisa Polo",
        cor: "Amarela",
        preco: 49.99,
        perfil: "F",
        quantidade: 10,
        promocao: false
    },
    {   descricao: "Camisa Polo",
        cor: "Azul",
        preco: 29.99,
        perfil: "F",
        quantidade: 100,
        promocao: true
    },
    {   descricao: "Camisa Polo",
        cor: "Roxo",
        preco: 49.99,
        perfil: "M",
        quantidade: 10,
        promocao:false 
    }
];

let qtdPromocao = 0;
const produtosPromocao = estoque.filter((p) => {
    if(p.promocao == true) {
        qtdPromocao+= p.quantidade;
    }
    return p.promocao == true;
});
console.log(`Quantidade total de produtos em promoção: ${qtdPromocao}`);
console.log(produtosPromocao);


// const estoqueFeminino = estoque.filter((item) => {
//     return item.perfil == "F";
// });

// console.log(estoqueFeminino);