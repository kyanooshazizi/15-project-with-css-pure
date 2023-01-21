var x=document.getElementById("arrow");
var z=document.querySelectorAll(".gallery [class*='img-show']");
var y=document.querySelectorAll(".wrapper input[id*='im']")
// console.log(z)
function galleryright(){
    y.forEach((aa)=>{
        if(aa.checked==true){
        //    console.log(typeof aa.id)
          var num= aa.id.split("");
          if(Number(num[num.length-1])<3){
            var p=( Number(num[num.length-1])+1);
            aa.id="im"+p;
            aa.checked==true
          }
          console.log(aa)

        }
// console.log(aa.checked)
    })
}
function galleryleft(){
    y.forEach((aa)=>{
        if(aa.checked==true){
        //    console.log(typeof aa.id)
          var num= aa.id.split("");
          if(Number(num[num.length-1])>1){
            var p=( Number(num[num.length-1])-1);
            aa.id="im"+p;
            aa.checked==true
          }
          console.log(aa)

        }
// console.log(aa.checked)
    })
}