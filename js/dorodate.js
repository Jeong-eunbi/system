
const datearrow = new Date();  
const currentYear = datearrow.getFullYear(); 
const i = currentYear;

document.getElementById("year_title").innerText = currentYear;

function prevbtn(){
    
    i--;
    document.getElementById("year_title").innerText = i;
}

function nextbtn(){
    i++;
    document.getElementById("year_title").innerText = i;
}