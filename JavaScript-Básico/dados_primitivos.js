//STRING
const name = 'Fábio'; 
const name1 = "Fábio";
const name2 = `Fábio`;

//NUMBER
const num1 = 10; 
const num2 = 10.52;

//UNDEFINED = Não aponta para local nenhum na memória
let nomeAluno;

//NULL = Não aponta para local nenhum na memória
let sobrenomeAluno = null;

/*
Diferença entre NULL e UNDEFINED
A melhor definição de undefined seria:

Um valor primitivo, que recebemos quando uma variável não teve um valor atribuído previamente, 
em boa parte das vezes é um erro do programador.

E uma boa definição para null é:

Um valor primitivo, que representa uma ausência intencional de um valor, 
ou seja, o programador induz o null no código.

*/

//BOOLEAN (valor lógico)
const boolean = true;
const boolean1 = false;

const alunoAprovado = true;
const alunoReprovado = false;

//Checagem de tipo typeof()

console.log(typeof (num1));//retorna number
console.log(typeof(name1));//retorna string
console.log(typeof(alunoAprovado));//retorna boolean
console.log(typeof(sobrenomeAluno));//retorna object, porém é um bug, null não é object.

//SYMBOL - Não foi falado nesta aula.