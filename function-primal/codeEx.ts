// Definição de uma classe para uma conta bancária
class ContaBancaria {
    titular: string;
    saldo: number;
  
    constructor(titular: string, saldoInicial: number = 0) {
      this.titular = titular;
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
      console.log(`Depositado ${valor} na conta de ${this.titular}. Saldo atual: ${this.saldo}`);
    }
  
    sacar(valor: number): void {
      if (valor > this.saldo) {
        console.log(`Saldo insuficiente para saque na conta de ${this.titular}`);
      } else {
        this.saldo -= valor;
        console.log(`Sacado ${valor} da conta de ${this.titular}. Saldo atual: ${this.saldo}`);
      }
    }
  
    consultarSaldo(): void {
      console.log(`Saldo atual na conta de ${this.titular}: ${this.saldo}`);
    }
  }
  
  // Exemplo de uso
  const minhaConta = new ContaBancaria('Abner', 1000);
  
  minhaConta.consultarSaldo(); // Saída: Saldo atual na conta de João: 1000
  
  minhaConta.depositar(500); // Saída: Depositado 500 na conta de João. Saldo atual: 1500
  
  minhaConta.sacar(200); // Saída: Sacado 200 da conta de João. Saldo atual: 1300
  
  minhaConta.sacar(1500); // Saída: Saldo insuficiente para saque na conta de João
  