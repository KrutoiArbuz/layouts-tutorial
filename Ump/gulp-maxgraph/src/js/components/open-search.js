var search_input = document.querySelector('.search__input');
var search_li = document.querySelector('.search__dropdown');



if (search_input != null) {
    search_input.onchange = function () {

        if (search_input.value.length >= 3) {
            search_li.classList.add('active');
        } else {
            search_li.classList.remove('active');
        }

    };
}
