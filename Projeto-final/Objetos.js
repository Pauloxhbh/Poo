
let propriedade1 = new Propriedade(1, 'Rua A, 123', 'Casa', 3, 2);
let propriedade2 = new Propriedade(2, 'Avenida B, 456', 'Apartamento', 2, 1);

let inquilino1 = new Inquilino(1, 'João Silva', 'joao@example.com', '(11) 98765-4321');
let inquilino2 = new Inquilino(2, 'Maria Santos', 'maria@example.com', '(11) 99876-5432');

let contrato1 = new ContratoAluguel(1, 1, 1, '2023-01-01', '2023-12-31');
let contrato2 = new ContratoAluguel(2, 2, 2, '2023-02-01', '2023-07-31');

let pagamento1 = new Pagamento(1, 1, 1000.00, '2023-06-01');
let pagamento2 = new Pagamento(2, 2, 800.00, '2023-06-15');

let manutencao1 = new Manutencao(1, 1, 'Vazamento no banheiro', 'Em andamento');
let manutencao2 = new Manutencao(2, 2, 'Troca de lâmpadas queimadas', 'Concluída');

let usuario1 = new Usuario(1, 'Robert', 'Admin');
let usuario2 = new Usuario(2, 'Jorjinho', 'Comum');
