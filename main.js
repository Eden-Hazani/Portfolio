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


    $('.firstName').mouseenter(() => {
        let firstName = $('.firstName').html().replace(' ', '');
        let firstNameArray = firstName.split('')
        $('.firstName').html('');
        for (letter of firstNameArray) {
            let radomizer = Math.floor(Math.random() * 3);
            $('.firstName').append(`
                <span class='animation${radomizer}'>${letter}</span>            
            `);
        }
    });

    $('.firstName').mouseleave(() => {
        $('.firstName').html('Eden Hazani');
    });

});