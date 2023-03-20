
//메인메뉴 클릭시 활성화
	//윈도우 리사이즈 이벤트
	window.onresize = function(event){
		if (window.innerWidth <= 800) {
			$(".side_bar").css("display","none");
			$("#line_view").css("left","0");
		}else{
			$("#line_view").css("left","50px");
		}
	}

	var tab = $("ul.tab_list > li > a");
	$(".content .mapbox").show();

	$(tab).click(function(){
		$(".content .mapbox").hide();
		$(".anylayer").show();
	});
	$("header h1 > a").click(function(){
		$(".anylayer").hide();
		$(".content .mapbox").show();
	});
	
	//가로등창 띄우기

	function garoview(){
		$(parent.document).find("#garo2").css("display","block");
	}
	function bun_view(){
		$(parent.document).find("#garo1").css("display","block");
	}

	// 사이드메뉴 닫기창
	$(".taboff_btn").click(function(){
		$("ul.tab_list").css("display","none");
	});

	
	//점검내역 갯수
	var count = $("#checkcont li").length;
	$('#bottom_3>a>em , .check_title h2>em, .check_list p>span.count').html(count);

	//검색결과 갯수
	var count2 = $("ul.result_Box >li").length;
	$(".result_list >p >span.color").html(count2);
	//가로등 리스트 카운트
	var tablelength = $(".garocount1 table tbody tr").length;
	$(".txt .length").html(tablelength);
	var tablelength2 = $(".garocount2 table tbody tr").length;
	$(".txt .length2").html(tablelength2);
	var tablelength3 = $(".garocount3 table tbody tr").length;
	$(".txt .length3").html(tablelength3);

	//보안등 리스트 카운트
	var boantable = $(".boanlength table tbody tr").length;
	$(".txt .boancount").html(boantable);
	var boantable2 = $(".boanlength2 table tbody tr").length;
	$(".txt .boancount2").html(boantable2);
	var boantable3 = $(".boanlength3 table tbody tr").length;
	$(".txt .boancount3").html(boantable3);
	var boantable4 = $(".boanlength4 table tbody tr").length;
	$(".txt .boancount4").html(boantable4);
	var boantable5 = $(".boanlength5 table tbody tr").length;
	$(".txt .boancount5").html(boantable5);
	var boantable6 = $(".boanlength6 table tbody tr").length;
	$(".txt .boancount6").html(boantable6);

	//iot리스트 카운트
	var iottr = $(".iottable table tbody tr").length;
	$(".txt .iotcount").html(iottr);
	var iottr2 = $(".iottable2 table tbody tr").length;
	$(".txt .iotcount2").html(iottr2);
	var iottr3 = $(".iottable3 table tbody tr").length;
	$(".txt .iotcount3").html(iottr3);

	//공원등 리스트 카운트
	var parktr = $(".parktable table tbody tr").length;
	$(".txt .parkcount").html(parktr);
	var parktr2 = $(".parktable2 table tbody tr").length;
	$(".txt .parkcount2").html(parktr2);

	//분수대 리스트 카운트
	var bunsutr = $(".bunsutable table tbody tr").length;
	$(".txt .bunsucount").html(bunsutr);
	var bunsutr2 = $(".bunsutable2 table tbody tr").length;
	$(".txt .bunsucount2").html(bunsutr2);
	// var bunsutr3 = $(".bunsutable3 table tbody tr").length;
	// $(".txt .bunsucount3").html(bunsutr3);

	// 펌프장 리스트 카운트
	var pumptr = $(".pumptable table tbody tr").length;
	$(".txt .pumpcount").html(pumptr);

	//도로조명 리스트 카운트
	var dorotr = $(".roadtable table tbody tr").length;
	$(".txt .roadcount").html(dorotr);
	var dorotr2 = $(".roadtable2 table tbody tr").length;
	$(".txt .roadcount2").html(dorotr2);
	var dorotr3 = $(".roadtable3 table tbody tr").length;
	$(".txt .roadcount3").html(dorotr3);
	var dorotr4 = $(".roadtable4 table tbody tr").length;
	$(".txt .roadcount4").html(dorotr4);


	// 통계자료
	var tonglength = $(".tongtable table tbody tr").length;
	$(".txt .tongcount").html(tonglength);
	var tonglength2 = $(".tongtable2 table tbody tr").length;
	$(".txt .tongcount2").html(tonglength2);
	var tonglength3 = $(".tongtable3 table tbody tr").length;
	$(".txt .tongcount3").html(tonglength3);
	var tonglength4 = $(".tongtable4 table tbody tr").length;
	$(".txt .tongcount4").html(tonglength);
	var tonglength5 = $(".tongtable5 table tbody tr").length;
	$(".txt .tongcount5").html(tonglength5);
	var tonglength6 = $(".tongtable6 table tbody tr").length;
	$(".txt .tongcount6").html(tonglength6);
	var tonglength7 = $(".tongtable7 table tbody tr").length;
	$(".txt .tongcount7").html(tonglength7);





	// 모바일 탭바

	let today = new Date();   
	let year = today.getFullYear(); // 년도
	let month = today.getMonth() + 1;  // 월
	let date = today.getDate();  // 날짜
	let day = today.getDay();  // 요일

	$(".weather #current").html(year + "년" + "\u00a0" + month + "월" + "\u00a0" + date + "일");

	//터치이벤트
	$(function () { 
		var element = document.getElementById("mobiletab_1"); 
		var mc = new Hammer(element);
		mc.get('swipe').set({ direction: Hammer.DIRECTION_ALL });


		mc.on("swipedown", function () { 
			
			element.style.display = "none";

		});

	}) 

	
	const bottomli = document.querySelectorAll('ul.bottom_menu li.tab');
	const bottomcontent = document.querySelectorAll('.tabcont');
	
	$(".bottom_menu li.tab").click(function() {
		var idx = $(this).index();
		for (i = 0 ; i < bottomli.length ; i++) { 
			if(i == idx){ //내가 선택한 탭메뉴바와 탭메뉴가 일치했을때 block or none

				for (j = 0 ; j < bottomli.length ; j++) { 
					if (j != idx) {
						bottomcontent[j].style.display = "none"; //내가 선택한 것과 탭메뉴가 일치 하지 않는 것들을 모두 none
						bottomli[j].classList.remove('active');
					}
				}
				if (bottomcontent[i].style.display == "block") {
					bottomcontent[i].style.display = "none";
					bottomli[i].classList.remove('active');
				} else {
					bottomcontent[i].style.display = "block";
					bottomli[i].classList.add('active');
		
				}
			}
		}

		// if(idx == 0){
		// 	bottomcontent[1].style.display = "none";
		// 	bottomcontent[2].style.display = "none";
		// 	bottomcontent[3].style.display = "none";

		// 	if (bottomcontent[0].style.display == "block") {
		// 		bottomcontent[0].style.display = "none";
		// 	} else {
		// 		bottomcontent[0].style.display = "block";
		// 	}
		// }
		// if(idx == 1){
		// 	bottomcontent[0].style.display = "none";
		// 	bottomcontent[2].style.display = "none";
		// 	bottomcontent[3].style.display = "none";

		// 	if (bottomcontent[1].style.display == "block") {
		// 		bottomcontent[1].style.display = "none";
		// 	} else {
		// 		bottomcontent[1].style.display = "block";
		// 	}
		// }
		// if(idx == 2){
		// 	bottomcontent[0].style.display = "none";
		// 	bottomcontent[1].style.display = "none";
		// 	bottomcontent[3].style.display = "none";

		// 	if (bottomcontent[2].style.display == "block") {
		// 		bottomcontent[2].style.display = "none";
		// 	} else {
		// 		bottomcontent[2].style.display = "block";
		// 	}
		// }
		// if(idx == 3){
		// 	bottomcontent[0].style.display = "none";
		// 	bottomcontent[1].style.display = "none";
		// 	bottomcontent[2].style.display = "none";

		// 	if (bottomcontent[3].style.display == "block") {
		// 		bottomcontent[3].style.display = "none";
		// 	} else {
		// 		bottomcontent[3].style.display = "block";
		// 	}
		// }
	});

	// 메뉴
	var main = $("[id^='main_']");

	var mainlist = document.querySelectorAll('ul.tab_bar li.tab_menu');
	const box = $(".tongbox");


	
	for (var k = 0 ; k < main.length ; k++) {
		main.click(function(){
			var sel_txt = $(this).text();
			if (sel_txt == "통합"){
				box.css("display","none");
				$(".side_bar").css("display","none");
				
			} else {
				box.css("display","flex");
				
				$(".side_bar").css("display","flex");
			}
			
		});
	}

	$(".viewbtn").click(function(){
		$(".side_bar").toggleClass("move");

		// 버튼클릭시 화살표방향
		if($(".fas").hasClass("fas fa-caret-right")){
			$(".fa-caret-right").removeClass("fas fa-caret-right").addClass("fas fa-caret-left");
			// $('#line_view').animate({left:400}, 300);
		}else{
			$(".fa-caret-left").removeClass("fas fa-caret-left").addClass("fas fa-caret-right");
			// $('#line_view').animate({left:50}, 300);
		}
	});



	
	// 통합일때 글자컬러

	for(var j = 0; j < mainlist.length; j++){
		if (j == 0) {
			main[j].className = "selected";
			$(".side_bar").css("display","none");
		} else {
			main[j].className = "non";
			$(".side_bar").css("display","block");
		}
	}

	// 메뉴클랙시 메뉴컬러 반전
	for (var i = 0; i < mainlist.length; i++){
		main[i].addEventListener('click', function(e){
			e.preventDefault();

			for(var j = 0; j < mainlist.length; j++){
	
				if (main[j] == this) {
					main[j].className = "selected";
					main.not(main[j]).parent().css("display","none");
					$(".tab_list").eq([j]).css("display","block");

				} else {
					main[j].className = "non";
					$(".tongbox").css("display","none");
					$(".tab_list").eq([j]).css("display","none");
					$("ul#line_view").css({left:50});
				}
			}

		});
	
	}

	$(".main_icon").click(function(){
		$(".main_icon").toggleClass("open_btn");
		$(".map_icon").toggleClass("btn_list");
	}); 

	// 햄버거버튼 클릭시
	$(".buger").click(function(){
		$(".buger").toggleClass("close");
		$(".tab_list").toggleClass("off");
	});

	// 서브메뉴 닫기버튼
	$(".tab_list li:last-child div").click(function(){
		$("ul.tab_list").css("display","none");
		$(".tab_list").addClass("off");
	});

	// 일일점검내역
	$(".check_title").click(function(){
		$(".check_list").slideToggle(300);
	});

	$(".one_wrap .search_space button").click(function(){
		$(".result_list").slideToggle(300);
	});
    
	
	// sidemenu
	$(".tab_menu #main_1").click(function(){
		$(".side_bar").css("display","none");
	});
	$(".tab_menu #main_2").click(function(){
		$(".framebox").css("display","none");
		$("#tabcon1").css("display","block");
	});
	
	$(".tab_menu #main_3").click(function(){
		$(".framebox").css("display","none");
		$("#tabcon2").css("display","block");
	});
	
	$(".tab_menu #main_4").click(function(){
		$(".framebox").css("display","none");
		$("#tabcon3").css("display","block");
	});
	
	$(".tab_menu #main_5").click(function(){
		$(".framebox").css("display","none");
		$("#tabcon4").css("display","block");
	});

	$(".tab_menu #main_6").click(function(){
		$(".framebox").css("display","none");
		$("#tabcon5").css("display","block");
	});
	
	$(".tab_menu #main_7").click(function(){
		$(".framebox").css("display","none");
		$("#tabcon6").css("display","block");
	});

	$(".tab_menu #main_8").click(function(){
		$(".framebox").css("display","none");
		$("#tabcon7").css("display","block");
	});

	//전체제어박스
	$("#bun_controlbox .title> a").click(function(){
		$("#bun_controlbox").css("display","none");
	});

	// 삭제내역 팝업창
	$("#delbox .title> a").click(function(){
		$("#delbox").css("display","none");
	});

	// 점검내역 필터 
	
	$(".filter >li:first-child a").addClass("allchk");

	//클릭시 효과
	$(".filter li a").click(function(){
		$(this).toggleClass("allchk");
        
		var k = $(this).text();
		var output = $("ul#checkcont > li > dl:nth-child(2):contains('" + k + "')");
		$("ul#checkcont > li").hide();
		$(output).parent().show();
	});


	$(".reset a").click(function(){
		$(".filter li:not(:first-child) a").removeClass("allchk");
		$(".filter >li:first-child a").addClass("allchk");
		$("ul#checkcont > li").show();
	});

