interface Iconta{
    nomeTitular: string;
    saldo?: number;
}

class conta{
    private nomeTitular: string;
    private saldo: number;

    constructor({
        nomeTitular,
        saldo = 0
    }: Iconta){
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
        console.log(`Olá ${this.nomeTitular}, Bem Vindo ao ILMG Bank`)
    }

    meuSaldo = (): number => this.saldo

    depositar = (valor: number) => {
        this.saldo = this.saldo + valor
        console.log(`Você depositou ${valor}. Seu novo saldo é ${this.saldo}`)
    }
}

const contaA: conta = new conta({nomeTitular: 'Abner'})
//const contaB: conta = new conta({nomeTitular: 'Remaldo',saldo:10})

console.log('Antes do depósito',contaA.meuSaldo())
contaA.depositar(100)

console.log('Depois do depósito',contaA.meuSaldo())

//console.log(contaB)

// Criar uma conta
// Consultar o saldo da conta
// Depositar na conta
// Sacar na conta
// Encerrar a conta