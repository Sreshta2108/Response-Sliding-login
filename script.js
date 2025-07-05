$(document).ready(function () {
    $("#RightToLeft").on("click", function () {
        $(".top").animate({
            left: "0%"
        }, 500);
    });

    $("#LeftToRight").on("click", function () {
        $(".top").animate({
            left: "-100%"
        }, 500);
    });
});
