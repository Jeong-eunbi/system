
document.addEventListener("DOMContentLoaded",function(){

    /*                분전함 상세보기 팝업창                 */
    
    //도어락 탭
    const lock_list = document.querySelectorAll('.doorbox ul.nav li a');
    const lock_tab = document.querySelectorAll('.doorbox>div');

    for(var j = 0; j < lock_list.length; j++){
        if (j == 0) {
            lock_tab[j].style.display = "block";
            lock_list[j].className = "text text_active";
        } else {
            lock_tab[j].style.display = "none";
            lock_list[j].className = "text";
        }
    }

    for (var i = 0; i < lock_list.length; i++){
        lock_list[i].addEventListener('click', function(e){
            
            e.preventDefault();

            for(var j = 0; j < lock_list.length; j++){
                if (lock_list[j] == this) {
                    lock_tab[j].style.display = "block";
                    lock_list[j].className = "text text_active";
                } else {
                    lock_tab[j].style.display = "none";
                    lock_list[j].className = "text";
                }
            }
        });
    }

    //분전함창보기
    // $("header .menu .table_list .scroll tbody tr td:nth-child(1)").on('click',function(){
    //     $('#garo2').css('display','block');
    // });
    


    //분전함창닫기
    $("#garo2 .title a").on('click',function(){
        $("#garo2").css("display","none");
    });


    // 분전함 숨은메뉴(플로팅바 슬라이드 다운)
    $(".floating_menu>a").click(function(){
        $(".floating_icon").slideToggle();
    });


    // 분전함드래그
    $("#garo2").draggable({
        containment : 'html', 
        handle : '.title' 
    });

    /* 페이지 */
    
    // 분전함 감시내역 이벤트 클릭시 창 
    $(".event_text2").on('click',function(){
        $(".event_wrap2").css("display","block");
    });


    //파일이름 
    $("#upload1").on('change',function(){
        var fileName = $(this).val();
        $(this).next().val(fileName);
    });
    $("#upload1").on('change',function(){
        var fileName = $(this).val();
        $(this).next().val(fileName);
    });
    $("#upload2").on('change',function(){
        var fileName = $(this).val();
        $(this).next().val(fileName);
    });
    $("upload3").on('change',function(){
        var fileName = $(this).val();
        $(this).next().val(fileName);
    });
});

//분전함 가로등 상시격등, 등watt일괄변경 팝업

function bunchange_btn(){
    top.document.all.dengchange_box.style.display="block";
}

$("#dengchange_box .mini a").on('click',function(){
    $("#dengchange_box").css("display","none");
});

function dengchange_btn(){
    top.document.all.dengchange_box2.style.display="block";
}

$("#dengchange_box2 .mini a").on('click',function(){
    $("#dengchange_box2").css("display","none");
});

// 분전함상세보기> 가로등>정보 클릭시 팝업창 열기
$(".bun_tab5 .garobtn1").on('click',function(){
    $(parent.document).find("#garo1").css("display","block");
});


//PLC > DIMM예약 창 드래그
$(".dimm_reservation").draggable({
    containment : 'html', 
    handle : '.mini' 
});


// 전력값보기드래그
$(".dimm_view").draggable({
    containment : 'html', 
    handle : '.mini' 
});





function bun_event(){
    $(parent.document).find("#buneventbox").css("display","block");
}
//보수일지, 작업내용 추가 팝업창
function on(){
    $(parent.document).find("#iframebosu_box").css("display","block");
}

$(".iframebosu_box .mini a").on('click',function(){
    $(".iframebosu_box").css("display","none");
});


//주소변경 
function addressbtn(){
    $(parent.document).find("#addchange").css("display","block");
}
// 주소변경클릭시 주소변경창 닫기
$("#addchange .mini a").on('click',function(){
    $("#addchange").css("display","none");
});

// 도어락관리 클릭시 팝업창보여주기
function lockbtn(){
    $(parent.document).find("#doorlock").css("display","block");
}

//도어락팝업창닫기
$(".doorlock .mini a").on('click',function(){
    $(".doorlock").css("display","none");
});


// 제어버튼 클릭시 팝업창보여주기
function bun_contbtn(){
    $(parent.document).find("#controlbox").css("display","block");
}
$("#controlbox .mini a").click(function(){
    $("#controlbox").css("display","none");
});


$("#bun_controlbox .mini a").on('click',function(){
    $(parent.document).find("#bun_controlbox").css("display","none");
});
$("#bun_controlbox .mini a").click(function(){
    $("#bun_controlbox").css("display","none");
});


 // dimm예약팝업창 열기
 $(".dimm_btn").click(function(){
    $(parent.document).find("#dimm_reservation").css("display","block");
});
//PLC > DIMM예약 창닫기
$("#dimm_reservation .mini a").on('click',function(){
    $("#dimm_reservation").css("display","none");
});

//PLC > DIMM일괄변경창 열기
$(".dimm_chbtn").on('click',function(){
    $(parent.document).find("#dimchange_box").css("display","block");
});
//PLC > DIMM일괄변경창 닫기
$("#dimchange_box .mini a").on('click',function(){
    $("#dimchange_box").css("display","none");
});

//등주예약팝업창열기
$(".deng_btn").on('click',function(){
    $(parent.document).find(".dengre_box").css("display","block");
});

//등주예약팝업창닫기
$(".dengre_box .mini a").on('click',function(){
    $(".dengre_box").css("display","none");
});


//전력값보기 팝업창
$("#dimm_view .mini a").click(function(){
    $(parent.document).find("#dimm_view").css("display","none");
});

function dimview_btn(){
    $(parent.document).find("#dimm_view").css("display","block");
}

// 감시내역 이벤트정보 팝업창
$("#buneventbox .mini a").on('click',function(){
    $("#buneventbox").css("display","none");
});

$("#jung_controlbox .title a").on('click',function(){
    $("#jung_controlbox").css("display","none");
});