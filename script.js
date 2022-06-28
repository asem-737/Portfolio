$(document).ready(function() {
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
    });

    // menu/navbar 
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
    });

    //type
    var typed= new Typed(".typing",{
        strings:["Web Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed= new Typed(".typing-2",{
        strings:["Web Developer", "Designer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
//owl carousel
$('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 2,
            nav: false
        },
        1000:{
            items: 3,
            nav: false
        }
    }
});
});


