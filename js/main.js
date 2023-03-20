$(document).ready(function(e) {
    
    $('ul.tab_list li > a').click(function(){
        /* iframe 요소의 src 속성값을 a 요소의 data-url 속성값으로 변경 */ 
        $('#frame').attr('src',$(this).attr('data-url'));
    })

    $(".pop, .deng_error, .bosu-note").draggable({
        containment : 'html', 
        handle : '.title' 
    });


});