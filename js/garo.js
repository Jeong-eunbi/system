// 가로등 드래그

$("#garo1, #jung_sang").draggable({
    containment : 'html', 
    handle : '.title' 
});



// 가로등상세보기

// var garo_list = document.querySelectorAll('#garo1 ul.nav li a');

//처음 가로등 안에 탭 클릭시 보이는 전체 메뉴 활성화와 전체내용 보이기
// for(var j = 0; j < garo_list.length; j++){
//     if (j == 0) {
//         garo_list[j].className = "text text_active";
//     } else {
//         garo_list[j].className = "text";
//     }
// }

// for (var i = 0; i < garo_list.length; i++){
//     garo_list[i].addEventListener('click', function(e){

// 		// 가로등 안에 탭메뉴클릭시마다 활성화버튼, 내용 변경하기
// 		for(var j = 0; j < garo_list.length; j++){
// 			if (garo_list[j] == this) {
//                 garo_list[j].className = "text text_active";
// 			} else {
//                 garo_list[j].className = "text";
// 			}
// 		}
// 	});
// }

// 중계기상세보기 

// var jung_list = document.querySelectorAll('#jung_sang ul.nav li a');

// for(var j = 0; j < jung_list.length; j++){
//     if (j == 0) {
//         jung_list[j].className = "text text_active";
//     } else {
//         jung_list[j].className = "text";
//     }
// }

// for (var i = 0; i < jung_list.length; i++){
//     jung_list[i].addEventListener('click', function(e){
//         e.preventDefault();
// 		// 가로등 안에 탭메뉴클릭시마다 활성화버튼, 내용 변경하기
// 		for(var j = 0; j < jung_list.length; j++){
// 			if (jung_list[j] == this) {
//                 jung_list[j].className = "text text_active";
// 			} else {
//                 jung_list[j].className = "text";
// 			}
// 		}
// 	});
// }

$("#jung_sang .title a").click(function(){
    $("#jung_sang").css("display","none");
});


$("#jum_sang .title a").click(function(){
    $("#jum_sang").css("display","none");
});

// 가로등 이벤트선택 클릭시 창
$('document').ready(function(){
    $(".event_text").on('click',function(){
        $(".event_wrap").css("display","block");
    });

});

// const b = document.querySelector('.off');
// b.addEventListener('click', offscreen);
// function offscreen(){ 
//     $(".event_wrap").css("display","none");
// }

// 분수이벤트 클릭창
$(".event_text2").click(function(){
    $(".bunshow").css("display","block");
});
$(".bunchk .off2").click(function(){
    $(".bunshow").css("display","none");
});


// 분수대
var bunsu_list = document.querySelectorAll('#bunsu ul.nav li a');
var bunsu_tab = document.querySelectorAll('#bunsu .nav_list>div');

for(var j = 0; j < bunsu_list.length; j++){
    if (j == 0) {
        bunsu_tab[j].style.display = "flex";
        bunsu_list[j].className = "text text_active";
    } else {
        bunsu_tab[j].style.display = "none";
        bunsu_list[j].className = "text";
    }
}
for (var i = 0; i < bunsu_list.length; i++){
    bunsu_list[i].addEventListener('click', function(e){
        e.preventDefault();

		for(var j = 0; j < bunsu_list.length; j++){
			if (bunsu_list[j] == this) {
				bunsu_tab[j].style.display = "flex";
                bunsu_list[j].className = "text text_active";
			} else {
				bunsu_tab[j].style.display = "none";
                bunsu_list[j].className = "text";
			}
		}
	});
    
}





//가로등창닫기

function offbox(){
    $('#garo1').css('display','none');
}


//가로등 -기본정보-제어버튼-iframe
const control_btn = document.querySelector('#button');
const control_btn2 = document.querySelector('.mini a');


function fadein(){
    $(".iframe_box").css("display","block");
}
function fadeout(){
    $(".iframe_box").css("display","none");
}


//가로등 - 보수일지 - 추가버튼 -iframe
const add_btn =  document.querySelector('#button2');
const add_btn2 = document.querySelector('.iframebosu_box .mini a');


function on(){
    top.document.all.iframebosu_box.style.display="block";
}
function off(){
    $('.iframebosu_box').css('display','none');
}


