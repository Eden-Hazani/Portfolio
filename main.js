$(function() {

    var $win = $(window),
        w = 0,
        h = 0,
        rgb = [],
        getWidth = function() {
            w = $win.width();
            h = $win.height();
        };

    $win.resize(getWidth).mousemove(function(e) {

        rgb = [
            Math.round(e.pageX / w * 255),
            Math.round(e.pageY / h * 255),
            150
        ];

        $('#typewriter').css('color', 'rgb(' + rgb.join(',') + ')');
    }).resize();

    $('.leftIconBackground').on('click', function() {
        window.open('https://shockhit.github.io/SpaceBorn/', '_blank');
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

    $(".circlec").click(function() {
        $('.circlec>h2').fadeOut(300);
        setTimeout(() => {
            if ($('.circlec>h2').html() === 'Want to learn more? <br> CLICK ME!') {
                $('.backgroundParallax2').animate({ height: 1200 }, 500)
                $('.circlec>h2').html('Eden Hazani <br>');
                $('.circlec>h2').append(`<div class='personalInfoCard'> Stared programming at John Bryce in 2019.
                <br>Fell in love with the world of code and how
                <br>It affects our daily lives.
                </div>
                <div class='personalInfoCard'>Always striding to improve my work.<br>
                Coding is a passion and I seek to<br>
                Improve myself with every project I take.<br>
                I love to learn and evolve and excel<br>
                In everything I do.
                </div>`);
                $('.circlec>h2').css('margin-top', 25 + 'px');
                $('.circlec>h2').fadeIn('slow');
            } else {
                $('.circlec>h2').html('Want to learn more? <br> CLICK ME!');
                $('.circlec>h2').css('margin-top', 35 + '%');
                $('.circlec>h2').fadeIn('slow');
                $('.backgroundParallax2').animate({ height: 450 }, 500)
            }
        }, 300);



        $("div.circleb").toggleClass("transformb");
        $("div.circlea").toggleClass("transforma");
    });




    var i = 0;
    var txt = `<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" crossorigin="anonymous"></script>
    script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <link rel="stylesheet" href="styles.css">
    <title>Eden Hazani</title>
    </head>

    <body>
    <div class="container text-center">
        <div class="wrapper">
            <div class="row">
                <div class="col">
                    <div class="firstBox">
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="0">
                            <h1 class="firstName">Eden Hazani</h1>
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="200">
                            <h1 class="notYourAvarage">Not Your Avarage</h1>
                        </div>
                        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-delay="500">
                            <h1 class="webDev">Web Developer</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="secondBox">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="background">
            <div class="row">
                <div class="col">
                    <div id="typewriter"></div>
                </div>
            </div>
        </div>
    </div>
    <script src="main.js"></script>
    <script>
        AOS.init();
    </script>
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" type="image/png" href="assets/images/favicon-16x16.png"/>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9.7.2/dist/sweetalert2.all.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    <script src="jquery.fancybox.min.js"></script>
    <script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>
    <title>True Space</title>
    <link rel="stylesheet" href="styles/jquery.fancybox.css" type="text/css" media="screen" />
    <link rel="stylesheet" href="styles/styles.css">
</head>
<body class="trueSpaceBackgroundImg">
    <div class="container-fluid text-center content">
        <div class="row ">
            <div class="col">
                <nav class="navbar navbar-expand-sm navbar-dark ">

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon "></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <span id="pageClock"></span>
                            </li>
                        </ul>
    `
    var speed = 1; /* The speed/duration of the effect in milliseconds */
    $(document).ready(() => {
        typeWriter()
    });

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typewriter").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
});