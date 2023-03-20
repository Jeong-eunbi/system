//총개수 구하기
// const count1 = $("#tablewrap table tbody tr").length;
// $('.txt >span.length').html(count);


//정렬
$('th').each(function (column) {
    $(this).click(function () {
        if ($(this).is('.asc')) {
            $(this).removeClass('asc');
            $(this).addClass('desc');
            sortdir = -1;
        } else {
            $(this).addClass('asc');
            $(this).removeClass('desc');
            sortdir = 1;
        }
        $(this).siblings().removeClass('asc');
        $(this).siblings().removeClass('desc');
        var rec = $('table').find('tbody>tr').get();
        rec.sort(function (a, b) {
            var val1 = $(a).children('td').eq(column).text().toUpperCase();
            var val2 = $(b).children('td').eq(column).text().toUpperCase();
            return (val1 < val2) ? -sortdir : (val1 > val2) ? sortdir : 0;
        });
        $.each(rec, function (index, row) {
            $('tbody').append(row);
        });
    });
});

//submenu 탭
var navbar = document.querySelectorAll('ul.submenu > li');
var navbarbtn = document.querySelectorAll('ul.submenu > li > a');
var menulist = document.querySelectorAll('ul.submenu_list');




$("ul.submenu > li").click(function() {
    var idx = $(this).index();

    for (i = 0 ; i < navbar.length ; i++) { 
        if(i == idx){ //내가 선택한 탭메뉴바와 탭메뉴가 일치했을때 block or none
            navbar[i].className = "click";
            menulist[i].style.display="block";
        }
        else{
            navbar[i].className = "subbar";
            menulist[i].style.display="none";
            
        }
    }
});



$("#open").click(function(){
    $(".qickmenu").toggleClass("menushow");
});


$("#bun_setbox .title a").click(function(){
    $("#bun_setbox").css("display","none");
});

$("#deng_error .title a").click(function(){
    $("#deng_error").css("display","none");
});

$("#jung_setbox .title a").click(function(){
    $("#jung_setbox").css("display","none");
});
$(".susin_info .title >a, .susin_info .off").click(function(){
    $(".susin_info").css("display","none");
});
//가로등 sms
$(".susin").click(function(){
    $(".susin_info").css("display","block");
});
$(".susin_info").draggable({
    containment : 'html', 
    handle : '.title' 
});

//보안등 sms
function smsadd_btn(){
    top.document.all.sms2.style.display="block";
}



$(".eventgamsi_pop").draggable({
    containment : 'html', 
    handle : '.mini' 
});


$(".user").click(function(){
    $(".user_info").css("display","block");
});
$(".user_info .title >a").click(function(){
    $(".user_info").css("display","none");
});

//가로등 사용자추가
$(".user_addbtn").click(function(){
    $(".user_add").css("display","block");
});
$(".user_add .title >a").click(function(){
    $(".user_add").css("display","none");
});

// sms수신자추가
$(".susin_addbtn").click(function(){
    $(".susin_add").css("display","block");
});
$(".susin_add .title >a").click(function(){
    $(".susin_add").css("display","none");
});

// 보안등 수신자
$(".boansu_btn").click(function(){
    $(".boansu_add").css("display","block");
});

$(".boansu_add .title >a").click(function(){
    $(".boansu_add").css("display","none");
});

$("#imgbox").draggable({
    containment : 'html', 
    handle : '.mini' 
});


//sms(체크박스 없는 팝업)
$("#sms1 .title a").click(function(){
    $("#sms1").css("display","none");
});
$("#sms2 .title a").click(function(){
    $("#sms2").css("display","none");
});

$("#sms1, #sms2").draggable({
    containment : 'html', 
    handle : '.title' 
});

$("#garosms_info, #garosms_add").draggable({
    containment : 'html', 
    handle : '.title' 
});

//sms (체크있는 팝업)
$(".susininfo1 .title a").click(function(){
    $(".susininfo1").css("display","none");
});
$(".susinadd2 .title a").click(function(){
    $(".susinadd2").css("display","none");
});

$("#garosms_info .title a").click(function(){
    $("#garosms_info").css("display","none");
});
$("#garosms_add .title a").click(function(){
    $("#garosms_add").css("display","none");
});

// 가로등 전체제어
function bunshow(){
    top.document.all.bun_controlbox.style.display="block";
}
function infopop1(){
    top.document.all.garo2.style.display="block";
}

function setshow(){
    top.document.all.bun_setbox.style.display="block";
}

function delpop(){
    top.document.all.delbox.style.display="block";
}

function error_set(){
    top.document.all.deng_error.style.display="block";
}
function old_cont(){
    top.document.all.oldbunsu.style.display="block";
}

function photobtn(){
    top.document.all.imgbox.style.display="block";
}
$("#imgbox .mini a").click(function(){
    $("#imgbox").css("display","none");
});

//계정관리 사용자 정보 및 사용자 추가 팝업창
function useradd_btn(){
    top.document.all.user_add.style.display="block";
}
function info_click(){
    top.document.all.user_info.style.display="block";
}
// 분전함등록
function bunpopbtn(){
    top.document.all.bun_addbox.style.display="block";
}
$("#bun_addbox .title a").click(function(){
    $("#bun_addbox").css("display","none");
});


// 가로등등록
function gapopbtn(){
    top.document.all.gapop.style.display="block";
}
$("#gapop .title a").click(function(){
    $("#gapop").css("display","none");
});

