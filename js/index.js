$(function () {
    $('.nav-left ul li').on('mouseenter', function () {
        $(this).children().stop().animate({
            width: '100%'
        }, 200)
    })
    $('.nav-left ul li').on('mouseleave', function () {
        $(this).children().stop().animate({
            width: 0
        }, 200)
    })
    $('.nav-right-left a').on('mouseenter', function () {
        $(this).children().stop().animate({
            width: '100%'
        }, 200)
    })
    $('.nav-right-left a').on('mouseleave', function () {
        $(this).children().stop().animate({
            width: 0
        }, 200)
    })
    //顶部c车型菜单栏菜单
    $(".car").on('mouseenter', function () {
        $(this).parent().parent().parent().stop().animate({
            'height': 370
        })
        $('.car-menu').show()
        $('.service-menu').hide()
    })
    //顶部车主服务菜单栏菜单
    $(".service").on('mouseenter', function () {
        $(this).parent().parent().parent().stop().animate({
            'height': 462
        })
        $('.service-menu').show()

        $('.car-menu').hide()
        $('.nav-two').children().hide()
    })
    //赛车运动导航栏效果
    $(".match").on('mouseenter', function () {
        $('.car-menu').hide()
        $('.service-menu').hide()
        $(this).parent().parent().parent().animate({
            'height': 94
        })

    })
    $(".nav-right-left a").on('mouseenter', function () {
        $('.car-menu').hide()
        $('.service-menu').hide()
        $(this).parent().parent().parent().animate({
            'height': 94
        })

    })
    // 当鼠标移入车型一级下拉列表的第一个选项时，二级第一个列表出现,其他二级列表隐藏
    $('.car-menu-one').on('mouseenter', function () {
        $('.car-menu-first').show();
        $('.car-menu-first').siblings().hide();
        $(this).css({
            'opacity': 1
        })
        $('car-menu-first li ').css({
            'opacity': 1
        })
        $(this).siblings().css({
            'opacity': 0.5
        })
        $(this).eq(firstLi).parent().parent().parent().stop().animate({
            'height': 370
        })
    })
    // 当鼠标移入车型一级下拉列表的第二个选项时，二级第一个列表出现,其他二级列表隐藏
    $('.car-menu-two').on('mouseenter', function () {
        $('.car-menu-second').show();
        $('.car-menu-second').siblings().hide();
        $(this).css({
            'opacity': 1
        })
        $('car-menu-second li').css({
            'opacity': 1
        })
        $(this).siblings().css({
            'opacity': 0.5
        })
        $(this).eq(firstLi).parent().parent().parent().stop().animate({
            'height': 370
        })
    })
    // 当鼠标移入车型一级下拉列表的第三个选项时，三级列表出现,其他二级列表隐藏
    $('.car-menu-three').on('mouseenter', function () {
        $('.nav-two').children().hide();
        $(this).css({
            'opacity': 1
        })
        $(this).siblings().css({
            'opacity': 0.5
        })
    })
    // 当鼠标移入车型一级下拉列表的第四个选项时，二级第三个列表出现,其他二级列表隐藏
    $('.car-menu-four').on('mouseenter', function () {
        $('.car-menu-third').show();
        $('.car-menu-third').siblings().hide();
        $(this).css({
            'opacity': 1
        })
        $('car-menu-third li').css({
            'opacity': 1
        })
        $(this).siblings().css({
            'opacity': 0.5
        })
        $(this).eq(firstLi).parent().parent().parent().stop().animate({
            'height': 370
        })
    })
    // 当鼠标移入车型一级下拉列表的第五个选项时，二级第四个个列表出现,其他二级列表隐藏
    $('.car-menu-five').on('mouseenter', function () {
        $('.car-menu-fourth').show();
        $('.car-menu-fourth').siblings().hide();
        $(this).css({
            'opacity': 1
        })
        $('car-menu-fourth li').css({
            'opacity': 1
        })
        $(this).siblings().css({
            'opacity': 0.5
        })
        $(this).eq(firstLi).parent().parent().parent().stop().animate({
            'height': 370
        })
    })

    // 当鼠标移入车型三级下拉列表的第一个选项时，其他选项变暗，选择的高亮
    var firstLi = $('.car-menu-first li').index()
    var secondLi = $('.car-menu-second li').index()
    var thirdLi = $('.car-menu-third li').index()
    var fourthLi = $('.car-menu-fourth li').index()
    $('.car-menu-first li').on('mouseenter', function () {

        $(this).eq(firstLi).css({
            'opacity': 1
        })
        $(this).eq(firstLi).siblings().css({
            'opacity': 0.5
        })
        $(this).eq(firstLi).parent().parent().parent().parent().stop().animate({
            'height': 862
        })
    })
    $('.car-menu-second li').on('mouseenter', function () {

        $(this).eq(secondLi).css({
            'opacity': 1
        })
        $(this).eq(secondLi).siblings().css({
            'opacity': 0.5
        })
        $(this).eq(firstLi).parent().parent().parent().parent().stop().animate({
            'height': 862
        })
    })
    $('.car-menu-third li').on('mouseenter', function () {

        $(this).eq(thirdLi).css({
            'opacity': 1
        })
        $(this).eq(thirdLi).siblings().css({
            'opacity': 0.5
        })
        $(this).eq(firstLi).parent().parent().parent().parent().stop().animate({
            'height': 862
        })
    })
    $('.car-menu-fourth li').on('mouseenter', function () {

        $(this).eq(fourthLi).css({
            'opacity': 1
        })
        $(this).eq(fourthLi).siblings().css({
            'opacity': 0.5
        })
        $(this).eq(firstLi).parent().parent().parent().parent().stop().animate({
            'height': 862
        })
    })





    //   顶部导航栏移出效果
    $('nav').on('mouseleave', function () {
        $(this).animate({
            'height': 94
        })
    })
})




