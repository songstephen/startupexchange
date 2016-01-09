$(document).ready(function() {



    $.getJSON('data/bios.json', function(data) {
        console.log("bagel");
        console.log(data);
        $('.person').click(function(){
            text = $(this).attr('id');
            var num = 0;
            for (var i = 0; i < data.bios.length; i++) {
                if (text === data.bios[i].id) {
                    num = i;
                }
            }
            updateModal(data, num);
        });

    });


    $('.person').click(function(){
        $('.modal').fadeToggle('slow');
    });

    $('#close').click(function(){
        $('.modal').fadeToggle('slow');
    });

    $(document).on('click', function(e) {

        if ( $( ".modal" ).is( ":visible" ) && (!$(e.target).closest('.modal').length && !$(e.target).closest('.person').length) ) {
            $(".modal").fadeToggle('slow');
        }
    });
});

function updateModal(data, i){
    $('#name').html(data.bios[i].name);
    $('#major').html(data.bios[i].major);
    $('#sx').html(data.bios[i].sx);
    $('#interests').html("Interests: " + data.bios[i].interests)
}
