/*fetching image*/
$(document).ready(function(){
    $(".a").each(function(i){
        $(this).append("<img src='assets/images/carousal/"+(++i)+".jpg' width='100'' height='100'/>");
    })
})

/*slick slideshow*/
$(document).ready(() => {
    $('#slideshow .slick').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        dots: false,
        prevArrow: false,
        nextArrow: false
    });
})
