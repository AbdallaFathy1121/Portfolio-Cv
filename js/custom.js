

$(window).on('load', function(){

    $(".loading").delay(1000).fadeOut('slow', function(){

        $(this).remove();

    });

});

/////////////////////////////////////////////////////////////////////////////////////////////////////////

$(document).ready (function() {

    // Animation (OnClick)

    document.onclick = animateCircles;

    var colors = ['#78cc6d'];
    
    function animateCircles (event) {
    
        var circle = document.createElement('div');
        circle.setAttribute('class', 'circle');
        document.body.appendChild(circle);
    
        circle.style.left = event.clientX + 'px';
        circle.style.top = event.clientY + 'px';
    
        circle.style.borderColor = colors;
    
        circle.style.transition = "all .6s linear 0s";
        circle.style.left = circle.offsetLeft - 20 + 'px';
        circle.style.top = circle.offsetTop - 20 + 'px';
    
        circle.style.opacity = .5;
        circle.style.height = '40px';
        circle.style.width = '40px';
        circle.style.borderRadius = '10px'
        circle.style.borderWidth = '5px';
        circle.style.opacity = 0;
        circle.style.zIndex = -1;

    
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Menu (Active & Click)

    $('.profile .container .menu li') .click(function () {

        $(this).addClass('active').siblings().removeClass('active');

    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    // Card (Animate)

    $('.about').animate ({

        left: '45%',
        opacity: 1,
        zIndex: 1

    }, 750);

    $('body, html').each (function () {

        $(".profile .container .menu .box-resume").click(function () {

            $('.resume').animate ({

                left: '45%',
                opacity: 1,
                zIndex: 1

            }, 750);

            $('.about').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);
            $('.works').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);
            $('.contact').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);

        });

        $(".profile .container .menu .box-about").click(function () {

            $('.about').animate ({

                left: '45%',
                opacity: 1,
                zIndex: 1

            }, 750);

            $('.resume').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);
            $('.works').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);
            $('.contact').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);

        });

        $(".profile .container .menu .box-works").click(function () {

            $('.works').animate ({

                left: '45%',
                opacity: 1,
                zIndex: 1

            }, 750);

            $('.about').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);
            $('.resume').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);
            $('.contact').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);

        });

        $(".profile .container .menu .box-contact").click(function () {        

            $('.contact').animate ({

                left: '45%',
                opacity: 1,
                zIndex: 1

            }, 750);

            $('.about').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);
            $('.works').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);
            $('.resume').animate ({

                left: '0%',
                opacity: 0,
                zIndex: -1

            }, 600);

        });

    });

    //////////////////////////////////////////////////////////////////////////////////

    // Button (Contact)

    $('.profile .prof-card .info button').click (function () {

        $('.profile .container .menu .box-contact').addClass('active').siblings().removeClass('active');


        $('.contact').animate ({

            left: '45%',
            opacity: 1,
            zIndex: 1

        }, 750);

        $('.about').animate ({

            left: '0%',
            opacity: 0,
            zIndex: -1

        }, 600);
        $('.works').animate ({

            left: '0%',
            opacity: 0,
            zIndex: -1

        }, 600);
        $('.resume').animate ({

            left: '0%',
            opacity: 0,
            zIndex: -1

        }, 600);

    });

    //////////////////////////////////////////////////////////////////////////////////////

    // Tilt.js 
        
    $('.works .row .box').tilt({

        glare: true
    
    });

    $('.works-sm .row .box').tilt({

        glare: true
    
    });

    ////////////////////////////////////////////////////////////////////////////////////////

    // Navbar Animation

    $('.menu-sm .row li').click(function () {

        $('html, body').animate({

            scrollTop: $( '#' + $(this).data('scroll') ).offset().top - 72

        }, 1200);

    });

    $(window).scroll(function() {

        $('.block').each(function(){

            if ( $(window).scrollTop() >= $(this).offset().top - 100 ) {

                var blockID = $(this).attr('id');

                $('.menu-sm li').removeClass("active");

                $('.menu-sm li[data-scroll="' + blockID + '"]').addClass('active');

            }

        });

    });

    var Top = 0;

    $(window).on('scroll',function(){
    
    var scrollTop = $(this).scrollTop();
    
        if (scrollTop > Top) {

            $('.menu-sm').addClass('menu-animate');

        } else {

        $('.menu-sm').removeClass('menu-animate');

       }
       
       Top = scrollTop;
       
    });

    ///////////////////////////////////////////////////////////////////////////////////////////////

    // WOW

    new WOW().init();











});











