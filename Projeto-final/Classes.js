
class Propriedade {
    constructor(propriedade_id, endereco, tipo_propriedade, num_quartos, num_banheiros) {
        this.propriedade_id = propriedade_id;
        this.endereco = endereco;
        this.tipo_propriedade = tipo_propriedade;
        this.num_quartos = num_quartos;
        this.num_banheiros = num_banheiros;
    }
}


class Inquilino {
    constructor(inquilino_id, nome, email, telefone) {
        this.inquilino_id = inquilino_id;
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }
}


class ContratoAluguel {
    constructor(contrato_id, propriedade_id, inquilino_id, data_inicio, data_fim) {
        this.contrato_id = contrato_id;
        this.propriedade_id = propriedade_id;
        this.inquilino_id = inquilino_id;
        this.data_inicio = data_inicio;
        this.data_fim = data_fim;
    }
}


class Pagamento {
    constructor(pagamento_id, contrato_id, valor, data_pagamento) {
        this.pagamento_id = pagamento_id;
        this.contrato_id = contrato_id;
        this.valor = valor;
        this.data_pagamento = data_pagamento;
    }
}


class Manutencao {
    constructor(manutencao_id, propriedade_id, descricao, status) {
        this.manutencao_id = manutencao_id;
        this.propriedade_id = propriedade_id;
        this.descricao = descricao;
        this.status = status;
    }
}


class Usuario {
    constructor(usuario_id, nome, tipo_usuario) {
        this.usuario_id = usuario_id;
        this.nome = nome;
        this.tipo_usuario = tipo_usuario;
    }
}
