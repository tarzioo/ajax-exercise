"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    // TODO: get the fortune and show it in the #fortune-text div
    $.get('/fortune', function(result) {
        $('#fortune-text').html(result);
    });
}



$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function showWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
    $.get(url, function(result) {
        var forecast = result['forecast'];
        $('#weather-info').html(forecast);
    });
}

$("#weather-form").on('submit', showWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
    var formInputs = {
        'melon_type': $('#melon-type-field').val(),
        'qty': $('#qty-field').val()
    };

    $.post('/order-melons.json', 
        formInputs, 
        function(results) {
            var message = results['msg'];
            var code = results['code'];
            if (code === 'ERROR') {
                $('#order-status').addClass('order-error');
            }
            $('#order-status').html(message);
        });
}

$("#order-form").on('submit', orderMelons);


