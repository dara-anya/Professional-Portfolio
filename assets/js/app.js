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

    setTimeout(function(){
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
    $("#resume").css("display", "none");
    
    setTimeout(function(){
        //$("#line1").css("display", "block");
        //$("#line2").css("display", "block");

        $("#header").fadeIn(1000);
        $("#position").fadeIn(2000);
        $("#summary").fadeIn(3000);
        $("#resume").fadeIn(4000);
        $("#headshot").fadeIn(5000);

    },7000);
    setTimeout(function(){
        $("#email").fadeIn(1000);
    },9000);
    setTimeout(function(){
        $("#phone").fadeIn(1000);
    },9500);
    setTimeout(function(){
        $("#location").fadeIn(1000);
    },10000);
    setTimeout(function(){
        $("#linkedin").fadeIn(1000);
    },11000);
    setTimeout(function(){
        $("#github").fadeIn(1000);
    },11500);

    $("#divider1").css("display", "none");
    $("#divider2").css("display", "none");
    $("#projects").css("display", "none");

    setTimeout(function(){
        $("#divider1").css("display", "block");
        $("#projects").fadeIn(1000);
        $("#divider2").css("display", "block");
    },12000);

    $("#crystal-collector").css("display", "none");
    $("#hover1").css("display", "none");
    $("#crystal").css("display", "none");
    $("#crystal-game").css("display", "none");
    $("#crystal-repo").css("display", "none");

    setTimeout(function(){
        $("#crystal-collector").fadeIn(1000);
        $("#hover1").fadeIn(1000);
        $("#crystal").fadeIn(1000);
        $("#crystal-game").fadeIn(1000);
        $("#crystal-repo").fadeIn(1000);
    },13000);

    $("#divider3").css("display", "none");
    $("#liri-bot").css("display", "none");
    $("#hover2").css("display", "none");
    $("#liri").css("display", "none");
    $("#liri-repo").css("display", "none");

    setTimeout(function(){
        $("#divider3").css("display", "block");
        $("#liri-bot").fadeIn(1000);
        $("#hover2").fadeIn(1000);
        $("#liri").fadeIn(1000);
        $("#liri-repo").fadeIn(1000);
    },14000);

    $("#divider4").css("display", "none");
    $("#bamazon").css("display", "none");
    $("#hover3").css("display", "none");
    $("#bamazon-pic").css("display", "none");
    $("#bamazon-repo").css("display", "none");

    setTimeout(function(){
        $("#divider4").css("display", "block");
        $("#bamazon").fadeIn(1000);
        $("#hover3").fadeIn(1000);
        $("#bamazon-pic").fadeIn(1000);
        $("#bamazon-repo").fadeIn(1000);
    },15000);

    $("#divider5").css("display", "none");
    $("#project1").css("display", "none");
    $("#hover4").css("display", "none");
    $("#project1-pic").css("display", "none");
    $("#project1-app").css("display", "none");
    $("#project1-repo").css("display", "none");

    setTimeout(function(){
        $("#divider5").css("display", "block");
        $("#project1").fadeIn(1000);
        $("#hover4").fadeIn(1000);
        $("#project1-pic").fadeIn(1000);
        $("#project1-app").fadeIn(1000);
        $("#project1-repo").fadeIn(1000);
    },16000);

    $("#divider6").css("display", "none");
    $("#project2").css("display", "none");
    $("#hover5").css("display", "none");
    $("#project2-pic").css("display", "none");
    $("#project2-app").css("display", "none");
    $("#project2-repo").css("display", "none");

    setTimeout(function(){
        $("#divider6").css("display", "block");
        $("#project2").fadeIn(1000);
        $("#hover5").fadeIn(1000);
        $("#project2-pic").fadeIn(1000);
        $("#project2-app").fadeIn(1000);
        $("#project2-repo").fadeIn(1000);
    },17000);

    setInterval(function(){
        var $crystal_description = $("#crystal-description");
        var $crystal = $("#crystal");
        if($crystal_description.is(":hover") || $crystal.is(":hover")) {
           $crystal.css("opacity", "0.25");
           $crystal_description.css("display", "block");
        }
        else {
           $crystal.css("opacity", "1");
           $crystal_description.css("display", "none");
        }

        var $liri_description = $("#liri-description");
        var $liri = $("#liri");
        if($liri_description.is(":hover") || $liri.is(":hover")) {
           $liri.css("opacity", "0.25");
           $liri_description.css("display", "block");
        }
        else {
           $liri.css("opacity", "1");
           $liri_description.css("display", "none");
        }

        var $bamazon_description = $("#bamazon-description");
        var $bamazon_pic = $("#bamazon-pic");
        if($bamazon_description.is(":hover") || $bamazon_pic.is(":hover")) {
           $bamazon_pic.css("opacity", "0.25");
           $bamazon_description.css("display", "block");
        }
        else {
           $bamazon_pic.css("opacity", "1");
           $bamazon_description.css("display", "none");
        }
        
        var $project1_description = $("#project1-description");
        var $project1_pic = $("#project1-pic");
        if($project1_description.is(":hover") || $project1_pic.is(":hover")) {
           $project1_pic.css("opacity", "0.25");
           $project1_description.css("display", "block");
        }
        else {
           $project1_pic.css("opacity", "1");
           $project1_description.css("display", "none");
        }

        var $project2_description = $("#project2-description");
        var $project2_pic = $("#project2-pic");
        if($project2_description.is(":hover") || $project2_pic.is(":hover")) {
           $project2_pic.css("opacity", "0.25");
           $project2_description.css("display", "block");
        }
        else {
           $project2_pic.css("opacity", "1");
           $project2_description.css("display", "none");
        }
    }, 0);
});