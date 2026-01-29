// --- Elementos do Header ---
const elemento_imagem = document.getElementById("imagem_clicavel");
const menu_navegacao = document.getElementById("menu_navegacao");

// --- Elementos do Modal ---
const pratos_clicaveis = document.querySelectorAll(".pratos");
const fundo_modal = document.getElementById("fundo_modal");
const botao_fechar = document.getElementById("fechar_modal");
const imagem_exibida_modal = document.getElementById("imagem_modal");

// 1. Funções do Menu (Lógica do Prato que abre/fecha)
function alternar_menu_e_imagem() {
    // Troca a imagem do prato
    const caminho_atual = elemento_imagem.getAttribute("src");
    if (caminho_atual === "prato_fechado-removebg-preview.png") {
        elemento_imagem.setAttribute("src", "prato_aberto-removebg-preview.png");
    } else {
        elemento_imagem.setAttribute("src", "prato_fechado-removebg-preview.png");
    }

    // Alterna o menu
    if (menu_navegacao.style.display === "none" || menu_navegacao.style.display === "") {
        menu_navegacao.style.display = "block";
    } else {
        menu_navegacao.style.display = "none";
    }
}

// 2. Funções do Modal (Abrir ao clicar nos pratos)
pratos_clicaveis.forEach((prato) => {
    prato.addEventListener("click", () => {
        const imagem_do_card = prato.querySelector("img").src;
        imagem_exibida_modal.src = imagem_do_card;
        
        // Exibe o modal centralizado
        fundo_modal.style.display = "flex"; 
    });
});

// 3. Funções para Fechar o Modal
function fechar_tudo() {
    fundo_modal.style.display = "none";
}

// Eventos de clique
elemento_imagem.addEventListener("click", alternar_menu_e_imagem);
botao_fechar.addEventListener("click", fechar_tudo);

// Fechar se clicar no fundo escuro
window.addEventListener("click", (evento) => {
    if (evento.target === fundo_modal) {
        fechar_tudo();
    }
});