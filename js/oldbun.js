//분수대
function old_info(){
    top.document.all.oldbun_info.style.display="block"
}
function oldadd_pop(){
    top.document.all.old_resister.style.display="block"
}
// 구형분수대
$("#oldbun_info .title a").click(function(){
    $("#oldbun_info").css("display","none");
});

// 구형분수대 등록
$("#old_resister .title a").click(function(){
    $("#old_resister").css("display","none");
});



// 구형분수대

var old_list = document.querySelectorAll('#oldbun_info ul.nav li a');
var old_tab = document.querySelectorAll('#oldbun_info .nav_list>div');

for(var j = 0; j < old_list.length; j++){
    if (j == 0) {
        old_tab[j].style.display = "flex";
        old_list[j].className = "text text_active";
    } else {
        old_tab[j].style.display = "none";
        old_list[j].className = "text";
    }
}
for (var i = 0; i < old_list.length; i++){
    old_list[i].addEventListener('click', function(e){
        e.preventDefault();

		for(var j = 0; j < old_list.length; j++){
			if (old_list[j] == this) {
				old_tab[j].style.display = "flex";
                old_list[j].className = "text text_active";
			} else {
				old_tab[j].style.display = "none";
                old_list[j].className = "text";
			}
		}
	});
}