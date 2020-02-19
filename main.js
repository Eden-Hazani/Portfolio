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

        $(document.body).css('background', 'rgb(' + rgb.join(',') + ')');

    }).resize();


 

    $(document).ready(function () {
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


        // first name
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
            $('.notYourAvarage').append(' ')
            for (letter of avarage) {
                let radomizer = Math.floor(Math.random() * 3);
                $('.notYourAvarage').append(`<span class='animation${radomizer}'>${letter}</span>`);
            }
        }, 200);
        // notyourava
        setTimeout(() => {
            for (letter of web) {
                let radomizer = Math.floor(Math.random() * 3);
                $('.webDev').append(`<span class='animation${radomizer}'>${letter}</span>`);
            }
            $('.webDev').append(' ')
            for (letter of dev) {
                let radomizer = Math.floor(Math.random() * 3);
                $('.webDev').append(`<span class='animation${radomizer}'>${letter}</span>`);
            }    
        }, 500);
        // webdev
        
        
    });

    $('.firstName').on('mouseout', function () {
        setTimeout(() => {
            $(this).html('Eden Hazani');
        }, 1500);
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

                        <ul class="navbar-nav ml-auto">

                            <li class="nav-item">
                                <a class="nav-link" href="trueSpace.html">Voyager77</a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link disabled" href="index.html">Space Food (coming soon)</a>
                            </li>
                        </ul>

                        <a class="navbar-brand ml-3" href="index.html">SpaceBorn</a>

                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="starList.html">Stars<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="applyForm.html">Apply forms</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Contact Us
                            </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item pageNotReady" href="#">InterStellar Chat</a>
                                    <a class="dropdown-item pageNotReady" href="#">Galactic Mail</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item pageNotReady" href="#">Phone Call<br>
                                        (space charges may apply)</a>
                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav ml-auto ">
                            <li class="nav-item">
                                <a class="nav-link pageNotReady" href="#">Not Yet Ready</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <div class="row">
            <div class="col voyager">
                <h1>Distance of our farthest Spaceship yet</h1>
                <br>
                <h2>Voyager 1</h2>
                <p>Voyager 1 is a space probe launched by NASA on September 5, 1977.<br> Part of the Voyager program to study the outer Solar System</p>
            </div>
        </div>
        <div class="row">
            <div class="col voyager">
                <hr>
                <span>At the time you are reading this Voyager 1 is:</span>
            </div>
        </div>
        <div class="row d-flex justify-content-center">
            <div class="col">
                <div class="animationBox">
                    <div class="satelliteAnimation">
                        <div id="voyagerCounter"></div>
                        <img src="assets/images/satellite-icon2.svg">
                        <br><br>
                        <span>Away From Earth</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row voyagerPostersRow">
            <div class="col">
                <span>Posters For Download!</span>
                <div class="wrapper">
                    <a data-fancybox="gallery" href="assets/images/voyager_poster.jpg"><img class="voyagerPostersGallery" src="assets/images/voyager_poster.jpg" alt="" /></a>
                    <a data-fancybox="gallery" href="assets/images/voyager_disco_poster.jpg"><img class="voyagerPostersGallery" src="assets/images/voyager_disco_poster.jpg" alt="" /></a>
                </div>
            </div>
        </div>
        <div class="push"></div>
    </div>
    <div class="row footer">
        <div class="col">
            <div class="siteRights">
                <br>
                <hr>
                <span>All rights reserved - Spacers Zeal&trade;	 2074 &reg;	</span>
            </div>
        </div>
    </div>
    <script src="Main.js"></script>
    <script src="trueSpace.js"></script>

    `
    var speed = 20; /* The speed/duration of the effect in milliseconds */
    $(document).ready( ()=> {
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

