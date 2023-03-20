
window.onload = function(){

    
    // 이벤트선택
    $(".eventclick > a.eventclick-btn").click(function(){
        $(".event_select").css("display","flex");
    });
    $(".eventclick .event_select > .off2").click(function(){
        $(".event_select").css("display","none");
    });

    const count = $("#tablewrap table tbody tr").length;
	$('.txt >span.length').html(count);

    //submenu 탭
    var navbar = document.querySelectorAll('ul.submenu > li');
    var navbarbtn = document.querySelectorAll('ul.submenu > li > a');


    for (var i = 0; i < navbar.length; i++){
        if(i == 0){
            navbar[i].classList = "click";
        }
        navbarbtn[i].addEventListener('click', function(e){
            e.preventDefault();
            for(var j = 0; j < navbar.length; j++){
                if (navbarbtn[j] == this) {
                    navbar[j].className = "click";
                } else {
                    navbar[j].className = "subbar";
                }
            }

        });
    }

}

