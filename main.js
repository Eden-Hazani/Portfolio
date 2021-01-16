$(function () {



    $('.spaceBornBackGround').on('click', function () {
        window.open('https://github.com/Eden-Hazani/SpaceBorn', '_blank');
    });

    $('.cryptoBearBackGround').on('click', function () {
        window.open('https://eden-hazani.github.io/CryptoBear/', '_blank');
    });
    $('.morbiezBackGround').on('click', function () {
        window.open('https://eden-hazani.github.io/Morbiez', '_blank');
    });
    $('.skySurferBackGround').on('click', function () {
        window.open('http://sky-surfer.com', '_blank');
    });
    $('.skyBuyBackGround').on('click', function () {
        window.open('https://github.com/Eden-Hazani/Sky-Buy', '_blank');
    });
    $('.dncreateBackGround').on('click', function () {
        window.open('https://github.com/Eden-Hazani/DnCreate', '_blank');
    });

    let width = $(window).width()
    $('.portritDiv').on('mousemove', function (e) {
        $('.portrit').css('width', e.pageX - 400);
        if ($('.portrit').width() > 420) {
            $('.portrit').css('width', width - 600 - e.pageX);
        }
        $('.portrit2').css('width', width - 900 - e.pageX);
        $('.portrit3').css('width', width - 1100 - e.pageX);
        $('.portrit4').css('width', width - 1300 - e.pageX);
        $('.portrit5').css('width', e.pageX - 1000);
        $('.portrit6').css('width', e.pageX - 800);
        $('.portrit7').css('width', e.pageX - 600);
    });



    $(document).ready(function () {
        // first name
        $('.profileImg').hide(0).delay(1000).fadeIn(700)

        let firstNameArray = $('.firstName').html().split(' ')[0].split('');
        let lastNameArray = $('.firstName').html().split(' ')[1].split('');
        // notyourava
        let not = $('.notYourAvarage').html().split(' ')[0].split('');
        let your = $('.notYourAvarage').html().split(' ')[1].split('');
        let avarage = $('.notYourAvarage').html().split(' ')[2].split('');
        // webdev
        let web = $('.webDev').html().split(' ')[0].split('');
        let dev = $('.webDev').html().split(' ')[1].split('');

        $('.firstName').html('');
        $('.notYourAvarage').html('');
        $('.webDev').html('');

        for (letter of firstNameArray) {
            let radomizer = Math.floor(Math.random() * 3);
            $('.firstName').append(`<span class='animation${radomizer}'>${letter}</span>`);
        }
        $('.firstName').append(' ')
        for (letter of lastNameArray) {
            let radomizer = Math.floor(Math.random() * 3);
            $('.firstName').append(`<span class='animation${radomizer}'>${letter}</span>`);
        }
        setTimeout(() => {
            for (letter of not) {
                let radomizer = Math.floor(Math.random() * 3);
                $('.notYourAvarage').append(`<span class='animation${radomizer}'>${letter}</span>`);
            }
            $('.notYourAvarage').append(' ')
            for (letter of your) {
                let radomizer = Math.floor(Math.random() * 3);
                $('.notYourAvarage').append(`<span class='animation${radomizer}'>${letter}</span>`);
            }
            $('.notYourAvarage').append(' <br class="rwd-break">')
            for (letter of avarage) {
                let radomizer = Math.floor(Math.random() * 3);
                $('.notYourAvarage').append(`<span class='animation${radomizer}'>${letter}</span>`);
            }
        }, 200);
        setTimeout(() => {
            for (letter of web) {
                let radomizer = Math.floor(Math.random() * 3);
                $('.webDev').append(`<span class='animation${radomizer}'>${letter}</span>`);
            }
            $('.webDev').append(` <br class="rwd-break">`)
            for (letter of dev) {
                let radomizer = Math.floor(Math.random() * 3);
                $('.webDev').append(`<span class='animation${radomizer}'>${letter}</span>`);
            }
        }, 500);
    });


    $(".skillsIcon,.experience>div,.determination>div,.personal>div,.details>div,.linkedIn>div,.emailContact>div").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
        $(this).removeClass("animated")
    })

    $(".skillsIcon,.experience>div,.determination>div,.personal>div,.details>div,.linkedIn>div,.emailContact>div").hover(function () {
        $(this).addClass("animated")
    })



});