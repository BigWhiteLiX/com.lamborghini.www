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
    $('nav').on('mouseleave', function () {
        $('.car-parameter').hide()
        $('.car-menu').hide()
        $(".service li").hide()
        $(".car-menu-first").hide()
        $(".nav-two ul").hide()
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
        $('.car-parameter').hide()
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
        $('.nav-third-car').hide()
    })
    // 当鼠标移入车型一级下拉列表的第二个选项时，二级第一个列表出现,其他二级列表隐藏
    $('.car-menu-two').on('mouseenter', function () {

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
        $('.car-menu-second').show();
        $('.car-menu-second').siblings().hide();
        $('.nav-third-car').hide()

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
        $(this).parent().parent().parent().stop().animate({
            'height': 862
        })
        $('.car-parameter').show()
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
        $('.nav-third-car').hide()
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
        $('.nav-third-car').hide()
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
        $('.nav-third-car').show()
        $('.nav-third-car ').animate({
            left: 30
        })
        // $('.car-parameter').show()
        // $(this).show()
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

    })
    $('.car-menu-fourth li').on('mouseenter', function () {

        $(this).eq(fourthLi).css({
            'opacity': 1
        })
        $(this).eq(fourthLi).siblings().css({
            'opacity': 0.5
        })
    })
    $('.car-menu-first-one').on('mouseenter', function () {
        $('.car-parameter').show()
        $('.nav-third-one').siblings().fadeOut()
        $('.nav-third-one').fadeIn()
        $('.nav-third-car').show()
    })
    $('.car-menu-first-two').on('mouseenter', function () {

        $('.car-parameter').show()
        $('.nav-third-two').siblings().fadeOut()
        $('.nav-third-two').fadeIn()
        $('.nav-third-car').show()
    })
    $('.car-menu-first-three').on('mouseenter', function () {
        $('.car-parameter').show()
        $('.nav-third-three').siblings().fadeOut()
        $('.nav-third-three').fadeIn()
        $('.nav-third-car').show()
    })
    $('.car-menu-first-four').on('mouseenter', function () {
        $('.car-parameter').show()
        $('.nav-third-four').siblings().fadeOut()
        $('.nav-third-four').fadeIn()
        $('.nav-third-car').show()
    })
    $('.car-menu-second-one').on('mouseenter', function () {
        $('.car-parameter').show()
        $('.nav-third-five').siblings().fadeOut()
        $('.nav-third-five').fadeIn()
        $('.nav-third-car').show()
    })
    $('.car-menu-second-two').on('mouseenter', function () {
        $('.car-parameter').show()
        $('.nav-third-six').siblings().fadeOut()
        $('.nav-third-six').fadeIn()
        $('.nav-third-car').show()
    })
    $('.car-menu-second-three').on('mouseenter', function () {
        $('.car-parameter').show()
        $('.nav-third-seven').siblings().fadeOut()
        $('.nav-third-seven').fadeIn()
        $('.nav-third-car').show()
    })
    $('.car-menu-three').on('mouseenter', function () {
        $('.car-parameter').show()
        $('.nav-third-eight').siblings().fadeOut()
        $('.nav-third-eight').fadeIn()
        $('.nav-third-car').show()
    })

    //   顶部导航栏移出效果
    $('nav').on('mouseleave', function () {
        $(this).animate({
            'height': 94
        })
    })
})


// 第二部分 轮播图
// 定义变量
var $num = 0;
$('.slider ol li').eq(0).addClass('current')
// 功能3：鼠标移入每个小圆点，对应的小圆点要添加current，而且上面的图也在跟着切换

$('.slider ol li').on('click', function () {
    // 获取当前的索引
    var $index = $(this).index()
    // 直接赋值给$num 
    $num = $index
    // 3.2 给当前的小圆点要添加current类名
    $(this).addClass("current").siblings().removeClass('current')
    // 3.3 上面的图也在跟着切换
    $('.slider>ul li').eq($index).stop().fadeIn().siblings().stop().fadeOut()
})
// 功能3：鼠标移入每个小圆点，对应的小圆点要添加current，而且上面的图也在跟着切换

// 3.1 先要给小圆点注册事件
$('.slider ol li').on('click', function () {
    // 获取当前的索引
    var $index = $(this).index()
    // 直接赋值给$num 
    $num = $index
    // 3.2 给当前的小圆点要添加current类名
    $(this).addClass("current").siblings().removeClass('current')
    // 3.3 上面的图也在跟着切换
    $('.slider>ul li').eq($index).stop().fadeIn(2000).siblings().stop().fadeOut(2000)
})

// 功能四:点击右箭头，切换下一张图片，同时下面的小圆点也在跟着切换加类名

// 4.1 获取右箭头，添加事件
$('.arrow-right').on('click', function () {
    // 4.2 切换下一张
    $num++;
    // 进行判断是不是最后一张
    if ($num == $('.slider>ul li').length) {
        $num = 0;
    }
    $('.slider>ul li').eq($num).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
    // 4.3 小圆点跟着切换
    $('.slider ol li').eq($num).addClass("current").siblings().removeClass('current')

})

// 功能五:点击左箭头，切换上一张图片，同时下面的小圆点也在跟着切换加类名
$('.arrow-left').on('click', function () {
    // 5.1 $num--；
    $num--;
    // 判断
    if ($num < 0) {
        $num = $('.slider>ul li').length - 1;
    }
    //5.2 切换上一张图片
    $('.slider>ul li').eq($num).stop().fadeIn(2000).siblings().stop().fadeOut(2000);
    //5.3 下面的小圆点也在跟着切换加类名
    $('.slider ol li').eq($num).addClass("current").siblings().removeClass('current')

})
// 功能六：自动轮播
var timer = setInterval(function () {
    $('.arrow-right').click()
}, 10000)
// 功能七： 移动到slider上面定时器删除
$('.slider')
    .on('mouseenter', function () {
        // 移除定时器
        clearInterval(timer)
        // 显示

    })
    .on('mouseleave', function () {
        timer = setInterval(function () {
            $('.arrow-right').click()
        }, 2000)
        // 隐藏
        $('.arrow').hide();
    })
//2.2轮播图上方文字从左向右以此淡出

// function fade() {
//     var options3 = {
//         id: 'box3'
//         , auto: false
//     };
//     var box3 = $('.box3');
//     $('h1').show()
//     box3.initReveal(options3);
//     box3.performReveal(options3);
// }
// 六边形由内向外绽放函数
// function big() {
//     var wValue = $(this).find('.exagon').width() + 50;
//     var hValue = $(this).find('.exagon').height() + 50;
//     $(this).find('.exagon').animate({
//         width: wValue,
//         height: hValue,
//         left: ("-" + (0.5 * $(this).find('.exagon').width()) / 2),
//         top: ("-" + (0.5 * $(this).find('.exagon').height()) / 2)
//     }, 1000);
// }
// function smoll() {
//     ('.exagon').css({
//         'height': 0
//     })
// }
