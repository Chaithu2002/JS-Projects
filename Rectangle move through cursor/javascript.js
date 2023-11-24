window.addEventListener("mousemove", function(details){
    var rect = document.querySelector("#rect");
    gsap.to("#rect",{
        left: gsap.utils.mapRange(0,window.innerWidth,(100+rect.getBoundingClientRect().width/2),window.innerWidth-(100+rect.getBoundingClientRect().width/2),details.clientX) +"px"
    });
});