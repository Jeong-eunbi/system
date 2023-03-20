$(".title_tab li").click(function() {
    var idx = $(this).index();

    $(".title_tab li").removeClass("ontxt");
    $(".title_tab li").eq(idx).addClass("ontxt");
    $(".titlelist").hide();
    $(".titlelist").eq(idx).toggle();
});



$("#title1 ul.detail_tab li").click(function() {
    var oncolor = $(this).index();

    $("#title1 ul.detail_tab li").removeClass("onborder");
    $("#title1 ul.detail_tab li").eq(oncolor).addClass("onborder");
    $("#title1 .tab1").hide();
    $("#title1 .tab1").eq(oncolor).toggle();
});

$("#title2 ul.detail_tab li").click(function() {
    var oncolor1 = $(this).index();

    $("#title2 ul.detail_tab li").removeClass("onborder");
    $("#title2 ul.detail_tab li").eq(oncolor1).addClass("onborder");
    $("#title2 .tab1").hide();
    $("#title2 .tab1").eq(oncolor1).toggle();
});


$("#title3 ul.detail_tab li").click(function() {
    var oncolor3 = $(this).index();

    $("#title3 ul.detail_tab li").removeClass("onborder");
    $("#title3 ul.detail_tab li").eq(oncolor3).addClass("onborder");
    $("#title3 .tab1").hide();
    $("#title3 .tab1").eq(oncolor3).toggle();
});

// 파일선택
$("#file").on('change',function(){
    var fileName = $("#file").val();
    $(".file_name").val(fileName);
});

$("#file1").on('change',function(){
    var fileName = $("#file1").val();
    $(".file_name1").val(fileName);
});
$("#file2").on('change',function(){
    var fileName = $("#file2").val();
    $(".file_name2").val(fileName);
});
$("#file3").on('change',function(){
    var fileName = $("#file3").val();
    $(".file_name3").val(fileName);
});
$("#file4").on('change',function(){
    var fileName = $("#file4").val();
    $(".file_name4").val(fileName);
});

// 업체관리 팝업창
function companypop(){

    top.document.all.companyset.style.display="block";
}
$("#companypop").click(function(){
    $("#companyset").css("display","block");
});

$("#companyset .title a").click(function(){
    $("#companyset").css("display","none");
});


//도로조명 환경설정 selectbox
$("#submit").change(function(){
    $("#sub_val").val($("#submit").val());
});

$("#error").change(function(){
    $("#error_val").val($("#error").val());
});

$("#process").change(function(){
    $("#process_val").val($("#process").val());
});

$("#local_sel").change(function(){
    $("#local_name").val($("#local_sel").val());
});

$("#road").change(function(){
    $("#road_name").val($("#road").val());
});

function dong_ch(){
    const tmp = document.getElementById('areach');
    const str = tmp.options[tmp.selectedIndex].value;
    const word = str.split("/*/");

    $("#insert2").val($(word)[0]);
    $("#dong").val($(word)[1]);
}

//분전함상세보기
function doro_info(){
    top.document.all.doro_bun.style.display="block";
}

$("#doro_bun .title a").click(function(){
    $("#doro_bun").css("display","none");
});

// 도로조명 중계기
function jung_info(){
    top.document.all.doro_jung.style.display="block";
}
$("#doro_jung .title a").click(function(){
    $("#doro_jung").css("display","none");
});

//도로조명 점멸기
function jum_info(){
    top.document.all.doro_jum.style.display="block";
}
$("#doro_jum .title a").click(function(){
    $("#doro_jum").css("display","none");
});


function display(){
    if($("input:radio[id=click1]").is(":checked")){
        $(".pag").hide()
        $("#chk1box").css("display","block");
    }else{
        $("#chk1box").css("display","none");
        $("#chk2box").css("display","block");
    }
}


const datearrow = new Date();  
const currentYear = datearrow.getFullYear(); 
const today_yy = currentYear;

$("#year_title").text(currentYear);

// function prevbtn(){
//     i--;
//     document.getElementById("year_title").innerText = today_yy;
// }

// function nextbtn(){
//     i++;
//     document.getElementById("year_title").innerText = today_yy;
// }


// $('input[type="radio"]').on('click',function(){
//     if($('input[type="radio"]:checked')){
//         $("#chk1box").show();
//     }else{
//         $("#chk1box").hide();
//         $("#chk2box").show();
//     }
// });
