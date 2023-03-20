//펌프장

function pump_pop(){
    top.document.all.pump_resister.style.display="block"
}

function pump_info(){
    top.document.all.pump_info.style.display="block"
}



// 구형분수대 기본정보
$("#pump_info .title a").click(function(){
    $("#pump_info").css("display","none");
});

// 펌프장 등록
$("#pump_resister .title a").click(function(){
    $("#pump_resister").css("display","none");
});

// 구형분수대

var pump_list = document.querySelectorAll('#pump_info ul.nav li a');
var pump_tab = document.querySelectorAll('#pump_info .nav_list>div');

for(var j = 0; j < pump_list.length; j++){
    if (j == 0) {
        pump_tab[j].style.display = "flex";
        pump_list[j].className = "text text_active";
    } else {
        pump_tab[j].style.display = "none";
        pump_list[j].className = "text";
    }
}
for (var i = 0; i < pump_list.length; i++){
    pump_list[i].addEventListener('click', function(e){
        e.preventDefault();

		for(var j = 0; j < pump_list.length; j++){
			if (pump_list[j] == this) {
				pump_tab[j].style.display = "flex";
                pump_list[j].className = "text text_active";
			} else {
				pump_tab[j].style.display = "none";
                pump_list[j].className = "text";
			}
		}
	});
}