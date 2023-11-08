interface ICalcularIdade{
    nome:string,
    anoNascimento:number,
    profissao?: string
}

const nome = 'Abner'
const anoNascimento = 2003
const profissao = 'Desenvolvedor'

function calcularIdade({
    nome,
    anoNascimento,
    profissao
}:ICalcularIdade): string{
    const idade: number = 2023 - anoNascimento
    if(profissao){
        return `Seu nome é ${nome}. Você tem ${idade} anos de idade e sua profissao é ${profissao}`
    }

    return `Seu nome é ${nome}. Você tem ${idade} anos de idade.`
}

console.log(calcularIdade({nome, anoNascimento}))
console.log(calcularIdade({nome, anoNascimento, profissao}))