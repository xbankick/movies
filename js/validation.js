let nameR = /^[a-zA-z\s]{1,36}$/
let emailR = /^[a-zA-Z0-9]+@[a-z0-9]+\.[a-z]{3}$/
let phoneR = /^(02)?(01)[0125][0-9]{8}$/
let ageR = /^(1[6-9]|[2-9][0-9]|100)$/
let passR = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/

$("#name").on("input", function () {
    let input = $(this);
    let label = input.next()
    let errorDesc = "Invalid Name , only Characters allowed"
    if (!input.val() || nameR.test(input.val())) {
        label.text("")
        input.addClass("border-white")
        input.removeClass("border-danger")
    } else {
        input.removeClass("border-white")
        input.addClass("border-danger")
        label.text(errorDesc)
    }
})
$("#email").on("input", function () {
    let input = $(this);
    let label = input.next()
    let errorDesc = "Invalid Email , try example@domain.com"
    if (!input.val() || emailR.test(input.val())) {
        label.text("")
        input.addClass("border-white")
        input.removeClass("border-danger")
    } else {
        input.removeClass("border-white")
        input.addClass("border-danger")
        label.text(errorDesc)
    }
})
$("#phone").on("input", function () {
    let input = $(this);
    let label = input.next()
    let errorDesc = "Invalid Phone Number"
    if (!input.val() || phoneR.test(input.val())) {
        label.text("")
        input.addClass("border-white")
        input.removeClass("border-danger")
    } else {
        input.removeClass("border-white")
        input.addClass("border-danger")
        label.text(errorDesc)
    }
})
$("#age").on("input", function () {
    let input = $(this);
    let label = input.next()
    let errorDesc = "Your age must be over 16+"
    if (!input.val() || ageR.test(input.val())) {
        label.text("")
        input.addClass("border-white")
        input.removeClass("border-danger")
    } else {
        input.removeClass("border-white")
        input.addClass("border-danger")
        label.text(errorDesc)
    }
})

$("#pass").on("input", function () {
    let input = $(this);
    let label = input.next()

    let errorDesc = "password must contain numbers & letters at least 8 character"
    if (!input.val() || passR.test(input.val())) {
        label.text("")
        input.addClass("border-white")
        input.removeClass("border-danger")
    } else {
        input.removeClass("border-white")
        input.addClass("border-danger")
        label.text(errorDesc)
    }
})
$("#reEnter").on("input", function () {
    let input = $(this);
    let label = input.next()
    let errorDesc = "Password not match"
    let pass = $("#pass").val()
    if (!input.val() || input.val() === pass) {
        label.text("")
        input.addClass("border-white")
        input.removeClass("border-danger")
    } else {
        input.removeClass("border-white")
        input.addClass("border-danger")
        label.text(errorDesc)
    }
})

$(".show-pass").on("click", function () {
    let icon = $(this);
    let input = $("#pass")
    if (icon.hasClass("fa-eye-slash")) {
        // if not shown
        input.attr("type", "text")
        icon.addClass("fa-eye")
        icon.removeClass("fa-eye-slash")
    } else {
        input.attr("type", "password");
        icon.removeClass("fa-eye")
        icon.addClass("fa-eye-slash")
    }
})