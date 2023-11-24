var rect = document.querySelector("#rectangle");

rect.addEventListener("mouseover", function(details){
    var rectPosition = rect.getBoundingClientRect();
    var xAxis = details.x;
    var cursorPointerInRect = xAxis - rectPosition.left;


    if(cursorPointerInRect < rectPosition.width/2){
        var redColor = gsap.utils.mapRange(0,rectPosition.width/2,255,0,cursorPointerInRect);
        gsap.to(rect,{
            backgroundColor: `rgb(${redColor},0,0)`
        })
    }
    else{
        var blueColor = gsap.utils.mapRange(rectPosition.width/2,rectPosition.width,0,255,cursorPointerInRect);
        gsap.to(rect,{
            backgroundColor: `rgb(0,0,${blueColor})`    
        })
    }
})