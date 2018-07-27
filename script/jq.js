window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


$(document).ready(function() {
    $(".education, .tech, .project, .person, .extra").hide();
    $("#fb").click(function() {
        window.open("https://www.facebook.com/vaisakhnair/");
    });
    $("#ln").click(function() {
        window.open("https://www.linkedin.com/vaisakhnair/");
    });
    $("#ln").click(function() {
        window.open("https://www.twitter.com/vaisakhnair/");
    });


    $("#tabs").tabs();
    $("#accordion").accordion();
    $("#accordion2").accordion();
    $("#resizable").resizable();





    $(".myBtn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 3000);
    });
    $("footer a").click(function() {

    });

    $("#eduLink").click(function() {
        $("#eduLink").css("color", "black");
        $(".education").show();
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".education").offset().top
        }, 2000);
    });
    $("#techLink").click(function() {
        $(".tech").show();
        $("#techLink").css("color", "black");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".tech").offset().top
        }, 2000);
    });
    $("#projectLink").click(function() {
        $(".project").show();
        $("#projectLink").css("color", "black");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".project").offset().top
        }, 2000);
    });
    $("#personLink").click(function() {
        $(".person").show();
        $("#personLink").css("color", "black");
        $([document.documentElement, document.body]).animate({

            scrollTop: $(".person").offset().top
        }, 2000);
    });
    $("#extraLink").click(function() {
        $(".extra").show();
        $("#extraLink").css("color", "black");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".extra").offset().top
        }, 2000);
    });
});