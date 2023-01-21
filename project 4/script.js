var int=document.getElementById("chek");
var menu=document.getElementById("menu");
function toggle(){
    if(int.checked==true){
        menu.innerHTML="close";
    } else{
        menu.innerHTML="menu"
    }
}
