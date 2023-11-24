
var center=document.querySelector("#center");
     
// Throttling Function
const throttleFunction=(func, delay)=>{
     
    let prev = 0; 
    return (...args) => {
        let now = new Date().getTime(); 

        // console.log(now-prev, delay); 

        if(now - prev> delay){ 
          prev = now;
          return func(...args);  
        }
    }
}


center.addEventListener("mousemove", throttleFunction((details)=>{

    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = details.clientX + 'px';
    div.style.top = details.clientY+ 'px';

    var img = document.createElement("img");
    img.setAttribute('src',"https://images.unsplash.com/photo-1700495405574-dceab5cc64b8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8");
    div.appendChild(img);

    gsap.to(img,{
        y:"0",
        ease: Power2,
        duration: .6
    });

    gsap.to(img,{
        y:"100%",
        delay: .3,
        ease: Power2,
        duration: .6
    });

    document.body.appendChild(div);

    setTimeout(function(){
        div.remove();
    },1000)

}, 500));