lucide.createIcons();


const botaoMenu =
    document.querySelector("#botaoMenu");

const navegacao =
    document.querySelector("#navegacao");


botaoMenu.addEventListener(
    "click",
    () => {
        const menuAberto =
            navegacao.classList.toggle("aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            menuAberto
        );

        botaoMenu.setAttribute(
            "aria-label",
            menuAberto
                ? "Fechar menu"
                : "Abrir menu"
        );
    }
);


const linksNavegacao =
    navegacao.querySelectorAll("a");


linksNavegacao.forEach((link) => {
    link.addEventListener(
        "click",
        () => {
            navegacao.classList.remove(
                "aberto"
            );

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu"
            );
        }
    );
});