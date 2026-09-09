"use strict";

const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector(".menu-principal");
const linksMenu = document.querySelectorAll(".menu-principal a");

function fecharMenu() {
    botaoMenu.classList.remove("ativo");
    menuPrincipal.classList.remove("ativo");
    document.body.classList.remove("menu-aberto");

    botaoMenu.setAttribute("aria-expanded", "false");
    botaoMenu.setAttribute("aria-label", "Abrir menu");
}

botaoMenu.addEventListener("click", function () {
    const menuEstaAberto = menuPrincipal.classList.toggle("ativo");

    botaoMenu.classList.toggle("ativo");
    document.body.classList.toggle("menu-aberto", menuEstaAberto);

    botaoMenu.setAttribute("aria-expanded", menuEstaAberto);
    botaoMenu.setAttribute(
        "aria-label",
        menuEstaAberto ? "Fechar menu" : "Abrir menu"
    );
});

linksMenu.forEach(function (link) {
    link.addEventListener("click", fecharMenu);
});

document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
        fecharMenu();
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 900) {
        fecharMenu();
    }
});

/* ==============================
   PERGUNTAS FREQUENTES
============================== */

const perguntasFaq = document.querySelectorAll(".faq__pergunta");

perguntasFaq.forEach(function (pergunta) {
    pergunta.addEventListener("click", function () {
        const itemAtual = pergunta.closest(".faq__item");
        const respostaAtual = itemAtual.querySelector(".faq__resposta");
        const estavaAberta = pergunta.getAttribute("aria-expanded") === "true";

        perguntasFaq.forEach(function (outraPergunta) {
            if (outraPergunta !== pergunta) {
                const outroItem = outraPergunta.closest(".faq__item");
                const outraResposta = outroItem.querySelector(".faq__resposta");

                outroItem.classList.remove("ativo");
                outraPergunta.setAttribute("aria-expanded", "false");
                outraResposta.setAttribute("aria-hidden", "true");
            }
        });

        itemAtual.classList.toggle("ativo", !estavaAberta);

        pergunta.setAttribute(
            "aria-expanded",
            String(!estavaAberta)
        );

        respostaAtual.setAttribute(
            "aria-hidden",
            String(estavaAberta)
        );
    });
});

/* ==============================
   ANO DO RODAPÉ
============================== */

const anoAtual = document.querySelector("#ano-atual");

if (anoAtual) {
    anoAtual.textContent = new Date().getFullYear();
}