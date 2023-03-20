
//지역설정 select값  input 입력
$("#local_sel").change(function(){
    $("#local_name").val($("#local_sel").val());
});


$("#road").change(function(){
    $("#road_name").val($("#road").val());
});

$("#group").change(function(){
    $("#group_name").val($("#group").val());
});
//select값 가져오기

function dong_ch(){
    const tmp = document.getElementById('areach');
    const str = tmp.options[tmp.selectedIndex].value;
    const word = str.split("/*/");

    $("#insert2").val($(word)[0]);
    $("#dong").val($(word)[1]);
}

// 램프설정 select값  input 입력
$("#deng").change(function(){
    $("#lampvalue").val($("#deng").val());
});

$("#num").change(function(){
    $("#insert2").val($("#num").val());
});

$("#sett").change(function(){
    $("#setvalue").val($("#sett").val());
});




// 등고장설정팝업
$("ul.submenu >li.subbar >ul.submenulist > li a#deng_set").click(function(){
    $(".errorbox").css("display","block");
});


// 보안등 통계자료 테이블 팝업
$(".state_pop .title a").click(function(){
    $(".state_pop").css("display","none");
});

$("table#dengtype tbody tr td").click(function(){
    $("#state_pop1").css("display","block");
});
$("table#botype tbody tr td").click(function(){
    $("#state_pop3").css("display","block");
});
$("table.amount tbody tr td").click(function(){
    $("#state_pop2").css("display","block");
});
$("table.settype tbody tr td").click(function(){
    $("#state_pop4").css("display","block");
});
$("table.boanlist tbody tr td").click(function(){
    $("#state_pop5").css("display","block");
});
$("table.junglist tbody tr td").click(function(){
    $("#state_pop6").css("display","block");
});

$(".state_pop").draggable({
    containment : 'html', 
    handle : '.title' 
});

// iot통계
$("table.iot_tong tbody tr td").click(function(){
    $("#state_pop2").css("display","block");
});
$("table#iot3 tbody tr td").click(function(){
    $("#state_pop3").css("display","block");
});
$("table.set_type2 tbody tr td").click(function(){
    $("#state_pop4").css("display","block");
});


// 테이블 행열 제목 가져오기

// var rowcol = document.querySelectorAll("#state_pop1 .title h2");
// var titlebox = rowcol.createElement("span");

// $(".state_poplist tr td:not(td:first-child, td:last-child)").click(function(){

// });

// function tdclick(){
//     var table = document.getElementById('dengtype');
//     var rowlist = table.rows;
//     var th = document.getElementById('dengtype').getElementsByTagName("th");
    

//     for(i = 1; i< rowlist.length(); i++){
//         var row = rowlist[i];
//         var str ="";

//         row.onclick = function(){
//             return function(){
//                 var resion = this.cells[0].innerHTML;
              

//             };
//         };
//     }
// }


