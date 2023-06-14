class Aluno{
constructor(nome,idade,matricula){
    this.nome = nome
    this.idade=idade
    this.matricula=matricula
}

}

class turma{
    constructor(){
        this.listaDeAlunos = []
    }
adicionarAluno(aluno){
    this.listaDeAlunos.push(aluno)
}
}
