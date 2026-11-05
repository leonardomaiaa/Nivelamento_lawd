const prompt = require('prompt-sync')();

let palavra = '';

while (palavra !== '0') {
    palavra = prompt('Digite uma palavra (0 para sair): ');
    palavra = palavra.toLowerCase();

    if (palavra === '0') {
        console.log('Programa encerrado!');
        break;
    }

    const alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const chave = 'artyom';

    // -cifra de vigenere
    let vigenere = '';

    for (let i = 0; i < palavra.length; i++) {
        let letra = alfabeto.indexOf(palavra[i]);
        let chaveAtual = alfabeto.indexOf(chave[i % chave.length]);

        let novaLetra = (letra + chaveAtual) % 26;

        vigenere += alfabeto[novaLetra];
    }

    // -troca o primeiro e o ultimo caractere e inverte
    let segundaEtapa = palavra.split('');

    let primeiro = segundaEtapa[0];

    segundaEtapa[0] = segundaEtapa[segundaEtapa.length - 1];
    segundaEtapa[segundaEtapa.length - 1] = primeiro;

    segundaEtapa.reverse();

    segundaEtapa = segundaEtapa.join('');

    // -conta as vogais e consoantes
    let vogais = 'aeiou';
    let quantidadeVogais = 0;
    let quantidadeConsoantes = 0;

    let consoantes = '';
    let apenasVogais = '';

    for (let i = 0; i < palavra.length; i++) {
        if (vogais.includes(palavra[i])) {
            quantidadeVogais++;
            apenasVogais += palavra[i];
        } else {
            quantidadeConsoantes++;
            consoantes += palavra[i];
        }
    }

    // junta tudo
    let resultado;

    if (quantidadeConsoantes >= quantidadeVogais) {
        resultado = vigenere + segundaEtapa + consoantes;
    } else {
        resultado = vigenere + segundaEtapa + apenasVogais;
    }

    console.log('Palavra criptografada:', resultado);
    console.log('-----------------------------');
}
