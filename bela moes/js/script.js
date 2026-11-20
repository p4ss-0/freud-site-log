
// ============================================
// THE FREUD GAZETTE
// Quiz com salvamento local (sem banco de dados)
// ============================================

const perguntas = [
    {
        pergunta: "Em que ano Sigmund Freud nasceu?",
        opcoes: ["1846", "1856", "1865", "1872"],
        correta: 1,
        explicacao: "Sigmund Freud nasceu em 6 de maio de 1856, na cidade de Freiberg."
    },
    {
        pergunta: "Qual é considerada uma das principais contribuições de Freud para a Psicologia?",
        opcoes: [
            "A teoria da evolução",
            "A criação da psicanálise",
            "A teoria da relatividade",
            "O behaviorismo"
        ],
        correta: 1,
        explicacao: "Freud desenvolveu a psicanálise, uma abordagem que investiga processos inconscientes."
    },
    {
        pergunta: "Qual destas alternativas representa a estrutura da personalidade proposta por Freud?",
        opcoes: [
            "Memória, atenção e percepção",
            "Id, ego e superego",
            "Consciência, inteligência e emoção",
            "Instinto, razão e memória"
        ],
        correta: 1,
        explicacao: "Freud descreveu a personalidade por meio de três instâncias: id, ego e superego."
    },
    {
        pergunta: "O que representa o id na teoria freudiana?",
        opcoes: [
            "A parte responsável pelas regras sociais",
            "A parte que busca satisfazer desejos e impulsos",
            "A parte responsável pela lógica",
            "A consciência moral"
        ],
        correta: 1,
        explicacao: "O id está ligado aos impulsos e busca a satisfação imediata dos desejos."
    },
    {
        pergunta: "Qual é a principal função do ego?",
        opcoes: [
            "Ignorar a realidade",
            "Controlar todas as emoções",
            "Equilibrar os desejos do id com a realidade",
            "Criar regras morais"
        ],
        correta: 2,
        explicacao: "O ego tenta equilibrar os desejos do id, as exigências do superego e a realidade."
    },
    {
        pergunta: "O que é o superego?",
        opcoes: [
            "A parte ligada às regras, valores e ideais",
            "A parte que representa os sonhos",
            "A parte responsável pelos instintos",
            "A parte que guarda todas as lembranças"
        ],
        correta: 0,
        explicacao: "O superego representa valores, regras e padrões morais que a pessoa internaliza."
    },
    {
        pergunta: "O que Freud buscava investigar por meio da interpretação dos sonhos?",
        opcoes: [
            "A previsão do futuro",
            "O funcionamento dos músculos",
            "Desejos e conteúdos inconscientes",
            "A inteligência matemática"
        ],
        correta: 2,
        explicacao: "Freud considerava os sonhos uma via de acesso a conteúdos e desejos inconscientes."
    },
    {
        pergunta: "Qual mecanismo de defesa está relacionado a afastar da consciência pensamentos ou lembranças dolorosas?",
        opcoes: [
            "Sublimação",
            "Repressão",
            "Projeção",
            "Negação"
        ],
        correta: 1,
        explicacao: "A repressão é um mecanismo pelo qual conteúdos considerados difíceis são mantidos fora da consciência."
    },
    {
        pergunta: "Na teoria freudiana, o que é a sublimação?",
        opcoes: [
            "Transformar impulsos em atividades socialmente aceitas",
            "Esquecer completamente a infância",
            "Evitar qualquer tipo de emoção",
            "Repetir comportamentos sem perceber"
        ],
        correta: 0,
        explicacao: "A sublimação direciona impulsos para atividades consideradas socialmente construtivas."
    },
    {
        pergunta: "Qual é o nome da obra publicada por Freud em 1900, considerada um marco da psicanálise?",
        opcoes: [
            "O Mal-Estar na Civilização",
            "Totem e Tabu",
            "A Interpretação dos Sonhos",
            "Além do Princípio do Prazer"
        ],
        correta: 2,
        explicacao: "A Interpretação dos Sonhos foi publicada em 1900 e é uma das obras mais importantes de Freud."
    }
];

