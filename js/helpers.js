$(document).ready(function() {

    // about page

    $.getJSON('data/bios.json', function(data) {
        $.each(data.bios, function(key, stuff) {
        $('.bios').append('<div class="three columns person" id="' + stuff.id + '"><img src="img/peeps/' + stuff.id + '.jpg"></div>');
        });

        $('.person').click(function(){
            console.log('yoyo' + $(this).attr('id'));
            text = $(this).attr('id');
            var num = 0;
            for (var i = 0; i < data.bios.length; i++) {
                if (text === data.bios[i].id) {
                    num = i;
                }
            }
            updateModal(data, num);
            $('.modal').fadeToggle('500');
        });

    });

    $('#close').click(function(){
        $('.modal').fadeToggle('500');
    });

    $('.modal').click(function(e){
        if (!e.target.id) {
            $('.modal').fadeToggle('500');
        }
    })

    // contact page

    $(".submitted").hide();
    $(".error-msg").hide();

    $(function() {
        if ( document.location.href.indexOf('?submitted') > -1 ) {
            $(".submitted").show();
            $(".signup").hide();
        }
    });

$("#mc-embedded-subscribe").click(function() {
    if (!$('#mce-MMERGE14').val().length) {
            $(".error-msg").show();
            $(".error-msg").text('Please enter your first name.');
            return false;
        } else if (!$('#mce-MMERGE15').val().length) {
            $(".error-msg").show();
            $(".error-msg").text('Please enter your last name.');
            return false;
        } else if (!$('#mce-EMAIL').val().length) {
            $(".error-msg").show();
            $(".error-msg").text('Please enter your email address.');
            return false;
        } else if (!(/[^\s@]+@[^\s@]+\.[^\s@]+/.test($('#mce-EMAIL').val()))) {
            $(".error-msg").show();
            $(".error-msg").text('Make sure your email address is valid.');
            return false;
        } else {
            $(".error-msg").hide();
            return true;
        }
    });

});

function updateModal(data, i){
    $('#name').html(data.bios[i].name);
    $('#major').html(data.bios[i].major);
    $('#sx').html(data.bios[i].sx);
    $('#interests').html("Interests: " + data.bios[i].interests)
}

