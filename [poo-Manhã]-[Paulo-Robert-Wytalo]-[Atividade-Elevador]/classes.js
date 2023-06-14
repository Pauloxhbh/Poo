class Passageiro {
    constructor(andarPretendido) {
        this._andarPretendido = andarPretendido
    }
}

class Elevador {
    constructor() {
        this._andarAtual = 0
        this._quantidadeMaximaDePassageiros = 9
        this._listaDePassageiros = []
    }
    adicionarPassageiro(passageiro) {
        if (this._listaDePassageiros.length < this._quantidadeMaximaDePassageiros) {
            this._listaDePassageiros.push(passageiro)
            console.log(`1 passageiro que deseja ir ao andar ${passageiro._andarPretendido} Entrou no elevador. Agora o elevador tem ${this._listaDePassageiros.length} passageiros`)
        }
        else {
            console.log(`O passageiro não pode entrar. O elevador já atingiu a capacidade máxima: ${this._quantidadeMaximaDePassageiros} passageiros.`)
        }
    }
    movimentar(andarDeDestino) {
        this._andarAtual = andarDeDestino
        console.log(`Movimentação \nAgora o elevador está no ANDAR ${this._andarAtual}`)
        let j = 0
        for (let i = 0; i < this._listaDePassageiros.length; i++) {
            if (this._listaDePassageiros[i]._andarPretendido == this._andarAtual) {
                this._listaDePassageiros.splice(i, 1)
                j++
                i--
            }

        }

        console.log(`${j} passageiro(s) SAÍRAM do elevador. \n${this._listaDePassageiros.length} passageiro(s) CONTINUAM no elevador`)

    }

}


