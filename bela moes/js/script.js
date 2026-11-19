
const perguntas = [
    {
        pergunta: "1. Freud ficou conhecido principalmente por desenvolver qual abordagem?",
        opcoes: [
            "O behaviorismo, baseado no comportamento observável.",
            "A psicanálise, que investiga processos inconscientes e conflitos psíquicos.",
            "O racionalismo, que considera a razão a principal fonte do conhecimento."
        ],
        correta: 1,
        nivel: "INTRODUTÓRIO",
        pontos: 1,
        dica: "Essa abordagem ficou conhecida por investigar desejos, sonhos e conteúdos que não estão conscientes.",
        explicacao: "Freud desenvolveu a psicanálise, uma abordagem que procura compreender a vida psíquica, incluindo desejos, conflitos e processos inconscientes."
    },
    {
        pergunta: "2. Para Freud, por que nem sempre conseguimos explicar nossas próprias atitudes?",
        opcoes: [
            "Porque algumas motivações podem estar ligadas a processos inconscientes.",
            "Porque todas as atitudes são determinadas pela inteligência.",
            "Porque as pessoas não possuem lembranças da infância."
        ],
        correta: 0,
        nivel: "INTRODUTÓRIO",
        pontos: 1,
        dica: "Pense nos conteúdos mentais que influenciam nossas atitudes sem que percebamos diretamente.",
        explicacao: "Na teoria freudiana, parte das motivações e dos conflitos não está disponível à consciência. Por isso, nem sempre sabemos explicar completamente nossas atitudes."
    },
    {
        pergunta: "3. Qual alternativa apresenta corretamente as três instâncias da personalidade na segunda tópica de Freud?",
        opcoes: [
            "Consciente, memória e imaginação.",
            "Corpo, mente e sociedade.",
            "Id, ego e superego."
        ],
        correta: 2,
        nivel: "INTRODUTÓRIO",
        pontos: 1,
        dica: "Uma delas representa os desejos, outra tenta equilibrá-los e a terceira envolve regras e ideais.",
        explicacao: "Freud apresentou o id, o ego e o superego como três instâncias da personalidade. Elas representam diferentes forças que participam dos conflitos psíquicos."
    },
    {
        pergunta: "4. Uma pessoa sente muita vontade de comprar algo caro, mas percebe que não tem dinheiro suficiente. Ela decide esperar e planejar melhor. Qual instância aparece principalmente nessa decisão?",
        opcoes: [
            "O id, porque busca satisfação imediata.",
            "O ego, porque considera a realidade antes de agir.",
            "O superego, porque representa apenas os desejos."
        ],
        correta: 1,
        nivel: "INTERMEDIÁRIO",
        pontos: 2,
        dica: "A instância responsável por lidar com a realidade e tentar equilibrar os desejos é a mesma que ajuda a tomar decisões práticas.",
        explicacao: "O ego tenta equilibrar os desejos do id, as exigências do superego e as condições da realidade. Nesse exemplo, a pessoa considera suas possibilidades antes de agir."
    },
    {
        pergunta: "5. Uma criança quer pegar um brinquedo de outra pessoa imediatamente, sem pensar nas consequências. Qual instância representa melhor esse impulso?",
        opcoes: [
            "O superego.",
            "O ego.",
            "O id."
        ],
        correta: 2,
        nivel: "INTERMEDIÁRIO",
        pontos: 2,
        dica: "É a instância ligada aos impulsos e à busca por satisfação imediata.",
        explicacao: "O id é associado aos impulsos e à busca pelo prazer imediato. Ele não considera, por si só, as regras sociais ou as consequências."
    },
    {
        pergunta: "6. Uma pessoa sente culpa por ter feito algo que considera errado, mesmo sem ninguém descobrir. Qual conceito freudiano ajuda a interpretar essa situação?",
        opcoes: [
            "Superego, relacionado às regras, proibições e ideais internalizados.",
            "Id, responsável por obedecer às regras sociais.",
            "Inconsciente, entendido como a parte que guarda apenas lembranças felizes."
        ],
        correta: 0,
        nivel: "INTERMEDIÁRIO",
        pontos: 2,
        dica: "Pense na instância que representa valores e regras que a pessoa internalizou.",
        explicacao: "O superego está relacionado à consciência moral, às proibições e aos ideais que a pessoa desenvolve a partir de sua relação com a família e a sociedade."
    },
    {
        pergunta: "7. Uma pessoa passa por uma situação muito difícil e começa a agir como se nada tivesse acontecido, evitando reconhecer o que sente. Qual mecanismo de defesa pode estar relacionado a isso?",
        opcoes: [
            "Projeção.",
            "Negação.",
            "Sublimação."
        ],
        correta: 1,
        nivel: "INTERMEDIÁRIO",
        pontos: 2,
        dica: "Esse mecanismo acontece quando alguém tem dificuldade de aceitar uma realidade ou sentimento e age como se aquilo não existisse.",
        explicacao: "A negação é um mecanismo de defesa em que a pessoa evita reconhecer uma realidade dolorosa ou difícil de aceitar. É uma forma de lidar com conflitos e sentimentos."
    },
    {
        pergunta: "8. Uma pessoa sente raiva de alguém, mas não consegue reconhecer esse sentimento. Em vez disso, passa a acreditar que a outra pessoa é quem sente raiva dela. Qual mecanismo de defesa está sendo exemplificado?",
        opcoes: [
            "Projeção.",
            "Repressão.",
            "Sublimação."
        ],
        correta: 0,
        nivel: "DESAFIADOR",
        pontos: 3,
        dica: "O sentimento que a pessoa não reconhece em si mesma é atribuído a outra pessoa.",
        explicacao: "Na projeção, a pessoa atribui a outra alguém sentimentos, desejos ou características que tem dificuldade de reconhecer em si mesma. É um conceito da teoria psicanalítica."
    },
    {
        pergunta: "9. Na teoria freudiana, uma lembrança que não está presente no pensamento neste momento, mas pode ser trazida à consciência quando alguém tenta recordá-la, pertence a qual sistema?",
        opcoes: [
            "Inconsciente.",
            "Pré-consciente.",
            "Id."
        ],
        correta: 1,
        nivel: "DESAFIADOR",
        pontos: 3,
        dica: "É uma espécie de área intermediária: o conteúdo não está sendo pensado agora, mas pode ser lembrado.",
        explicacao: "O pré-consciente reúne conteúdos que não estão na consciência naquele momento, mas podem ser acessados com relativa facilidade, como uma lembrança que surge quando tentamos recordá-la."
    },
    {
        pergunta: "10. Uma pessoa transforma impulsos agressivos em energia para praticar um esporte e melhorar seu desempenho. Qual mecanismo de defesa pode explicar esse processo?",
        opcoes: [
            "Negação.",
            "Projeção.",
            "Sublimação."
        ],
        correta: 2,
        nivel: "DESAFIADOR",
        pontos: 3,
        dica: "Esse mecanismo direciona impulsos para atividades consideradas socialmente aceitas ou produtivas.",
        explicacao: "A sublimação é um mecanismo de defesa em que impulsos são direcionados para atividades socialmente aceitas, como arte, esporte ou trabalho."
    }
];

