// function find_date(){

// }
const today = new Date();  
const currentMonth = today.getMonth(); 
$('.year-month').text(currentMonth + 1 + "월");




function prevbtn(){
    --i;
    $(".year-month").text(today.getMonth() - i + "월");
}



function nextbtn(){
    ++i;
    $(".year-month").text(today.getMonth() + i + "월");
    
}


// function nextbtn(){
//     i++;
//     document.getElementById("year_title").innerText = today_yy;
// }

