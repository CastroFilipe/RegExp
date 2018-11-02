/* (O ponto) corresponde um único caracter qualquer exceto 
 * os caracteres de nova linha: \n, \r, \u2028 ou \u2029.
 *
 * 
 */

const texto = '1,2,3,4,5,1c21aa2, 1b02 1  2';

//a regex /1.2/g significa 1 seguido por qualquer caractere seguido de 2
console.log(texto.match(/1.2/g));//encontra duas correspondencias.

console.log(texto.match(/1..2/g));//procura por qualquer 1xx2

console.log(texto.match(/1...2/g));//nao encontra nenhuma correspondencia com 1xxx2

console.log(texto.match(/1..,/g));//procura qualquer 1xx,

const notas = '8.5,7.8,8.0,9.5,10.0'

console.log();
console.log(notas.match(/8../g));//notas 8xx
console.log(notas.match(/.\../g));//notas x.x

