//flags:
//g - global (sem a flag global a regex retornará apenas a primeira ocorrência encontrada)
//i - ignore case (não diferencia entre maiúsculas e minúsculas.)

const texto = "Filipe comeu um cachorro-quente";

//procura em texto por F ou ac
console.log(texto.match(/F|ac/));

console.log(texto.match(/f|ac/i));//flag i (ignore case)
console.log(texto.match(/F|ac/g));//flag g (global, encontrará F e ac)

console.log(texto.match(/ac|M/gi));//ambas as flags. Encontrará ac e qualquer m



