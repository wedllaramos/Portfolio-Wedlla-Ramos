const menuToggle = document.querySelector(".menu-toggle");
const listHeader = document.querySelector(".list-header");
const linksMenu = document.querySelectorAll(".content-header a");

if (menuToggle && listHeader) {
    menuToggle.addEventListener("click", () => {
        const aberto = listHeader.classList.toggle("ativo");
        menuToggle.setAttribute("aria-expanded", aberto);

        const icone = menuToggle.querySelector("i");
        if (icone) {
            icone.classList.toggle("fa-bars", !aberto);
            icone.classList.toggle("fa-times", aberto);
        }
    });

    linksMenu.forEach((link) => {
        link.addEventListener("click", () => {
            listHeader.classList.remove("ativo");
            menuToggle.setAttribute("aria-expanded", "false");

            const icone = menuToggle.querySelector("i");
            if (icone) {
                icone.classList.add("fa-bars");
                icone.classList.remove("fa-times");
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const elemento = document.getElementById("texto-digitando");
    const frase = "Eu sou Engenheira de Software";
    let indice = 0;

    function digitar() {
        if (indice < frase.length) {
            elemento.textContent += frase.charAt(indice);
            indice++;
            setTimeout(digitar, 80); // velocidade em ms (ajuste se quiser mais rápido ou mais lento)
        }
    }

    digitar();
});

const cardsProjetos = document.querySelectorAll(".container-projetos .projeto");

if (cardsProjetos.length > 0) {
    const observadorProjetos = new IntersectionObserver(
        (entradas, observer) => {
            entradas.forEach((entrada) => {
                if (entrada.isIntersecting) {
                    entrada.target.classList.add("visivel");
                    observer.unobserve(entrada.target); // anima uma vez e mantém visível
                }
            });
        },
        {
            threshold: 0.2 // dispara quando 20% do card estiver visível na tela
        }
    );

    cardsProjetos.forEach((card) => observadorProjetos.observe(card));
}