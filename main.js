function onClick(addr){
    $("div.mask").css("display", "none");
    $("div.mask").css("background-color", "white");
    $("div.mask").css("display", "none");
    $("div.mask").fadeIn(2000, function(){
        window.location.href=addr;
    });
}

$(document).ready(function(){
    $("div.mask").delay(1000).fadeOut(2000);
    $("div.button#kaka").click(function(){
        onClick("https://kaka.wetofu.top");
    });
    $("div.button#tonychyi").click(function(){
        onClick("https://tonychyi.wetofu.top");
    });
});
