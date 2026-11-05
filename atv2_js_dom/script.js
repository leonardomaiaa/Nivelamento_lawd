const botao = document.querySelector('#botao-revelar');
const mensagem = document.querySelector('#mensagem');
const imagem = document.querySelector('#imagem-principal');

let imagemAlternada = false;

botao.addEventListener('click', function() {

    mensagem.hidden = !mensagem.hidden;

    if (mensagem.hidden) {
        botao.textContent = 'Descobrir mais';
    } else {
        botao.textContent = 'Esconder mensagem';
    }

    if (imagemAlternada == false) {
        imagem.src = 'domau/bixofei5.jpg';
        imagemAlternada = true;
    } else {
        imagem.src = 'thisman.jpg';
        imagemAlternada = false;
    }

});
