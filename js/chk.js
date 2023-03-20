
// 가로등
function checksel(){
    const chkbox = document.querySelectorAll('.chk');
    const checked = document.querySelectorAll('chk:checked');
    const checkAll = document.querySelector('.checkall');
    if(chkbox.length == checked.length){
        checkAll.checked = true;

    }else{
        checkAll.checked = false;
    }
}
function checkAll(checkAll){
    const boxes = document.getElementsByName('list');
    boxes.forEach((checkbox) => {
        checkbox.checked = checkAll.checked;

    });
}