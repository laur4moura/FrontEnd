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

//reduz o array a um único elemento. No caso um somatório, por exemplos:
let totalPreco = 0;
 let totalEstoque = estoque.reduce((total, produto) => {
    totalPreco += produto.preco * produto.quantidade;
    return total + produto.quantidade;
}, 0);

console.clear();
console.log(`Total de produtos no estoque: ${totalEstoque}`);
console.log(`Total do valor do estoque: R$${totalPreco.toFixed(2)}`);

