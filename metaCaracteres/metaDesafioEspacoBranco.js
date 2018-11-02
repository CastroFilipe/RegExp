const espacos = 'a   b';

console.log(espacos.match(/a...b/));
console.log(espacos.match(/a.+b/));//+ representa uma ou mais ocorrencias do meta ponto
console.log(espacos.match(/a\s\s\sb/));
console.log(espacos.match(/a\s+b/g));
console.log(espacos.match(/a\w+b/g));//\w não representa um espaco apenas caracteres alfanumericos
console.log(espacos.match(/a\s{3}b/g));//\s{3} exatamente três espacos em branco
console.log();

const texto = `ca
r   ro`;

//string 'ca(quebra-linha \n)r(3 espacos \s)ro'
console.log(texto.match(/ca\nr\s\s\sro/g));