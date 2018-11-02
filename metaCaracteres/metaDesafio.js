const texto = 'lista de arquivos mp3: rock.mp3, funk.mp3,podcast.mp3, samba.mp3 ';

console.log(texto.match(/\.mp3/g));

// \w Corresponde qualquer caractere alfanumérico 
// + é um quantificador e corresponde 1 ou mais vezes o \w
console.log(texto.match(/\w+\.mp3/g));