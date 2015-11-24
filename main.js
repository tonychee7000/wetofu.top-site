function onClick(addr){
    $("div.mask").css("background-color", "white");
    $("div.mask").fadeIn(2000).delay(3000);
    window.location.href=addr;
}

$(document).ready(function(){
    $("div.mask").delay(2000).fadeOut(2000);
    $("div.button#kaka").click(function(){
        onClick("https://kaka.wetofu.top");
    });
    $("div.button#tonychyi").click(function(){
        onClick("https://tonychyi.wetofu.top");
    });
});
