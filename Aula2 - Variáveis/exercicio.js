/*
Luiz Otávio tem 30 anos e pesa 84kg.
Tem 1.8 de altura e seu IMC é 25.925925925925924.
Luiz Otávio nasceu em 1991.
*/

const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let imc; //peso / (altura * altura)
let anoNascimento;

// Calcular o imc e o ano de nascimento. 
//Depois formar a frase no primeiro comantário no console

imc = peso / (alturaEmM*alturaEmM);
console.log(imc);

anoNascimento = 2021 - idade;
console.log(anoNascimento);

//montando a frase com concatenação (+)

//comentarei o código para utilizar uma outra forma
/*
console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos e pesa '+ peso +'kg.');
console.log('Tem ' + alturaEmM + ' de altura e seu IMC é ' + imc + '.');
console.log(nome + ' nasceu em ' + anoNascimento + '.');
*/

// montarei ela também em template strings, é considerada a melhor forma e a mais moderna.

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg.`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é ${imc}.`);
console.log(`${nome} nasceu em ${anoNascimento}.`);