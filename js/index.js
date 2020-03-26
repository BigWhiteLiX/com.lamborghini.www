$(function () {
    $('.nav-left ul').on('mouseover', function () {
        $(this).children().stop().animate({
            width: '100%'
        }, 200)
    })
    $('.nav-left ul').on('mouseout', function () {
        $(this).children().stop().animate({
            width: 0
        }, 200)
    })
    $('.nav-right-left a').on('mouseover', function () {
        $(this).children().stop().animate({
            width: '100%'
        }, 500)
    })
    $('.nav-right-left a').on('mouseout', function () {
        $(this).children().stop().animate({
            width: 0
        }, 500)
    })
})