const Menu = document.querySelector(".MenuHamburguer");

function openMenu() {

    if ( Menu.classList[0] == "MenuHamburguer" ) {

        Menu.classList.remove("MenuHamburguer");
        Menu.classList.add("MenuHamburguerOpened");

    } else {

        Menu.classList.remove("MenuHamburguerOpened");
        Menu.classList.add("MenuHamburguer");

    };

};
