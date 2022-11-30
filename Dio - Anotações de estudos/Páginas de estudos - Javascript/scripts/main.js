
/*
Desafio 1: Variaveis e operadorares

let precocombustivel = 5.79;
const gastoKMporL = 12;
let distanciaKM = 1580;
let litros
let gastodaviagem = distanciaKM / gastoKMporL * precocombustivel 
*/


/* 
Desafio 2: Condicionais

1 - Gasto de viagem dependendo dos combustiveis
Caso a variavel seja criada dentro do bloco condicional:
let precoGasolina = 6.66;
let precoEtanol = 5.79;
let distancia = 100;
let combustivel = 'gasolina';
let gastoCombustivel = 10;

if (combustivel === 'gasolina' ) {
    const valorGasto = (distancia / gastoCombustivel) * precoGasolina
    console.log(valorGasto)
} else {
    const valorGasto = (distancia / gastoCombustivel) * precoEtanol
    console.log(valorGasto)
}

Caso a variavel seja criada fora do bloco condicional:
let precoGasolina = 6.66;
let precoEtanol = 5.79;
let distancia = 100;
let combustivel = 'gasolina';
let gastoCombustivel = 10;
let valorGasto;

if (combustivel === 'gasolina' ) {
    valorGasto = (distancia / gastoCombustivel) * precoGasolina
    console.log(valorGasto)
} else {
    valorGasto = (distancia / gastoCombustivel) * precoEtanol
    console.log(valorGasto)
}

2 - Classificação de aprovação de aluno
let nota1 = 6;
let nota2 = 6;
let nota3 = 6;
const media = (nota1 + nota2 + nota3) / 3
const aprovado = media >= 7;
const reprovado = media <= 5;

if (aprovado) {
    console.log('Aprovado')
} else if (reprovado) {
    console.log('Reprovado')
} else {
    console.log('Em recuperação')
}

3 - Calculo IMC de uma pessoa

const peso = 49;
const altura = 1.58
const IMC = peso / (altura * altura);

if (IMC < 18.5) {
    console.log('Abaixo do peso');
} else if (IMC >= 18.5 && IMC < 25) {
    console.log('Peso normal');
} else if (IMC >= 25 && IMC < 30) {
    console.log('Acima do peso');
} else if (IMC >= 30 && IMC < 40) {
    console.log('Obeso');
}else {
    console.log('Obesidade grave');
}

4 - Valor de pagamento de produto

const etiqueta = 100;
let pagamento = 2;


if (pagamento === 1) {
    console.log (etiqueta * 0.9);
} else if (pagamento === 2) {
    console.log (etiqueta * 0.85);
} else if (pagamento === 3) {
    console.log (etiqueta * 0.85);
} else if (pagamento === 4) {
    console.log (etiqueta);
} else {
    console.log (etiqueta * 1.1);
}
*/

/*
Desafio 3: Funções

1 - Função meu nome 

function meunome(nome){
    console.log('Meu nome é ' + nome);
}

meunome('Tamires');
meunome('Gabriel');
meunome('Vicencia');

2 - Função Maioridade

function determineMaioridade(idade) {
    if (idade >= 18){
        console.log('Maior de idade')
    } else {
        console.log('Menor de idade')
    }
}

determineMaioridade(18);
determineMaioridade(15);

3 - Aplicação de desconto e juros

Possibilidade 1

function determinarPreco(pagamento, etiqueta){
    if (pagamento === 1) {
        console.log (etiqueta * 0.9);
    } else if (pagamento === 2) {
        console.log (etiqueta * 0.85);
    } else if (pagamento === 3) {
        console.log (etiqueta * 0.85);
    } else if (pagamento === 4) {
        console.log (etiqueta);
    } else {
        console.log (etiqueta * 1.1);
    }
}

determinarPreco(1, 100);
determinarPreco(2, 100);
determinarPreco(3, 100);
determinarPreco(4, 100);
determinarPreco(5, 100);

Possibilidade 2 


function aplicarDesconto (etiqueta, desconto) {
    return etiqueta - (etiqueta * desconto/100)
}

function aplicarJuros (etiqueta, juros) {
    return etiqueta + (etiqueta * juros/100)
}

function determinarPreco(pagamento, etiqueta){
    if (pagamento === 1) {
        console.log (aplicarDesconto(etiqueta, 10));
    } else if (pagamento === 2) {
        console.log (aplicarDesconto(etiqueta, 15));
    } else if (pagamento === 3) {
        console.log (aplicarDesconto(etiqueta, 15));
    } else if (pagamento === 4) {
        console.log (etiqueta);
    } else {
        console.log (aplicarJuros(etiqueta, 10));
    }
}

determinarPreco(1, 100);
determinarPreco(2, 100);
determinarPreco(3, 100);
determinarPreco(4, 100);
determinarPreco(5, 100);

// Possibilidade 2 facilita o calculo ao separar as operaçoes de desconto/juros do valor final e trabalhar com frações.
*/


