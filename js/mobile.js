
// 주소창 숨기기
// if (navigator.userAgent.indexOf('iPhone') != -1) {
// 	addEventListener("load", function() {
// 		setTimeout(hideURLbar, 0);    }, false);
// 	}
//아이폰이 아닌경우
// else {
// 	hideURLbar();
// }
// function hideURLbar() {
// 	window.scrollTo(0, 1);
// }
// $('#line_view').style.left = 0;

// 		$(".viewbtn").click(function(){
// 			$(".side_bar").toggleClass("move");
	
// 			// 버튼클릭시 화살표방향
// 			if($(".fas").hasClass("fas fa-caret-right")){
// 				$(".fa-caret-right").removeClass("fas fa-caret-right").addClass("fas fa-caret-left");
// 				$('#line_view').animate({left:0}, 300);
// 			}else{
// 				$(".fa-caret-left").removeClass("fas fa-caret-left").addClass("fas fa-caret-right");
// 				$('#line_view').animate({left:0}, 300);
// 			}
// 		});
		
// 	} else {
			
// 		/* 스크립트내용*/ 
// 		var main = $("[id^='main_']");

// 		var mainlist = document.querySelectorAll('ul.tab_bar li.tab_menu');
// 		const box = $(".tongbox");



// 		// $("ul#line_view").css({left:440});
// 			for (var k = 0 ; k < main.length ; k++) {
// 				main.click(function(){
// 					var sel_txt = $(this).text();
// 					if (sel_txt == "통합"){
// 						box.css("display","flex");
// 						$(".side_bar").css("display","none");
// 					} else {
// 						box.css("display","none");
// 						$("ul#line_view").css({left:50});
// 						$(".side_bar").css("display","flex");
// 					}
					
// 				});
// 			}

		
// 		// 통합일때 글자컬러

// 			for(var j = 0; j < mainlist.length; j++){

// 				if (j == 0) {
// 					main[j].className = "selected";
// 					$(".side_bar").css("display","none");
// 					$('#line_view').animate({left:440}, 300);

// 				} else {
// 					main[j].className = "non";
					
// 				}
				

// 			}
// 			$(".viewbtn").click(function(){
// 				$(".side_bar").toggleClass("move");
		
// 				// 버튼클릭시 화살표방향
// 				if($(".fas").hasClass("fas fa-caret-right")){
// 					$(".fa-caret-right").removeClass("fas fa-caret-right").addClass("fas fa-caret-left");
// 					$('#line_view').animate({left:400}, 300);
// 				}else{
// 					$(".fa-caret-left").removeClass("fas fa-caret-left").addClass("fas fa-caret-right");
// 					$('#line_view').animate({left:50}, 300);
// 				}
// 			});
// 		}
		
// }).resize();


// 모바일 뷰포트 계산
// export const setOneVh = () => {
// 	const vh = window.innerHeight * 0.01;
//     document.documentElement.style.setProperty('--vh', `${vh}px`);
// };

// const App = () => {
// 	useEffect(() => {
//     	setOneVh();
//         window.addEventListener('resize', setOneVh);
//     }, []);
	
//     return (
//     	{}
//     )
// };

// $(window).resize(function(){ 
// 	if (window.innerWidth > 480) {  
	
// 		$('#line_view').style.left = 440;
	
// 	} else {
		
// 		/* 스크립트내용*/ 
// 		$('#line_view').style.left = 0;
// 	}
	
// }).resize(); 

// function isMobile() {
// 	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
// }


// if (isMobile()) {
	
// 	$('#line_view').style.left = 0;


// } else {
	
// 	$(".viewbtn").click(function(){
// 		$(".side_bar").toggleClass("move");

// 		if($(".fas").hasClass("fas fa-caret-right")){
// 			$('#line_view').animate({left:0}, 300);
// 		}else{
// 			$('#line_view').animate({left:50}, 300);
// 		}
// 	});
// }



// $(window).resize(function(){ 
// 	if (window.innerWidth < 480) {  
		
// 		$('#line_view').style.left = 0;
// 		for(var j = 0; j < mainlist.length; j++){
// 			$('#line_view').animate({left:0}, 300);
//         }
//     }else{
//         $('#line_view').style.left = 45;
//     }
// });