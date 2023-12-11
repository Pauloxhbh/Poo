
let propriedades = [
    new Propriedade(1, 'Rua A, 123', 'Casa', 3, 2),
    new Propriedade(2, 'Avenida B, 456', 'Apartamento', 2, 1),

];
function exibirListaPropriedades() {
    let listaPropriedades = document.getElementById('lista-propriedades');

    propriedades.forEach(propriedade => {
        let propriedadeDiv = document.createElement('div');
        propriedadeDiv.innerHTML = `
            <h2>${propriedade.endereco}</h2>
            <p><strong>Tipo:</strong> ${propriedade.tipo_propriedade}</p>
            <p><strong>Quartos:</strong> ${propriedade.num_quartos}</p>
            <p><strong>Banheiros:</strong> ${propriedade.num_banheiros}</p>
            <hr>
        `;
        listaPropriedades.appendChild(propriedadeDiv);
    });
}

window.onload = function() {
    exibirListaPropriedades();
};
