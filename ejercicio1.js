const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
// console.log(products);
products.includes('Camiseta');
for (var element of products) {
    if (element.includes('Camiseta'))
    console.log(element);
}
