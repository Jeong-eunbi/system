


let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', vh+"px");
// resize
window.addEventListener("resize", ()=>{
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', vh+"px");
})