// Pontuação: 1 + 1 + 1 + 2 + 2 + 2 + 2 + 3 + 3 + 3 = 20
const pontosPorQuestao = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3];

// ============================================
// ELEMENTOS DO HTML
// ============================================

const introducao = document.getElementById("introducao");
const areaPerguntas = document.getElementById("area-perguntas");
const resultadoFinal = document.getElementById("resultado-final");

const botaoIniciar = document.getElementById("iniciar");
const botaoProximo = document.getElementById("proximo");
const botaoAnterior = document.getElementById("anterior");
const botaoRecomecar = document.getElementById("recomecar");

const modalidadeInput = document.getElementById("modalidade");
const camposJogadores = document.getElementById("campos-jogadores");

const perguntaTexto = document.getElementById("pergunta-texto");
const opcoesContainer = document.getElementById("opcoes");
const aviso = document.getElementById("aviso");

const numeroQuestao = document.getElementById("numero-questao");
const numeroGrande = document.getElementById("numero-grande");
const porcentagem = document.getElementById("porcentagem");
const barra = document.getElementById("barra");

const pontuacaoElemento = document.getElementById("pontuacao");
const mensagemFinal = document.getElementById("mensagem-final");
const descricaoFinal = document.getElementById("descricao-final");
const revisao = document.getElementById("revisao");

const horarioInicio = document.getElementById("horario-inicio");
const horarioFim = document.getElementById("horario-fim");
const registroInicio = document.getElementById("registro-inicio");
const statusSalvamento = document.getElementById("status-salvamento");

// ============================================
// VARIÁVEIS DO QUIZ
// ============================================

let questaoAtual = 0;
let respostas = new Array(perguntas.length).fill(null);
let inicioPartida = null;
let partidaFinalizada = false;
let nomeJogadores = [];
let modalidadeAtual = "Solo";

// ============================================
// DATA E HORÁRIO
// ============================================

