const questao = document.querySelector('.questao');
const respostas = document.querySelector('.respostas');
const spnQtd = document.querySelector('.spnQtd');
const textoFinal = document.querySelector('#textFinal');
const conteudo = document.querySelector('.content');
const conteudoFinal = document.querySelector('.final');
const btnReiniciar = document.querySelector('#btnReiniciar');

import questoes from './questoes.js';

let quizAtual = 0;
let questaoCorreta = 0;

btnReiniciar.onclick = () => {
    conteudo.style.display = 'flex';
    conteudoFinal.style.display = 'none';

    quizAtual = 0;
    questaoCorreta = 0;
    carregarQuestao();
}

function proximaQuestao(e) {
    if (e.target.getAttribute('data-correct') === 'true') {
        questaoCorreta++;
    }

    if (quizAtual < questoes.length - 1) {
        quizAtual++;
        carregarQuestao();
    } else {
        finalizar();
    }
}

function finalizar() {
    textoFinal.innerHTML = `Você acertou ${questaoCorreta} de ${questoes.length}`;
    conteudo.style.display = 'none';
    conteudoFinal.style.display = 'flex';
}

function carregarQuestao() {
    spnQtd.innerHTML = `${quizAtual + 1}/${questoes.length}`;
    const item = questoes[quizAtual];
    respostas.innerHTML = "";
    questao.innerHTML = item.questao;

    item.resposta.forEach((resposta) => {
        const div = document.createElement('div');

        div.innerHTML = `
            <button class="resposta" data-correct="${resposta.correto}">
                ${resposta.opcao}
            </button>
        `;

        respostas.appendChild(div);
    });

    document.querySelectorAll(".resposta").forEach((item) => {
        item.addEventListener('click', proximaQuestao);
    });
}

carregarQuestao();