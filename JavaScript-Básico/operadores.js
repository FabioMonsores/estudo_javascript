/*
ARITMÉTICOS
 + (Adição e concatenação)
 - / *
 ** Potenciação
 & Resto da divisão
*/

//ADIÇÃO
const num1 = 5;
const num2 = 10;
console.log(num1+num2); //retorna15

//SUBTRAÇÃO
const num3 = 10;
const num4 = 7;
console.log(num3-num4); //retorna 3

//DIVISÃO
const num5 = 10;
const num6 = 2;
console.log(num5/num6); //retornar 5

//MULTIPLICAÇÃO
const num7 = 9;
const num8 = 8;
console.log(num7*num8); //retornar 72

//POTENCIAÇÃO
const num9 = 10;
const num10= 3;
console.log(num9**num10); //retornar 1000

//RESTO DA DIVISÃO
const num11 = 10;
const num12 = 3;
console.log(num11%num12); //retornar 1



//IMPORTANTE: O JavaScript respeita as leis matemáticas.

//EXEMPLO:
const n1 = 10;
const n2 = 5;
const n3 = 10;
const n4 = 2;

console.log ((n1+n2)*n3); //Vai retornar 150

console.log((n1+n3)/n4);  //Vai retornar 10

console.log((n1+n3)**n4); //Vai retornar 400

console.log((n1+n2)%n3); //Vai retornar 5

//Tudo o que está entre parênteses e resolvido primeiro.
//Em sua ordem temos Parênteses, potenciação, multiplicação, divisão, resto da divisão e por fim, adição e subtração.

// INCREMENTO (++)
//Nunca devo usar CONST, pois dará erro, sempre LET.

let contador = 1;
contador++; //pós-fixado
console.log(contador);

//Também posso escrever da seguinte forma, porém tem diferença:

let contador2 = 2;
++contador2; //pré-fixado
console.log(contador2);

/*
    A diferença entre contador pré-fixado e pós-fixado 
    é que no pré-fixado, ele primeiro faz a conta e depois nos mostra o valor,
    já no pós-fixado ele executa primeiramente a ação e após faz o incremento do valor.
*/

//EXEMPLO:
 //Caso eu execute aparecerá apenas o valor de um, não significa que ele não tenha somado, ele somou, porém não exibiu ainda.
//Ele exibe o valor antigo e depois incrementa.
let soma1 = 5;
console.log(soma1++);
console.log(soma1);

//Agora no pré-incrmento, ele já acrescenta o valor e depois exibe.
let soma2 = 6;
console.log(++soma2);
console.log(soma2);

//DECREMENTO
//Temos também o operador de decremento (--)
// E também temos o pré-decremento e o pós-decremento

let subtracao = 10;
console.log(subtracao--);
console.log(subtracao);

// DICA
//Podemos fazer também de uma forma mais fácil, que não importará se é pós ou pré incremento. 

let adicao = 7;
adicao++;
console.log(adicao);  
// É a melhor forma, pois não haverá diferença se é pós ou pré incremento ou decremento.

//ATRIBUIÇÃO

let contagem = 10;
contagem += 2; //retorna 12
contagem += 2; //retorna 14
contagem += 2; //retorna 16
//contagem *= 2;
//contagem -= 2;
//contagem /= 2;
console.log(contagem);

//NaN - Not a Number - Significa que deu algum erro em minha conta, neste caso, propositalmente temos uma string e um number.
const nan1 = 10;
const nan2 = 'Fábio';
console.log(nan1 * nan2); //Retorna NaN

//Em alguns caso a linguagem JS tentará resolver automaticamente o problema, como é o caso do exemplo abaixo:

const nan3 = 10;  //number
const nan4 = '5'; //string
console.log (nan3 * nan4); //Retorna 50
//Neste momento, por ser um número, a linguagem intende que o número na string pode ser convertido para um inteiro ou flutuante.

//Em outros casos podemos tamber converter a string para um number, em 3 maneiras diferentes.

//1ª Forma - parseInt()

const conversao1 = 10;
const conversao2 = parseInt('5'); //Aqui converso a string '5' para um número inteiro.
//Sempre que usamos os parênteses em JS, estamos pedindo para que alguma ação seja executada. 
//No caso aqui, estamos pedindo que a string '5' seja convertida a um número inteiro. Podemos conferir com typeof()

console.log(typeof(conversao2)); //Retornará number, pois foi convertido pelo parseInt().

console.log(conversao1 + conversao2); 
/*Usarei a adição (+) pois quando tem uma string, ele entende como concatenação, 
isso também serve para ver se a conversão de parseInt() foi eficaz. 
Sendo assim, tem que retornar 15. Caso dê errado, me retornará 105 de forma concatenada.*/


//2ª Forma - parseFloat().

//parseFloat() converterá uma string para um número flutuante(decimal).

const conversao3 = 10;
const conversao4 = parseFloat('5.2');

console.log(conversao3 + conversao4); //Retornará 15.2

//3ª Forma - Number() - O JS tentará converter de forma automática para um inteiro ou float.

const conversao5 = 10;
const conversao6 = Number('5');
const conversao7 = Number('5.2');
console.log(conversao5+conversao6); //Retornará 15
console.log(conversao5+conversao7); //Retornará 15.2
//Caso queira tirar a prova
console.log(typeof(conversao6));
console.log(typeof(conversao7));


