$(document).ready(function(){
    $(".a").each(function(i){
        $(this).append("<img src='assets/images/carousal/"+(++i)+".jpg' width='100'' height='100'/>");
    })
})
console.log("Aa")