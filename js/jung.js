// 중계기

// 통신시험 팝업
function testbtn(){
    $(parent.document).find("#tongsin").css("display","block");
}

$("#tongsin .mini a").click(function(){
    $("#tongsin").css("display","none");
});

// 채널설정팝업
function channelbtn(){
    $(parent.document).find("#channelbox").css("display","block");
}
$("#channelbox .mini a").click(function(){
    $("#channelbox").css("display","none");
});

//경로설정
function routebtn(){
    $(parent.document).find("#routebox").css("display","block");
}
$("#routebox .mini a").click(function(){
    $("#routebox").css("display","none");
});


// 이벤트

function jung_event(){
    $(parent.document).find("#jungeventbox").css("display","block");
}
$("#jungeventbox .mini a").on('click',function(){
    $("#jungeventbox").css("display","none");
});

// 점멸기


// 점멸기제어팝업
function jumcont_btn(){
    $(parent.document).find("#jum_control").css("display","block");
}
$("#jum_control .mini a").click(function(){
    $("#jum_control").css("display","none");
});

//점멸기이벤트팝업
function jum_event(){
    $(parent.document).find("#jum_eventbox").css("display","block");
}
$("#jum_eventbox .mini a").click(function(){
    $("#jum_eventbox").css("display","none");
});

function elbbtn(){
    $(parent.document).find("#elbbox").css("display","block");
}

$("#elbbox .mini a").click(function(){
    $("#elbbox").css("display","none");
});