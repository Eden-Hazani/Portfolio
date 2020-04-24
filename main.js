$(function() {



    $('.leftIconBackground').on('click', function() {
        window.open('https://shockhit.github.io/SpaceBorn/', '_blank');
    });

    $('.centerIconBackground').on('click', function() {
        window.open('https://shockhit.github.io/CryptoBear/', '_blank');
    });
    $('.rightIconBackground').on('click', function() {
        window.open('https://shockhit.github.io/Morbiez', '_blank');
    });

    $('.portritDiv').on('mousemove', function(e) {
        $('.portrit').css('width', e.pageX - 800);
        if ($('.portrit').width() > 350) {
            $('.portrit').css('width', 2040 - 600 - e.pageX);
        }
        $('.portrit2').css('width', 2040 - 800 - e.pageX);
        $('.portrit3').css('width', 2040 - 1000 - e.pageX);
        $('.portrit4').css('width', 2040 - 1200 - e.pageX);
        $('.portrit5').css('width', e.pageX - 1000);
        $('.portrit6').css('width', e.pageX - 800);
        $('.portrit7').css('width', e.pageX - 600);
    });



    $(document).ready(function() {
        // first name
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

    $('body').mousemove(function(e) {
        let moveX = (e.pageX * -1 / 15);
        let moveY = (e.pageY * -1 / 15);
        $('#typewriter').css('margin-left', moveX + 'px ')
        $('#typewriter').css('margin-top', moveY + 'px ')
    })






    $(".determination>div").bind("webkitAnimationEnd mozAnimationEnd animationend", function() {
        $(this).removeClass("animated")
    })

    $(".determination>div").hover(function() {
        $(this).addClass("animated")
    })

    $(".skillsIcon").bind("webkitAnimationEnd mozAnimationEnd animationend", function() {
        $(this).removeClass("animated")
    })

    $(".skillsIcon").hover(function() {
        $(this).addClass("animated")
    })

    $(".experience>div").bind("webkitAnimationEnd mozAnimationEnd animationend", function() {
        $(this).removeClass("animated")
    })

    $(".experience>div").hover(function() {
        $(this).addClass("animated")
    })

    $(".personal>div").bind("webkitAnimationEnd mozAnimationEnd animationend", function() {
        $(this).removeClass("animated")
    })

    $(".personal>div").hover(function() {
        $(this).addClass("animated")
    })


    $(".details>div").hover(function() {
        $(this).addClass("animated")
    })
    $(".details>div").bind("webkitAnimationEnd mozAnimationEnd animationend", function() {
        $(this).removeClass("animated")
    })




});