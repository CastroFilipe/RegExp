const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e';

const regex9 = new RegExp('9');

console.log('****metodos RegExp****');
//metodo RegExp.test() retorna true se encontrar a correspondencia.
console.log(regex9.test(texto)); //true

//RegExp.exec() retorna um array com informacoes encontradas ou null
console.log(regex9.exec(texto));

//Usando uma string literal
console.log(regex9.exec('ronaldo camisa 9'));

console.log('****metodos String****')
const regexLetras = /[a-f]/g;

console.log(texto.match(regexLetras));

//20. encontra a posição do primeiro elemento
console.log(texto.search(regexLetras));

//string.replace() substitui as correspondencias regexLetras por OI
console.log(texto.replace(regexLetras, 'OI'));
console.log();


console.log('****removendo espacos em branco****');
const texto2 = 'A   Casa é Bela'

console.log(texto2.split(regexLetras));//remove letras de a-f

const regexEspaco = /[\s]/g;
console.log(texto2.split(regexEspaco));//remove os espaços em branco
