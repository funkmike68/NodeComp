
$(document).ready(function(){
    $('.nav a').click(function(){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');

    });

});