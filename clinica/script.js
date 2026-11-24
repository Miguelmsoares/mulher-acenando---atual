// =====================================================
// 1. MENU DO CELULAR
// =====================================================

// querySelector procura no HTML o PRIMEIRO elemento com aquela classe
const botaoMenu = document.querySelector(".botao-menu");
const menu = document.querySelector(".menu");

// addEventListener = "quando acontecer um clique, rode esta função"
botaoMenu.addEventListener("click", function () {
    // toggle: se a classe "aberto" existe, tira; se não existe, coloca
    menu.classList.toggle("aberto");

    // Avisa leitores de tela se o menu está aberto (true) ou fechado (false)
    const estaAberto = menu.classList.contains("aberto");
    botaoMenu.setAttribute("aria-expanded", estaAberto);
});

// Fecha o menu quando a pessoa clica em um dos links
// querySelectorAll pega TODOS os links, e forEach passa por cada um
document.querySelectorAll(".menu a").forEach(function (link) {
    link.addEventListener("click", function () {
        menu.classList.remove("aberto");
    });
});


// =====================================================
// 2. PERGUNTAS FREQUENTES (abre e fecha)
// =====================================================

document.querySelectorAll(".pergunta-titulo").forEach(function (titulo) {
    titulo.addEventListener("click", function () {
        // parentElement = o elemento "pai" (a div .pergunta)
        titulo.parentElement.classList.toggle("aberta");
    });
});


// =====================================================
// 3. FORMULÁRIO -> WHATSAPP
// =====================================================

// Troque pelo número da clínica: 55 (Brasil) + DDD + número, só dígitos
const numeroWhatsApp = "5561900000000";

const formulario = document.querySelector("#formulario");
const campoNome = document.querySelector("#nome");
const campoServico = document.querySelector("#servico");
const mensagemErro = document.querySelector("#erro");

formulario.addEventListener("submit", function (evento) {
    // Por padrão o formulário recarrega a página. preventDefault impede isso.
    evento.preventDefault();

    // .value = o que a pessoa digitou. .trim() remove espaços sobrando.
    const nome = campoNome.value.trim();
    const servico = campoServico.value;

    // Validação: se algum campo estiver vazio, mostra erro e PARA (return)
    if (nome === "" || servico === "") {
        mensagemErro.textContent = "Preencha seu nome e escolha um serviço.";
        return;
    }
    mensagemErro.textContent = "";

    // Template string (crase): junta texto com variáveis usando ${ }
    const texto = `Olá! Meu nome é ${nome} e gostaria de agendar: ${servico}.`;

    // encodeURIComponent transforma espaços e acentos em formato de link
    const link = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;

    // Abre o WhatsApp em uma nova aba
    window.open(link, "_blank");
});


// =====================================================
// 4. ANO AUTOMÁTICO NO RODAPÉ
// =====================================================

// new Date() pega a data de hoje; getFullYear() devolve só o ano
document.querySelector("#ano").textContent = new Date().getFullYear();
