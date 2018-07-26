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
    $(".education").hide();
    $(".tech").hide();
    $(".project").hide();
    $(".person").hide();
    $(".extra").hide();





    $(".myBtn").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 3000);
    });
    $("footer a").hover(function() {
        $("footer a:hover").css("color", "black");
    });

    $("#eduLink").click(function() {
        $("#education").css({ height: "1000px" });
        $(".education").slideToggle(2000);
    });
    $("#techLink").click(function() {
        $("#tech").css({ height: "620px" });
        $(".tech").slideToggle(2000);
    });
    $("#projectLink").click(function() {
        $("#project").css({ height: "720px" });
        $(".project").slideToggle(2000);
    });
    $("#personLink").click(function() {
        $("#person").css({ height: "520px" });
        $(".person").slideToggle(2000);
    });
    $("#extraLink").click(function() {
        $("#extra").css({ height: "520px" });
        $(".extra").slideToggle(2000);
    });
});