// ELEMENTOS DA PÁGINA

const iniciar = document.getElementById("iniciar");
const introducao = document.getElementById("introducao");
const areaPerguntas = document.getElementById("area-perguntas");
const resultadoFinal = document.getElementById("resultado-final");

const numeroQuestao = document.getElementById("numero-questao");
const numeroGrande = document.getElementById("numero-grande");
const porcentagem = document.getElementById("porcentagem");
const barra = document.getElementById("barra");

const perguntaTexto = document.getElementById("pergunta-texto");
const opcoesContainer = document.getElementById("opcoes");
const aviso = document.getElementById("aviso");

const anterior = document.getElementById("anterior");
const proximo = document.getElementById("proximo");
const recomecar = document.getElementById("recomecar");

const pontuacao = document.getElementById("pontuacao");
const mensagemFinal = document.getElementById("mensagem-final");
const descricaoFinal = document.getElementById("descricao-final");
const revisao = document.getElementById("revisao");

// EVITA ERROS NA PÁGINA PRINCIPAL DO JORNAL

if (
    iniciar &&
    introducao &&
    areaPerguntas &&
    resultadoFinal &&
    perguntaTexto &&
    opcoesContainer &&
    proximo
) {

    // ESTADO DO QUIZ

    let questaoAtual = 0;
    let respostas = Array(perguntas.length).fill(null);
    let confirmadas = Array(perguntas.length).fill(false);
    let dicasUsadas = Array(perguntas.length).fill(false);

    // ELEMENTOS EXTRAS CRIADOS PELO JAVASCRIPT

    const estatisticas = document.createElement("div");
    estatisticas.className = "estatisticas-quiz";
    estatisticas.innerHTML = `
        <div>
            <strong id="pontos-atuais">0</strong>
            <span>PONTOS</span>
        </div>
        <div>
            <strong id="sequencia-atual">0</strong>
            <span>SEQUÊNCIA</span>
        </div>
        <div>
            <strong id="nivel-atual">INICIAL</strong>
            <span>DIFICULDADE</span>
        </div>
    `;

    const barraProgresso = document.querySelector(".barra-progresso");

    if (barraProgresso) {
        barraProgresso.insertAdjacentElement("afterend", estatisticas);
    }

    const pontosAtuais = estatisticas.querySelector("#pontos-atuais");
    const sequenciaAtual = estatisticas.querySelector("#sequencia-atual");
    const nivelAtual = estatisticas.querySelector("#nivel-atual");

    const areaDica = document.createElement("div");
    areaDica.className = "area-dica";

    const botaoDica = document.createElement("button");
    botaoDica.type = "button";
    botaoDica.className = "botao-dica";
    botaoDica.textContent = "✦ CONSULTAR UMA PISTA";

    const textoDica = document.createElement("p");
    textoDica.className = "texto-dica";
    textoDica.hidden = true;

    areaDica.appendChild(botaoDica);
    areaDica.appendChild(textoDica);

    opcoesContainer.insertAdjacentElement("beforebegin", areaDica);

    const feedback = document.createElement("div");
    feedback.className = "feedback-resposta";
    feedback.hidden = true;

    const tituloFeedback = document.createElement("strong");
    tituloFeedback.className = "titulo-feedback";

    const textoFeedback = document.createElement("p");
    textoFeedback.className = "texto-feedback";

    const pontosFeedback = document.createElement("span");
    pontosFeedback.className = "pontos-feedback";

    feedback.appendChild(tituloFeedback);
    feedback.appendChild(textoFeedback);
    feedback.appendChild(pontosFeedback);

    opcoesContainer.insertAdjacentElement("afterend", feedback);

    // CALCULAR PONTUAÇÃO

    function calcularPontos() {
        let total = 0;

        perguntas.forEach((pergunta, indice) => {
            if (
                confirmadas[indice] &&
                respostas[indice] === pergunta.correta
            ) {
                total += pergunta.pontos;
            }
        });

        return total;
    }

    // CALCULAR SEQUÊNCIA ATUAL

    function calcularSequencia() {
        let sequencia = 0;

        for (let i = 0; i < confirmadas.length; i++) {
            if (
                confirmadas[i] &&
                respostas[i] === perguntas[i].correta
            ) {
                sequencia++;
            } else if (confirmadas[i]) {
                sequencia = 0;
            }
        }

        return sequencia;
    }

    // ATUALIZAR ESTATÍSTICAS

    function atualizarEstatisticas() {
        pontosAtuais.textContent = calcularPontos();
        sequenciaAtual.textContent = calcularSequencia();

        const nivel = perguntas[questaoAtual].nivel;
        nivelAtual.textContent = nivel;
    }

    // INICIAR QUIZ

    iniciar.addEventListener("click", () => {
        questaoAtual = 0;
        respostas = Array(perguntas.length).fill(null);
        confirmadas = Array(perguntas.length).fill(false);
        dicasUsadas = Array(perguntas.length).fill(false);

        introducao.hidden = true;
        resultadoFinal.hidden = true;
        areaPerguntas.hidden = false;

        mostrarPergunta();

        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // MOSTRAR PERGUNTA

    function mostrarPergunta() {
        const pergunta = perguntas[questaoAtual];

        const numero = questaoAtual + 1;
        const progresso = (numero / perguntas.length) * 100;

        numeroQuestao.textContent =
            `QUESTÃO ${String(numero).padStart(2, "0")} DE ${perguntas.length}`;

        numeroGrande.textContent = String(numero).padStart(2, "0");
        porcentagem.textContent = `${Math.round(progresso)}%`;
        barra.style.width = `${progresso}%`;

        perguntaTexto.textContent = pergunta.pergunta;

        opcoesContainer.innerHTML = "";
        aviso.textContent = "";

        // ATUALIZAR DICA

        textoDica.textContent = pergunta.dica;
        textoDica.hidden = !dicasUsadas[questaoAtual];

        botaoDica.hidden = confirmadas[questaoAtual];
        botaoDica.textContent = dicasUsadas[questaoAtual]
            ? "✦ PISTA CONSULTADA"
            : "✦ CONSULTAR UMA PISTA";

        // MOSTRAR OPÇÕES

        pergunta.opcoes.forEach((opcao, indice) => {
            const label = document.createElement("label");
            label.className = "opcao";

            if (respostas[questaoAtual] === indice) {
                label.classList.add("selecionada");
            }

            const letra = document.createElement("span");
            letra.className = "letra-opcao";
            letra.textContent = String.fromCharCode(65 + indice);

            const radio = document.createElement("input");
            radio.type = "radio";
            radio.name = "resposta";
            radio.value = indice;
            radio.checked = respostas[questaoAtual] === indice;
            radio.disabled = confirmadas[questaoAtual];

            radio.addEventListener("change", () => {
                if (confirmadas[questaoAtual]) return;

                respostas[questaoAtual] = indice;

                document.querySelectorAll(".opcao").forEach(item => {
                    item.classList.remove("selecionada");
                });

                label.classList.add("selecionada");
                aviso.textContent = "Resposta registrada. Confirme para descobrir o resultado.";
            });

            label.appendChild(radio);
            label.appendChild(letra);
            label.appendChild(document.createTextNode(opcao));

            opcoesContainer.appendChild(label);
        });

        // FEEDBACK DE QUESTÃO JÁ RESPONDIDA

        feedback.hidden = !confirmadas[questaoAtual];

        if (confirmadas[questaoAtual]) {
            mostrarFeedback();
        }

        anterior.hidden = questaoAtual === 0;

        proximo.textContent = confirmadas[questaoAtual]
            ? (questaoAtual === perguntas.length - 1
                ? "VER RESULTADO FINAL →"
                : "CONTINUAR →")
            : "CONFIRMAR RESPOSTA";

        atualizarEstatisticas();
    }

    // MOSTRAR FEEDBACK

    function mostrarFeedback() {
        const pergunta = perguntas[questaoAtual];
        const acertou = respostas[questaoAtual] === pergunta.correta;

        feedback.hidden = false;
        feedback.classList.remove("feedback-certo", "feedback-errado");

        if (acertou) {
            feedback.classList.add("feedback-certo");
            tituloFeedback.textContent = "✓ RESPOSTA CORRETA!";
            pontosFeedback.textContent = `+${pergunta.pontos} PONTO${pergunta.pontos > 1 ? "S" : ""}`;
        } else {
            feedback.classList.add("feedback-errado");
            tituloFeedback.textContent = "✕ RESPOSTA INCORRETA";
            pontosFeedback.textContent = "NENHUM PONTO NESTA QUESTÃO";
        }

        textoFeedback.textContent = pergunta.explicacao;
    }

    // CONSULTAR DICA

    botaoDica.addEventListener("click", () => {
        dicasUsadas[questaoAtual] = true;
        textoDica.textContent = perguntas[questaoAtual].dica;
        textoDica.hidden = false;
        botaoDica.textContent = "✦ PISTA CONSULTADA";
    });

    // VOLTAR

    anterior.addEventListener("click", () => {
        if (questaoAtual > 0) {
            questaoAtual--;
            mostrarPergunta();
        }
    });

    // CONFIRMAR E AVANÇAR

    proximo.addEventListener("click", () => {

        // PRIMEIRO CLIQUE: CONFIRMA A RESPOSTA

        if (!confirmadas[questaoAtual]) {
            if (respostas[questaoAtual] === null) {
                aviso.textContent = "Selecione uma alternativa antes de continuar.";
                return;
            }

            confirmadas[questaoAtual] = true;

            mostrarFeedback();
            atualizarEstatisticas();

            document.querySelectorAll(".opcao input").forEach(input => {
                input.disabled = true;
            });

            botaoDica.hidden = true;

            proximo.textContent =
                questaoAtual === perguntas.length - 1
                    ? "VER RESULTADO FINAL →"
                    : "CONTINUAR →";

            aviso.textContent = "Resposta confirmada. Leia a explicação antes de avançar.";

            return;
        }

        // SEGUNDO CLIQUE: AVANÇA

        if (questaoAtual < perguntas.length - 1) {
            questaoAtual++;
            mostrarPergunta();
        } else {
            finalizarQuiz();
        }
    });

    // FINALIZAR QUIZ

    function finalizarQuiz() {
        const pontos = calcularPontos();
        const totalPossivel = perguntas.reduce(
            (total, pergunta) => total + pergunta.pontos,
            0
        );

        areaPerguntas.hidden = true;
        resultadoFinal.hidden = false;

        pontuacao.textContent = `${pontos}/${totalPossivel}`;

        if (pontos >= 18) {
            mensagemFinal.textContent = "Uma mente extraordinária!";
            descricaoFinal.textContent =
                "Impressionante! Você conseguiu interpretar conceitos importantes da psicanálise e demonstrou um excelente domínio do assunto.";
        } else if (pontos >= 14) {
            mensagemFinal.textContent = "Investigação brilhante!";
            descricaoFinal.textContent =
                "Muito bem! Você compreendeu boa parte das ideias de Freud e conseguiu resolver questões desafiadoras.";
        } else if (pontos >= 9) {
            mensagemFinal.textContent = "O mistério está sendo revelado!";
            descricaoFinal.textContent =
                "Você já conhece conceitos importantes, mas ainda pode aprofundar seu entendimento. Leia as explicações da revisão.";
        } else {
            mensagemFinal.textContent = "O arquivo ainda guarda segredos!";
            descricaoFinal.textContent =
                "Não desanime! A psicanálise tem conceitos complexos. Use a revisão para aprender e tente novamente.";
        }

        mostrarRevisao();

        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // REVISÃO DAS RESPOSTAS

    function mostrarRevisao() {
        revisao.innerHTML = "<h3>RELATÓRIO DAS RESPOSTAS</h3>";

        perguntas.forEach((pergunta, indice) => {
            const acertou = respostas[indice] === pergunta.correta;

            const bloco = document.createElement("div");
            bloco.className = acertou
                ? "item-revisao certo"
                : "item-revisao errado";

            const titulo = document.createElement("strong");
            titulo.textContent =
                `${acertou ? "✓" : "✕"} ${pergunta.pergunta}`;

            const respostaDada = document.createElement("p");
            respostaDada.textContent =
                "Sua resposta: " +
                (respostas[indice] !== null
                    ? pergunta.opcoes[respostas[indice]]
                    : "Não respondida");

            const respostaCorreta = document.createElement("p");
            respostaCorreta.textContent =
                "Resposta correta: " + pergunta.opcoes[pergunta.correta];

            const explicacao = document.createElement("p");
            explicacao.textContent = "Análise: " + pergunta.explicacao;

            const dificuldade = document.createElement("p");
            dificuldade.textContent =
                `Dificuldade: ${pergunta.nivel} • Valor: ${pergunta.pontos} ponto${pergunta.pontos > 1 ? "s" : ""}`;

            bloco.appendChild(titulo);
            bloco.appendChild(respostaDada);
            bloco.appendChild(respostaCorreta);
            bloco.appendChild(explicacao);
            bloco.appendChild(dificuldade);

            revisao.appendChild(bloco);
        });
    }

    // RECOMEÇAR

    recomecar.addEventListener("click", () => {
        questaoAtual = 0;
        respostas = Array(perguntas.length).fill(null);
        confirmadas = Array(perguntas.length).fill(false);
        dicasUsadas = Array(perguntas.length).fill(false);

        resultadoFinal.hidden = true;
        introducao.hidden = false;
        areaPerguntas.hidden = true;

        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}
