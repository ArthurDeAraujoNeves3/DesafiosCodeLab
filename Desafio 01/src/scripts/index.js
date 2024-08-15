function curtirPublicacao(id) {

    let publicacao = document.getElementById(id);
    let icone = publicacao.children[0].children[1].children[0]; //postagem > postagemHeader > btnCurtir > icone
    let className = publicacao.className;
    
    if ( className.includes("postagem") && className.includes("postagemCurtida") !== true ) {

        icone.classList.remove("fa-regular");
        icone.classList.add("fa-solid");
        publicacao.classList.remove("postagem");
        publicacao.classList.add("postagemCurtida");

    } else {

        icone.classList.remove("fa-solid");
        icone.classList.add("fa-regular");
        publicacao.classList.remove("postagemCurtida");
        publicacao.classList.add("postagem");

    };

};
