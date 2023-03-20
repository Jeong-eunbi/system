//submenu 탭

const abox= document.querySelectorAll('ul.submenu_list > li');
const newi = document.createElement('i');
newi.className = 'fa-solid fa-check';

$("ul.submenu_list > li").click(function(){
    var order = $(this).index();

    for (i = 0 ; i < abox.length ; i++) { 
        if(i == order){ 
            for (j = 0 ; j < abox.length ; j++) { 
                if (j != order) {
                    abox[j].classList.remove('on');
                    abox[i].replaceChildren;
                }
            }
            if (abox[i].classList.contains("on")) {
                abox[i].replaceChildren;
            
        
            } else {
                abox[i].classList.add("on");
                abox[i].childNodes[1].prepend(newi);
            }
        }
    }

});