function dataHoraAtual() {
    return new Date().toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

function dataBrasilia() {
    return new Intl.DateTimeFormat("en-CA", {
        timeZone: "America/Sao_Paulo",
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    }).format(new Date());
}

// ============================================
// IDENTIFICAÇÃO DOS JOGADORES
// ============================================

function atualizarCamposJogadores() {
    const modalidade = modalidadeInput.value;

    camposJogadores.innerHTML = "";

    if (modalidade === "Solo") {
        criarCampo("jogador1", "NOME DO JOGADOR", "Digite seu nome");
    }

    if (modalidade === "Dupla") {
        criarCampo("jogador1", "NOME DO PRIMEIRO JOGADOR", "Nome do primeiro jogador");
        criarCampo("jogador2", "NOME DO SEGUNDO JOGADOR", "Nome do segundo jogador");
    }

    if (modalidade === "Equipe") {
        criarCampo("jogador1", "NOME DA EQUIPE", "Digite o nome da equipe");
        criarCampo("jogador2", "INTEGRANTES (OPCIONAL)", "Ex.: Ana, Pedro e Lucas");
    }
}

function criarCampo(id, texto, placeholder) {
    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = texto;

    const input = document.createElement("input");
    input.id = id;
    input.type = "text";
    input.maxLength = 100;
    input.placeholder = placeholder;

    camposJogadores.appendChild(label);
    camposJogadores.appendChild(input);
}

modalidadeInput.addEventListener("change", atualizarCamposJogadores);

// ============================================
// COMEÇAR PARTIDA
// ============================================

function iniciarQuiz() {
    modalidadeAtual = modalidadeInput.value;

    const primeiro = document.getElementById("jogador1")?.value.trim();

    if (!primeiro) {
        alert("Por favor, informe o nome do jogador ou da equipe.");
        return;
    }

    nomeJogadores = [primeiro];

    if (modalidadeAtual === "Dupla") {
        const segundo = document.getElementById("jogador2").value.trim();

        if (!segundo) {
            alert("Informe o nome dos dois jogadores.");
            return;
        }

        nomeJogadores.push(segundo);
    }

    if (modalidadeAtual === "Equipe") {
        const integrantes = document.getElementById("jogador2").value.trim();

        if (integrantes) {
            nomeJogadores.push(integrantes);
        }
    }

    questaoAtual = 0;
    respostas = new Array(perguntas.length).fill(null);
    inicioPartida = new Date();
    partidaFinalizada = false;

    introducao.hidden = true;
    resultadoFinal.hidden = true;
    areaPerguntas.hidden = false;

    registroInicio.textContent = "SESSÃO COMEÇADA " + dataHoraAtual();

    renderizarPergunta();
}

// ============================================
// MOSTRAR PERGUNTA
// ============================================

function renderizarPergunta() {
    const pergunta = perguntas[questaoAtual];

    perguntaTexto.textContent = pergunta.pergunta;

    numeroQuestao.textContent =
        `QUESTÃO ${String(questaoAtual + 1).padStart(2, "0")} DE ${perguntas.length}`;

    numeroGrande.textContent =
        String(questaoAtual + 1).padStart(2, "0");

    const progresso = ((questaoAtual + 1) / perguntas.length) * 100;

    porcentagem.textContent = `${progresso}%`;
    barra.style.width = `${progresso}%`;

    opcoesContainer.innerHTML = "";
    aviso.textContent = "";

    pergunta.opcoes.forEach((opcao, indice) => {
        const label = document.createElement("label");
        label.className = "opcao";

        if (respostas[questaoAtual] === indice) {
            label.classList.add("selecionada");
        }

        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "resposta";
        radio.value = indice;
        radio.checked = respostas[questaoAtual] === indice;

        radio.addEventListener("change", () => {
            respostas[questaoAtual] = indice;

            document.querySelectorAll(".opcao").forEach(item => {
                item.classList.remove("selecionada");
            });

            label.classList.add("selecionada");
        });

        const texto = document.createElement("span");
        texto.textContent = opcao;

        label.appendChild(radio);
        label.appendChild(texto);

        opcoesContainer.appendChild(label);
    });

    botaoAnterior.hidden = questaoAtual === 0;

    botaoProximo.textContent =
        questaoAtual === perguntas.length - 1
            ? "FINALIZAR INVESTIGAÇÃO"
            : "CONFIRMAR RESPOSTA →";
}

// ============================================
// NAVEGAÇÃO ENTRE PERGUNTAS
// ============================================

function proximaQuestao() {
    if (respostas[questaoAtual] === null) {
        aviso.textContent = "Selecione uma alternativa antes de continuar.";
        return;
    }

    if (questaoAtual < perguntas.length - 1) {
        questaoAtual++;
        renderizarPergunta();
    } else {
        finalizarQuiz();
    }
}

function questaoAnterior() {
    if (questaoAtual > 0) {
        questaoAtual--;
        renderizarPergunta();
    }
}

// ============================================
// CALCULAR PONTUAÇÃO
// ============================================

function calcularPontuacao() {
    let pontos = 0;
    let acertos = 0;

    perguntas.forEach((pergunta, indice) => {
        if (respostas[indice] === pergunta.correta) {
            pontos += pontosPorQuestao[indice];
            acertos++;
        }
    });

    return { pontos, acertos };
}

// ============================================
// SALVAR PARTIDAS NO NAVEGADOR
// ============================================

function obterPartidas() {
    try {
        return JSON.parse(localStorage.getItem("freudPartidas")) || [];
    } catch (erro) {
        console.error("Erro ao ler partidas:", erro);
        return [];
    }
}

function salvarPartidas(partidas) {
    localStorage.setItem("freudPartidas", JSON.stringify(partidas));
}

function salvarPartida(partida) {
    try {
        const partidas = obterPartidas();

        partidas.push(partida);

        salvarPartidas(partidas);

        statusSalvamento.textContent =
            "✓ INVESTIGAÇÃO REGISTRADA COM SUCESSO.";

        return true;
    } catch (erro) {
        console.error("Erro ao salvar:", erro);

        statusSalvamento.textContent =
            "Não foi possível salvar neste navegador.";

        return false;
    }
}

// ============================================
// FINALIZAR QUIZ
// ============================================

function finalizarQuiz() {
    if (partidaFinalizada) return;

    partidaFinalizada = true;

    const resultado = calcularPontuacao();
    const fimPartida = new Date();

    const nomePrincipal = nomeJogadores[0];

    const partida = {
        nome: nomePrincipal,
        modalidade: modalidadeAtual,
        integrantes: nomeJogadores,
        pontos: resultado.pontos,
        acertos: resultado.acertos,
        totalQuestoes: perguntas.length,
        inicio: inicioPartida.toISOString(),
        fim: fimPartida.toISOString(),
        dataRanking: dataBrasilia(),
        respostas: respostas
    };

    pontuacaoElemento.textContent = `${resultado.pontos}/20`;

    if (resultado.pontos >= 17) {
        mensagemFinal.textContent = "Uma mente extraordinária!";
        descricaoFinal.textContent =
            "Seu conhecimento sobre Freud e a psicanálise é impressionante.";
    } else if (resultado.pontos >= 11) {
        mensagemFinal.textContent = "Uma boa investigação!";
        descricaoFinal.textContent =
            "Você demonstrou conhecer bastante sobre o pensamento freudiano.";
    } else if (resultado.pontos >= 6) {
        mensagemFinal.textContent = "Há muito a descobrir.";
        descricaoFinal.textContent =
            "Sua investigação foi iniciada, mas ainda existem mistérios a desvendar.";
    } else {
        mensagemFinal.textContent = "O inconsciente ainda guarda mistérios.";
        descricaoFinal.textContent =
            "Continue estudando e tente novamente. Cada investigação é uma oportunidade de aprender.";
    }

    horarioInicio.textContent = "SESSÃO COMEÇADA: " + formatarData(inicioPartida);
    horarioFim.textContent = "SESSÃO ENCERRADA: " + formatarData(fimPartida);

    statusSalvamento.textContent = "SALVANDO RESULTADO...";

    const salvou = salvarPartida(partida);

    montarRevisao();

    areaPerguntas.hidden = true;
    resultadoFinal.hidden = false;

    if (salvou) {
        carregarRanking();
        carregarHistorico();
    }
}

// ============================================
// FORMATAR DATA
// ============================================

function formatarData(data) {
    return new Date(data).toLocaleString("pt-BR", {
        timeZone: "America/Sao_Paulo",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });
}

// ============================================
// REVISÃO DAS RESPOSTAS
// ============================================

function montarRevisao() {
    revisao.innerHTML = "";

    perguntas.forEach((pergunta, indice) => {
        const acertou = respostas[indice] === pergunta.correta;

        const item = document.createElement("div");
        item.className = "item-revisao";

        const titulo = document.createElement("strong");
        titulo.textContent =
            `${indice + 1}. ${pergunta.pergunta}`;

        const resultado = document.createElement("p");
        resultado.textContent = acertou
            ? "✓ Resposta correta"
            : "✗ Resposta incorreta";

        const respostaCorreta = document.createElement("p");
        respostaCorreta.textContent =
            "Resposta correta: " + pergunta.opcoes[pergunta.correta];

        const explicacao = document.createElement("p");
        explicacao.textContent = pergunta.explicacao;

        item.appendChild(titulo);
        item.appendChild(resultado);

        if (!acertou) {
            item.appendChild(respostaCorreta);
        }

        item.appendChild(explicacao);
        revisao.appendChild(item);
    });
}

// ============================================
// RANKING DIÁRIO
// ============================================

function carregarRanking() {
    const lista = document.getElementById("lista-ranking");
    const dataElemento = document.getElementById("data-ranking");

    if (!lista) return;

    lista.innerHTML = "";

    const hoje = dataBrasilia();

    dataElemento.textContent =
        "CLASSIFICAÇÃO DE " + new Date().toLocaleDateString("pt-BR", {
            timeZone: "America/Sao_Paulo"
        });

    const partidasDoDia = obterPartidas()
        .filter(partida => partida.dataRanking === hoje)
        .sort((a, b) => b.pontos - a.pontos);

    if (partidasDoDia.length === 0) {
        mostrarVazio(lista, "Nenhuma investigação registrada hoje.");
        return;
    }

    partidasDoDia.forEach((partida, indice) => {
        const item = document.createElement("div");
        item.className = "registro-item";

        const nome = document.createElement("span");
        nome.textContent =
            `${indice + 1}º — ${partida.nome} (${partida.modalidade})`;

        const pontos = document.createElement("strong");
        pontos.textContent = `${partida.pontos}/20 pontos`;

        item.appendChild(nome);
        item.appendChild(pontos);
        lista.appendChild(item);
    });
}

// ============================================
// HISTÓRICO DE PARTIDAS
// ============================================

function carregarHistorico() {
    const lista = document.getElementById("lista-historico");

    if (!lista) return;

    lista.innerHTML = "";

    const partidas = obterPartidas().slice().reverse();

    if (partidas.length === 0) {
        mostrarVazio(lista, "Ainda não existem partidas registradas.");
        return;
    }

    partidas.forEach(partida => {
        const item = document.createElement("div");
        item.className = "registro-item";

        const informacoes = document.createElement("div");

        const nome = document.createElement("strong");
        nome.textContent = partida.nome;

        const detalhes = document.createElement("div");
        detalhes.textContent =
            `${partida.modalidade} • ${partida.acertos}/${partida.totalQuestoes} acertos`;

        const data = document.createElement("div");
        data.textContent = partida.fim
            ? formatarData(partida.fim)
            : "Data não disponível";

        informacoes.appendChild(nome);
        informacoes.appendChild(detalhes);
        informacoes.appendChild(data);

        const pontos = document.createElement("strong");
        pontos.textContent = `${partida.pontos}/20`;

        item.appendChild(informacoes);
        item.appendChild(pontos);

        lista.appendChild(item);
    });
}

function mostrarVazio(elemento, mensagem) {
    const texto = document.createElement("p");
    texto.className = "registro-vazio";
    texto.textContent = mensagem;
    elemento.appendChild(texto);
}

// ============================================
// ABAS DE NAVEGAÇÃO
// ============================================

function abrirAba(nome) {
    document.querySelectorAll(".aba").forEach(botao => {
        botao.classList.toggle(
            "ativa",
            botao.dataset.aba === nome
        );
    });

    document.querySelectorAll(".aba-conteudo").forEach(pagina => {
        pagina.hidden = pagina.id !== `pagina-${nome}`;
        pagina.classList.toggle(
            "ativa",
            pagina.id === `pagina-${nome}`
        );
    });

    if (nome === "ranking") {
        carregarRanking();
    }

    if (nome === "historico") {
        carregarHistorico();
    }
}

document.querySelectorAll(".aba").forEach(botao => {
    botao.addEventListener("click", () => {
        abrirAba(botao.dataset.aba);
    });
});

// ============================================
// NOVA INVESTIGAÇÃO
// ============================================

function recomecarQuiz() {
    questaoAtual = 0;
    respostas = new Array(perguntas.length).fill(null);
    inicioPartida = null;
    partidaFinalizada = false;

    resultadoFinal.hidden = true;
    areaPerguntas.hidden = true;
    introducao.hidden = false;

    abrirAba("inicio");
}

// ============================================
// EVENTOS DOS BOTÕES
// ============================================

botaoIniciar.addEventListener("click", iniciarQuiz);
botaoProximo.addEventListener("click", proximaQuestao);
botaoAnterior.addEventListener("click", questaoAnterior);
botaoRecomecar.addEventListener("click", recomecarQuiz);

// ============================================
// INICIALIZAÇÃO
// ============================================

atualizarCamposJogadores();
carregarRanking();
carregarHistorico();
