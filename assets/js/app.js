$(document).ready(function(){

    /****Introduction Sequence****/
    $("#name").css("display", "none");
    $("#welcome").css("display", "none");

    setTimeout(function(){
        $("#greeting").css("display", "none");
        $("#name").css("display", "block");
    },1000);

    setTimeout(function(){
        $("#name").css("display", "none");
    },2500);

    setTimeout(function(){
        $("#welcome").fadeIn(2000);
    },3000);

    setInterval(function(){
        $("#welcome").fadeOut(2000);
    },4000);

    /****Main Sequence****/
    $("#line1").css("display", "none");
    $("#line2").css("display", "none");
    $("#line3").css("display", "none");
    $("#line4").css("display", "none");

    $("#header").css("display", "none");
    $("#position").css("display", "none");
    $("#summary").css("display", "none");
    $("#headshot").css("display", "none");

    $("#email").css("display", "none");
    $("#phone").css("display", "none");
    $("#location").css("display", "none");
    $("#linkedin").css("display", "none");
    $("#github").css("display", "none");
    
    setInterval(function(){
        //$("#line1").css("display", "block");
        //$("#line2").css("display", "block");

        $("#header").fadeIn(1000);
        $("#position").fadeIn(2000);
        $("#summary").fadeIn(3000);
        $("#headshot").fadeIn(4000);
    },7000);
    setInterval(function(){
        $("#email").fadeIn(1000);
    },9500);
    setInterval(function(){
        $("#phone").fadeIn(1000);
    },10000);
    setInterval(function(){
        $("#location").fadeIn(1000);
    },10500);
    setInterval(function(){
        $("#linkedin").fadeIn(1000);
    },11000);
    setInterval(function(){
        $("#github").fadeIn(1000);
    },11500);

});