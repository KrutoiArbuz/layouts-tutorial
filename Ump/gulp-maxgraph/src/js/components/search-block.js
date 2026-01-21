
var search_button = document.querySelector('.search__input-mini');
var search_block = document.querySelector('.search-block');
var main_block = document.querySelector('.main');

var search_block_input = document.querySelector('.search-block__input');
var search_block_li = document.querySelector('.search-block__dropdown');
var active = false;




if (search_block_input != null) {
    search_block_input.onchange = function () {

        if (search_block_input.value.length >= 3) {
            search_block_li.classList.add('active');
        } else {
            search_block_li.classList.remove('active');
        }

    };

    search_button.onclick = function () {
        main_block.classList.toggle('active');
        search_block.classList.toggle('active');
        if (active == false) {
            active = true;
        }

    };
    window.addEventListener('resize', function (event) {
        if (this.window.innerWidth >= 730 && active == true) {
            main_block.classList.toggle('active');
            search_block.classList.toggle('active');
            active = false;
        }
    }, true);

}
