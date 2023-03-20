

window.onload = function(){
    $("mobile_tab3 .check_list .check_box li dl:first-child dd").click(function(){
        $("#garo1").css("display","block");
    });

}



// if (document.body.clientWidth < 500) {
//     <script type="text/javascript" defer src="js/mobile.js" ></script>
   
// }

// $(window).resize(function(){
//     if (window.innerWidth > 480) { 
//         $("ul#line_view").css({left:300});
//     } else { 
//         $("ul#line_view").css({left:50});

//     } 
// }).resize();