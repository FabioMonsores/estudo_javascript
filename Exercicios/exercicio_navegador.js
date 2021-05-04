//Usar o prompt para escrever dois números, converter os dois números e realizar a soma.

//PROMPT

let num1 = prompt('Digite um número:');

let num2 = prompt('Digite outro número:');

//CONVERTENDO OS PARA NUMBER

num1 = Number(num1);
num2 = Number(num2);

//SOMANDO OS VALORES

let soma = num1 + num2;

alert('A soma entre ' + num1 + ' e ' + num2 + ' é igual a: ' + soma + '.');

//Também pode ser feito com template string:

let multiplicacao = num1 * num2;

alert(`A multiplicação entre ${num1} e ${num2} é igual a: ${multiplicacao}.`);