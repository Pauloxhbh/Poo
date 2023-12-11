function carregarDetalhesPropriedade(propriedade_id) {
    let propriedade = null;

    // Implemente a lógica para carregar os detalhes da propriedade com o ID fornecido
    // Exemplo simulado de dados:
    if (propriedade_id === 1) {
        propriedade = new Propriedade(1, 'Rua A, 123', 'Casa', 3, 2);
    } else if (propriedade_id === 2) {
        propriedade = new Propriedade(2, 'Avenida B, 456', 'Apartamento', 2, 1);
    }
    
    return propriedade;
}