// 분수대이벤트 팝업창
$("#bunsu_eventpop .mini a").click(function(){
	$("#bunsu_eventpop").css("display","none");
});
function bunsuevent_btn(){
	top.document.all.bunsu_eventpop.style.display="block"
}

$("#bunsu_eventpop").draggable({
	containment : 'html', 
	handle : '.mini' 
});
$(".minipop").draggable({
	containment : 'html', 
	handle : '.mini' 
});


// 가로등 등록하기 창
$(".gapopbtn").click(function(){
	$(".gapop").css("display","block");
});

$(".gapop .title a").click(function(){
	$(".gapop").css("display","none");
});

// 중계기 등록하기 창
$(".jungpopbtn").click(function(){
	$("#jung_add").css("display","block");
});

$("#jung_add .title a").click(function(){
	$("#jung_add").css("display","none");
});

// 점멸기 등록하기 창

$(".jumpopbtn").click(function(){
	$("#jum_add").css("display","block");
});

$("#jum_add .title a").click(function(){
	$("#jum_add").css("display","none");
});

// iot점멸기 등록창

$(".iotpopbtn").click(function(){
	$("#iot_add").css("display","block");
});

$("#iot_add .title a").click(function(){
	$("#iot_add").css("display","none");
});




// 레이어겹칠때 --- 부장님께 한번...여쭤보기...!

var index = 1; //h2클릭시 안됨..해결해보기
function select(){
	var top = event.target;
	top.parentNode.style.zIndex = index;
	index++;
}

var num = 10;
function minisel(){
	var poptop = event.target;
	poptop.parentNode.style.zIndex = num;
	num++;
}

// 날씨
var swiper = new Swiper('.swiper', {
	direction: 'vertical', 
	loop: false, 
	autoplay : true
});


