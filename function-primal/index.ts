// Criar uma conta
// Consultar o saldo da conta
// Depositar na conta
// Sacar na conta
// Encerrar a conta
// como realizar transferências entre contas

interface Iconta{
    nomeTitular: string;
    saldo?: number;
}

class Conta{
    private nomeTitular: string;
    private saldo: number;
    private ativa: boolean = true;

    constructor({
        nomeTitular,
        saldo = 0
    }: Iconta){
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
        console.log(`Olá ${this.nomeTitular}, Bem Vindo ao ILMG Bank`)
    }

    meuSaldo = (): number => this.saldo

    depositar = (valor: number): void | boolean => {
        if(!this.ativa){
            console.log('Conta desativada, impossível realizar depósito')
            return this.ativa
        }
        this.saldo = this.saldo + valor
        console.log(`Você depositou ${valor}. Seu novo saldo é ${this.saldo}`)
    }

    sacar = (valor: number): boolean =>{ 
        if(!this.ativa){
            console.log('Conta desativada, impossível realizar saque')
            return this.ativa
        }
        if(valor <= this.saldo){
            this.saldo -= valor
            console.log(`Você sacou ${valor}. Seu novo saldo é ${this.saldo}`)
            return this.ativa 
        }

        console.log(`Saldo insuficiente.Você quer sacar ${valor} Seu saldo atual é ${this.saldo}`)
        return this.ativa 
        
    }

    cancelarConta = () => {
        if(this.saldo === 0 ){
            this.ativa = false
            console.log('Conta Desativada')
            return this.ativa
        }
        
        console.log(`Impossível desativar conta de ${this.nomeTitular}. Conta com pendência ativa!`)
    }
}

const conta: Conta = new Conta({nomeTitular: 'Abner'})
//const contaB: conta = new conta({nomeTitular: 'Remaldo',saldo:10})

conta.cancelarConta()

conta.depositar(10)


//console.log('Antes do depósito',contaA.meuSaldo())
//contaA.depositar(100)

//console.log('Depois do depósito',contaA.meuSaldo())

//contaA.sacar(120)

//console.log('Depois do saque',contaA.meuSaldo())

//console.log(contaB)