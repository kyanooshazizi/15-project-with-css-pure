
    const x=document.querySelector('.cart');
    const y=document.querySelector('.click');
    console.log(x.classList);
    y.addEventListener("click",()=>{
        x.classList.add("animate__animated", "animate__zoomInUp");
    })