// 중계기등록
function jungpopbtn(){
    top.document.all.jung_add.style.display="block";
}
// 점멸기등록
function jumpopbtn(){
    top.document.all.jum_add.style.display="block";
}

// 분수대등록
function bunsupopbtn(){
    top.document.all.bunsuaddpop.style.display="block";
}
// 경관조명등록
function bunlampbtn(){
    top.document.all.bunlamp_add.style.display="block";
}

// 경관조명 상세보기
function roadlamp_info(){
    top.document.all.bunsulamp.style.display="block";
}
$("#bunsulamp .title a").click(function(){
    $("#bunsulamp").css("display","none");
});



// 경관조명연결
function linkbtn(){
    top.document.all.lamp_linkpop.style.display="block";
}
$("#lamp_linkpop .title a").click(function(){
    $("#lamp_linkpop").css("display","none");
});


// 보안등 중계기
function jung_info(){
    top.document.all.jung_sang.style.display="block";
}
function jung_show(){
    top.document.all.jung_controlbox.style.display="block";
}

function j_setbox(){
    top.document.all.jung_setbox.style.display="block";
}

// 보안등 점멸기
function jum_info(){
    top.document.all.jum_sang.style.display="block"
}

function eventcont_pop(){
    top.document.all.eventgamsi_pop.style.display="block"
}
//iot 점멸기
function iotpopbtn(){
    top.document.all.iot_add.style.display="block"
}

//점멸기 삭제내역 팝업창
function del_viewer(){
    top.document.all.iotdelbox.style.display="block"
}

//분수대 팝업창
function bunsuinfo(){
    top.document.all.bunsu.style.display="block"
}

function bunshow1(){
    top.document.all.bun_controlbox.style.display="block";
}

$("#bunsu .title a").click(function(){
    $("#bunsu").css("display","none");
});

// 분수대, 경관조명 등록창닫기
$("#bunsuaddpop .title a").click(function(){
    $("#bunsuaddpop").css("display","none");
});

$("#bunlamp_add .title a").click(function(){
    $("#bunlamp_add").css("display","none");
});

$("#eventgamsi_pop .mini a").click(function(){
    $("#eventgamsi_pop").css("display","none");
});

$("#oldbunsu .title a").click(function(){
    $("#oldbunsu").css("display","none");
});

$("#lamp_linkpop .mini a").click(function(){
    $("#lamp_linkpop").css("display","none");
});

// 보안등 삭제내역 팝업창
$("#iotdelbox .title a").click(function(){
    $("#iotdelbox").css("display","none");
});


//분수대
function bunsu_all(){
    top.document.all.bunsuall.style.display="block"
}

$("#bunsuall .title a").click(function(){
    $("#bunsuall").css("display","none");
});


function bunsupop_btn(){
    top.document.all.bunsu_contpop.style.display="block"
}
$("#bunsu_contpop .mini a").click(function(){
    $("#bunsu_contpop").css("display","none");
});



// 구형분수대 제어
function oldbunsu_btn(){
    top.document.all.oldbunsu_contpop.style.display="block"
}
$("#oldbunsu_contpop .mini a").click(function(){
    $("#oldbunsu_contpop").css("display","none");
});

//보안등 보수일지
function bosu_write(){
    $(parent.document).find("#bosu-note").css("display","block");
}


$("#bosu-note .title a").click(function(){
    $("#bosu-note").css("display","none");
});


//보안등 내역보기 이벤트 창

// 수신자
function susin_infopop(){
    top.document.all.sms1.style.display="block"
}


// sms수신자 추가(체크있는 sms)
function garosms1(){
    top.document.all.garosms_add.style.display="block";
}
function garosms2(){
    top.document.all.garosms_info.style.display="block";
}

//상세검색 팝업창

// 분전
function searchpop(){
    top.document.all.seachpop1.style.display="block";
}
function off_screen(){
    seachpop1.style.display="none";
}


function searchpop2(){
    top.document.all.boan_searchpop2.style.display="block";
}
function off_screen2(){
    boan_searchpop2.style.display="none";
}

// 점멸기,명령 검색일자 창
function searchpop3(){
    top.document.all.boan_searchpop3.style.display="block";
}

function off_screen3(){
    boan_searchpop3.style.display="none";
}

// 상세검색 보수내역입력창
function searchpop_bosu(){
    top.document.all.bosu_searchpop2.style.display="block";
}
function offbtn(){
    bosu_searchpop2.style.display="none";
}

function searchpop_blue(){
    top.document.all.blue_searchpop.style.display="block";
}
function offbtn3(){
    blue_searchpop.style.display="none";
}

// sms 상세검색

function sms_searchpop(){
    top.document.all.smspop1.style.display="block";
}
function sms_off(){
    smspop1.style.display="none";
}

//user 상세검색

function userpop_btn(){
    top.document.all.userpop.style.display="block";
}
function user_off(){
    userpop.style.display="none";
}
//분수

function bunsu_popbtn1(){
    top.document.all.bunsu_searchpop1.style.display="block";
}
function bunsu_off1(){
    bunsu_searchpop1.style.display="none";
}

function bunsu_popbtn2(){
    top.document.all.bunsu_searchpop2.style.display="block";
}
function bunsu_off2(){
    bunsu_searchpop2.style.display="none";
}

// 도로조명 자재입출고
function doro_btn(){
    top.document.all.dorosearch_pop.style.display="block";
}
function doro_off1(){
    dorosearch_pop.style.display="none";
}



