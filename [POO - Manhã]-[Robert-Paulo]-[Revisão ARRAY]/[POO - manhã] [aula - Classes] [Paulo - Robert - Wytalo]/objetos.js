var celular1 = new Celular(
    "Samsung",
    "Galaxy A32",
    "4 GB",
    "128 GB",
    "2x 2.0 GHz Cortex-A75 + 6x 1.8 GHz Cortex-A55",
    "5",
    "589299.jpg"
)
var celular2 = new Celular(
    "Apple",
    "Iphone14",
    "6 GB",
    "524 GB",
    "2x 3.22 GHz Avalanche + 4x 1.82 GHz Blizzard",
    "3",
    "638678.jpg"
)
var celular3 = new Celular(
    "Apple",
    "Iphone13",
    "4 GB",
    "512 GB",
    "2x 3.22 GHz Avalanche + 4x 1.82 GHz Blizzard",
    "3",
    "590579.jpg"
)

var celular4 = new Celular(
    "Motorola",
    "Moto G 2023",
    "4 GB",
    "128 GB",
    "2x 2.2 GHz Kryo 460 + 6x 1.8 GHz Kryo 460",
    "3",
    "moto.jpg"
)

var celular5 = new Celular(
    "Nokia",
    "XR21",
    "6 GB",
    "128 GB",
    "2x 2.2 GHz Kryo 660 Gold + 6x 1.7 GHz Kryo 660 Silver",
    "3",
    "nokia.jpg"
)

var tv1 = new TV(
    "Samsung",
    "S95B Smart 4K OLED TV 2022",
    "65”",
    "tv1.avif"
)
var tv2 = new TV(
    "Sony",
    "a95k",
    "55”",
    "tv2.jpg"
)
var tv3 = new TV(
    "LG",
    "tv lg 55 oled c9psa",
    "55”",
    "tv3.jpg"
)
var tv4 = new TV(
    "Samsung",
    "Samsung 65QN90B",
    "65”",
    "tv4.jpg"
)
var tv5 = new TV(
    "Xiaomi",
    "Mi TV Lux",
    "55”",
    "tv5.jpg"
)


// var celulares = []
// celulares.push(celular1, celular2, celular3, celular4, celular5)
// for (i = 0; i < celulares.length; i++) {
//     document.write(`
// <div class='card'>

//     <img class='foto' src='img/${celulares[i].imagem}'/>
//     <div class='info'>

//         <h3 class='modelo'>${celulares[i].modelo}</h3>
//         <p class='marca'>${celulares[i].marca}</p>
//     <span class='outros'>${celulares[i].processador}</span>
//     <span class='separador'>|</span>
//     <span class='outros'>${celulares[i].armazenamento}</span>
//     <span class='separador'>|</span>
//     <span class='outros'>${celulares[i].ram}</span>
//     <span class='separador'>|</span>
//     <span class='outros'>${celulares[i].cameras}</span>
//     </div>
//     </div>
//     <br>
//     `)
// }
// var tvs=[]
// tvs.push(tv1,tv2,tv3,tv4,tv5)
// for(i=0;i < tvs.length;i++){
// document.write(`
//     <div class='card'>
//     <img class='foto' src='img/${tvs[i].foto}'/>
//     <div class='info'>

//     <span class='outros'>${tvs[i].marca}</span>
//     <span class='separador'>|</span> 
//     <span class='outros'>${tvs[i].modelo}</span>
//     <span class='separador'>|</span>
//     <span class='outros'>${tvs[i].tamanho}</span>
//     </div>
//     </div>
//     `)
// }
var meusProd = new Favoritos();
var prodcat = new Favoritos();

meusProd.adicionarProduto(tv1)
prodcat.adicionarProduto(celular1)

console.log(prodcat)
console.log(meusProd)







