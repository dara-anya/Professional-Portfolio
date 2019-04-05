$(document).ready(function(){
    
    $("#name").css("display", "none");
    $("#welcome").css("display", "none");

    setTimeout(function(){
        $("#greeting").css("display", "none");
        $("#name").css("display", "block");
    },1000);

    setTimeout(function(){
        $("#name").css("display", "none");
    },2000);

    setTimeout(function(){
        $("#welcome").fadeIn(2000);
    },3000);

    setInterval(function(){
        $("#welcome").fadeOut(2000);
    },4000);
});