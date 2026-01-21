$(document).ready(() => {
    const $burgerIcon = $('.burger-base');
    const $burgerMenu = $('.base-function');
    let k=0;
    $burgerIcon.click(() => {
        if($burgerMenu.hasClass("active") && k==1){
            k=3
            $burgerMenu.toggleClass('active');
            setTimeout(() => $burgerMenu.toggleClass('nonactive'), 0.005);
            $burgerIcon.text("открыть");
            setTimeout(() => {$burgerMenu.toggleClass('nonactive');k=0;$burgerMenu.toggleClass('flex'); }, 600);

        }else{
            if(k==0){            
                k=1
                $burgerMenu.toggleClass('flex');
                $burgerMenu.toggleClass('active');
                $burgerIcon.text("закрыть");}
        }
    });
  
    $(window).on('resize', function() {
        if ($(window).width()<=700) {
            if($burgerMenu.hasClass("flex")){
                $burgerMenu.toggleClass('flex');
                k=0
                $burgerIcon.text("открыть");
            }
            if($burgerMenu.hasClass("active")){
                $burgerMenu.toggleClass('active');
            }
            if($burgerMenu.hasClass("nonactive")){
                $burgerMenu.toggleClass('nonactive');
            }
        }})


})

