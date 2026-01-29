const eletemento_imagem = document.getElementById("imagem_clicavel");

function trocar_imagem(){
    const caminho_atual = eletemento_imagem.getAttribute("src");
    if(caminho_atual === "prato_fechado-removebg-preview.png"){
        eletemento_imagem.setAttribute("src", "prato_aberto-removebg-preview.png");
    } else {
        eletemento_imagem.setAttribute("src", "prato_fechado-removebg-preview.png");
    }
}
function alternar_menu(){
    const menu_navegacao = document.getElementById("menu_navegacao");
    if(menu_navegacao.style.display === "none" || menu_navegacao.style.display === ""){
        menu_navegacao.style.display = "block";
    } else {
        menu_navegacao.style.display = "none";
    }

}

eletemento_imagem.addEventListener("click", alternar_menu);
eletemento_imagem.addEventListener("click", trocar_imagem);