/* Desafio 4 - Objetos e classes

1 - Gasto de combustivel numa viagem por carro

class Carro {
    modelo;
    marca;
    cor;
    gastomedioCombustivel;

    constructor (modelo, marca, cor, gastomedioCombustivel) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.gastomedioCombustivel = gastomedioCombustivel;
    }

    calcularViagem(distancia, precoCombustivel) {
        return distancia * this.gastomedioCombustivel * precoCombustivel
    }

}

const uno = new Carro ('uno', 'Fiat', 'Azul', 1/12);
gastoUno = uno.calcularViagem(74, 5.79);

const fusca = new Carro ('fusca', 'Volkswagen', 'Preto', 1/7);
gastoFusca = fusca.calcularViagem(74, 6.66);

console.log(gastoUno, gastoFusca);

2 - Atribuindo dados a pessoas

class Pessoa {
    nome;
    idade;
    peso;
    altura;
    profissao;

    constructor (nome, idade, peso, altura, profissao){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
        this.profissao = profissao;
    }

}

const tamires = new Pessoa ('Tamires', 29, 49, 1.59, 'designer')
console.log(tamires)

3 - Calculo de IMC por pessoa


class Pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura){
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
        return this.peso / (this.altura * this. altura)
    }

    declararIMC() {
        const IMC = this.calcularIMC()

        if (IMC < 18.5){
            return 'abaixo do peso';
        } else if (IMC >= 18.5 && IMC < 25) {
            return 'peso normal'
        } else if (IMC >= 25 && IMC < 30) {
            return 'acima do peso'
        } else if (IMC >= 30 && IMC < 40) {
            return 'obeso'
        } else {
            return 'obesidade grave'
        }
        
    }
}

const jose = new Pessoa ('Jose', 70, 1.75)
jose.calcularIMC();
jose.declararIMC();
console.log('Meu nome é Jose e meu IMC indica ' + jose.declararIMC());

const tamires = new Pessoa ('Tamires', 49, 1.58)
tamires.calcularIMC();
tamires.declararIMC();
console.log('Meu nome é Tamires e meu IMC indica ' + tamires.declararIMC());


Desafio 5 - Arrays e estruturas de repetição

Exemplo:


const notas = [];

notas.push(5);
notas.push(9);
notas.push(6);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas [i];
    soma = soma + nota; 
}

const media = soma / notas.length;

console.log(media);



1 - Multiplicando numeros

for (let i = 1; i <= 10; i++) {
    const numero = 2;
    const multiplo = numero * i;
    console.log(multiplo);

}

2 - Verificando lista e imprimindo pares


const numeros = [0,1,2,3,4,5,6,7,8,9,10,11,12];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

Desafio 6 - Importação e exportação de arquivos

Para exportar um arquivo para dentro de outro arquivo, usar module.export = { get, print};

Exemplo:
function get() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

module.export = { get, print }

Para importar, utilizar require(localdoarquivoexportado);

Exemplo: const funcao = require('./outrasfuncoes'); 

*/



