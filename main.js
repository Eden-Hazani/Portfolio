$(function () {



    $('#dnCreateGit').on('click', function () {
        window.open('https://github.com/Eden-Hazani/DnCreate', '_blank');
    });

    $('#dnCreateGoogle').on('click', function () {
        window.open('https://play.google.com/store/apps/details?id=com.DnCreate', '_blank');
    });
    $('#skyBuyGit').on('click', function () {
        window.open('https://github.com/Eden-Hazani/Sky-Buy', '_blank');
    });
    $('#skySurferGit').on('click', function () {
        window.open('https://github.com/Eden-Hazani/SkySurf', '_blank');
    });
    $('#skySurferWebsite').on('click', function () {
        window.open('http://www.sky-surfer.com', '_blank');
    });
    $('#cryptoBearGit').on('click', function () {
        window.open('https://github.com/Eden-Hazani/CryptoBear', '_blank');
    });
    $('#cryptoBearWebsite').on('click', function () {
        window.open('https://eden-hazani.github.io/CryptoBear/', '_blank');
    });



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
        }, 100);
    });


    $(".skillsIcon,.experience>div,.determination>div,.personal>div,.details>div,.linkedIn>div,.emailContact>div").bind("webkitAnimationEnd mozAnimationEnd animationend", function () {
        $(this).removeClass("animated")
    })

    $(".skillsIcon,.experience>div,.determination>div,.personal>div,.details>div,.linkedIn>div,.emailContact>div").hover(function () {
        $(this).addClass("animated")
    })



});