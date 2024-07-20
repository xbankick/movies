import { getMovies } from "./movies.js";
function closeNav() {
    let hiddenSideW = $(".nav-tab").outerWidth();
    $(".side-nav-menu").animate({ left: -hiddenSideW }, 500)
    $(".side-toggler").addClass("fa-align-justify");
    $(".side-toggler").removeClass("fa-x");
    $(".links li").animate({ top: 900 }, 500)
}
function openNav() {
    $(".side-nav-menu").animate({ left: 0 }, 500)
    $(".side-toggler").removeClass("fa-align-justify");
    $(".side-toggler").addClass("fa-x");

    let duration = 500;
    for (let i = 0; i < 6; i++) {
        $(".links li").eq(i).animate({ top: 0 }, duration)
        duration += 100;
    }
}
closeNav()
$(".side-toggler").click(() => {
    if ($(".side-nav-menu").css("left") == "0px") {
        closeNav()
    } else {
        openNav()
    }
})

for (let i = 0; i <= 5; i++) {
    $(".links li").eq(i).hover(
        // in
        () => {
            $(".links li").eq(i).css({ color: "red" })
        },
        // out
        () => {
            $(".links li").eq(i).css({ color: "" })
        })
}
$(".np").on("click", function () {
    getMovies("movie/now_playing");
    $("html, body").animate({
        scrollTop: 0
    });
})
$(".pp").on("click", function () {
    getMovies("movie/popular");
    $("html, body").animate({
        scrollTop: 0
    });
})
$(".tr").on("click", function () {
    getMovies("movie/top_rated");
    $("html, body").animate({
        scrollTop: 0
    });
})
$(".tre").on("click", function () {
    getMovies("trending/movie/day");
    $("html, body").animate({
        scrollTop: 0
    });
})
$(".up").on("click", function () {
    getMovies("movie/upcoming");
    $("html, body").animate({
        scrollTop: 0
    });
})
$("#cus").click(() => {
    $("html, body").animate({
        scrollTop: $(document).height()
    });
})