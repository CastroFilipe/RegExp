/*metas: .  ?  *  +  -  ^  $  |  [ ]  { }  ( ) \  :
 * o escape '\' é usado para indicar que um meta deve ser usado como literal e
 * não como metacaractere.
 */

 const texto = '1,2,3,4,5, a.b c!@d?';

// barra de scape \ indica que o ponto não será usado como metacaractere e sim como o seu valor literal.
const regexPonto = /\./; 

console.log(regexPonto.test(texto));//true. encontrou o ponto no texto

//encontrará todos os , ou . ou ? ou ! ou espaço
const regexSimbolos = /,|\.|\?|!| /g;

console.log(texto.split(regexSimbolos));
