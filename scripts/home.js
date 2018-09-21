$('.card-button').click(function(){
    let page = $(this).attr('data-page');
    window.scrollTo(0, 0);
    $('#content').load('views/' + page + '.html');
})

$(document).ready(function(){
    var user = getUser();
    if(user.type === 'A'){
        $('#card-4').hide();
        $('#card-5').hide();
        $('#card-6').hide();
        $("#about-btn").hide();
    }
    if(user.type === 'L'){
        $('#card-3').hide();
        $('#card-6').hide();
        $("#about-btn").hide();
    }

    if(user.type === 'P'){
        $('#card-3').hide();
        $('#card-4').hide();
        $('#card-5').hide();
    }
})