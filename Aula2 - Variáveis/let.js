let nome; //declarou a variável

nome = 'João'; //Inicializando a variável
console.log(nome);

//Como variável, varia, posso modificar o valor da variável
nome = 'Fábio';
console.log(nome);

/* Não posso redeclarar uma variável usando LET, por exemplo, se eu novamente declarar a variável let = nome,
 dará uma erro de sintaxe, pois já declarei a variável nome.*/

 //Variáveis precisam ter nome significativos, exemplo:

 let nomeCliente = ('Roberto'); 
 console.log(nomeCliente);

 //Não podemos começar nome de variável com número. Ex: "let 1nome;"

 //Não pode conter traço ou espaço. Ex: "let nome-estado;"

 //Caso precisemos escrever algo composto, usamos o camelCase. Ex: 
 let nomeCompletoDoCliente = "Fábio Monsores";
 console.log(nomeCompletoDoCliente);

 //JavaScript é case-sensitive, minúsculas e maiúsculas importam.

 let idCliente = 'Fábio';

 let idcliente = 'Monsores';

 console.log(idCliente, idcliente);

 let nota = 10;

 let Nota = 8.5;

 console.log(nota, Nota);

//NÃO UTILIZAR VAR, APENAS LET.


 ////////////////////////////////////////////////////////////////////////

// Não podemos criar variáveis com palavras reservadas

//Palavras reservadas
/*
break,	case,	catch,	continue	default
delete	do	else	false	finally
for	function	if	in	instanceof
new	null	return	switch	this
throw	true	try	typeof	var
void	while	with
*/

//Palavras-chave que são reservadas, mas não usadas pelo JavaScript

/*
abstract	boolean	byte	char	class
const	debugger	double	enum	export
extends	final	float	goto	implements
import	int	interface	long	native
package	private	protected	public	short
static	super	synchronized	throws	transient
volatile 
*/

// Para me aprofundar depois: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Lexical_grammar