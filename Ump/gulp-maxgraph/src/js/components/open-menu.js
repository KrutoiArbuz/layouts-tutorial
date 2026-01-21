var menu_button = document.querySelector('.header__account-button');
var menu = document.querySelector('.header__nav');




if (menu_button != null) {
    menu_button.onclick = function (deffer) {

        menu.classList.toggle('active');
    };
}
