// Classe Funcionario
class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

// Classe Gerente
class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

// Classe Desenvolvedor
class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

// Caso ocorra erro
function exibirErro(mensagem) {
    const errorElement = document.getElementById('erro');
    errorElement.textContent = mensagem;
}

function criarFuncionarios() {
    try {
        const nomeGerente = document.getElementById('nomeGerente').value;
        const idadeGerente = parseInt(document.getElementById('idadeGerente').value);
        const cargoGerente = document.getElementById('cargoGerente').value;
        const departamento = document.getElementById('departamento').value;

        const nomeDev = document.getElementById('nomeDev').value;
        const idadeDev = parseInt(document.getElementById('idadeDev').value);
        const cargoDev = document.getElementById('cargoDev').value;
        const linguagem = document.getElementById('linguagem').value;

        // Validação dos campos
        if (!nomeGerente || isNaN(idadeGerente) || !cargoGerente || !departamento) {
            throw new Error('Todos os campos do gerente devem ser preenchidos corretamente.');
        }

        if (!nomeDev || isNaN(idadeDev) || !cargoDev || !linguagem) {
            throw new Error('Todos os campos do desenvolvedor devem ser preenchidos corretamente.');
        }

        const gerente = new Gerente(nomeGerente, idadeGerente, cargoGerente, departamento);
        const desenvolvedor = new Desenvolvedor(nomeDev, idadeDev, cargoDev, linguagem);

        document.getElementById('infoGerente').textContent = gerente.seApresentar() + ' ' + gerente.gerenciar();
        document.getElementById('infoDev').textContent = desenvolvedor.seApresentar() + ' ' + desenvolvedor.programar();
    } catch (error) {
        exibirErro(error.message);
    }
}

// Função para funcionar o botão
document.getElementById('criarFuncionarios').addEventListener('click', criarFuncionarios);