//JavaScript é linguagem de tipagem dinâmica
// string = text || number = número

const name = 'Fabio'; // Sempre indicar de cara o valor da constante.
// Não posso mudar o valor de name, já que é constante

// posso atribuir valores de outra const ou let.

const primeiroNumero = 5;

const segundoNumero = 10;

const resultado = primeiroNumero * segundoNumero; //multiplica 5 por 10

const resultadoDuplicado = resultado * 2; // pega o resultado da multiplicação de 5 por 10 e multiplica por 2

let resultadoTriplicado = resultado * 3; // pega o resultado da multiplicação de 5 e 10 e multiplica por 3

resultadoTriplicado = resultadoTriplicado + 5; //redefine o valor da variável LET, pega a multiplicação do resultado acima e soma com 5.

console.log(resultado);
console.log(resultadoDuplicado);
console.log(resultadoTriplicado);

console.log(typeof primeiroNumero); // com typeof sabemos o tipo de um operando(tipo do valor).
// pelo console vemos que primeirNumero é do tipo number.