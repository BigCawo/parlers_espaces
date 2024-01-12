
// carnet A5 01-2023

var SliderDetector = document.getElementById("myRangeB");

let wB = 1920
let hB = 1396
let nbr = 29;



SliderDetector.oninput = function() {
    p = this.value
    if (n<p){
            if(p<nbr+1)
            carouselContainer.style.transform="translateX("+(-p+1)*(wB)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hB)+"px)";
            carouselContainer.style.transition="all 0.5s ease";
            affichermasquer();
            }
    else {
        if(p>0)
            
            carouselContainer.style.transform="translateX("+(-p+1)*(wB)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hB)+"px)";

            carouselContainer.style.transition="all 0.5s ease";
            affichermasquer();
            
    }
    n =this.value

}

document.body.onload=function(){



    resize();
    SliderDetector.value = 1
    p = SliderDetector.value;
    n = SliderDetector.value;


    carouselContainer = document.getElementById("carouselContainerB")
    lB = document.getElementById("lB")
    rB = document.getElementById("rB")
    carouselContainer.style.width = (wB*nbr)+"px";
    for( i = 1 ; i <= nbr; i++){
        div = document.createElement("div");
        div.className="carouselPhotoB"
        div.style.backgroundImage="url('../../assets/carnets/2023_01_A5/"+i+".jpg')";
        carouselContainer.appendChild(div);
    }
    affichermasquer();
    }

function resize(){

carouselScale = document.getElementById("carouselB")
carnetMargin = document.getElementById("carnetContainerB")
mainW = document.getElementById("main2").offsetWidth
sh = window.innerHeight
sw = window.innerWidth

t = (mainW - ((wB/hB)*0.8*sh))/2






if (t>=0){

    factor = sh/hB
    carouselScale.style.transform = "scale("+0.8*factor+")"
    carnetMargin.style.marginLeft = t+"px"

}
/*
else{

    factor = mainW/wB
    carouselScale.style.transform = "scale("+factor+")"
    carnetMargin.style.marginLeft = 0
}
*/
else{

    factor = mainW/wB
    carouselScale.style.transform = "scale("+factor+")"
    
    carnetMargin.style.marginLeft = 0
}







}

resize();

window.onresize=function(){
    
    resize();

}




    rB.onclick=function(){
        if(p<nbr+1)
            p++;
            SliderDetector.value = p
        carouselContainer.style.transform="translate("+(-p+1)*(wB)+"px)";
        carouselContainer.style.transition="all 0.5s ease";

       affichermasquer();

    }

    lB.onclick=function(){
        if(p>1)
            p--;
            SliderDetector.value = p
            
        carouselContainer.style.transform="translate("+(-p+1)*(wB)+"px)";
        carouselContainer.style.transition="all 0.5s ease";
        affichermasquer();
    }


  function affichermasquer(){
        if(p>=nbr)
            rB.style.visibility = "hidden";
        else
            rB.style.visibility = "visible";

        if(p<=1)
            lB.style.visibility = "hidden";
        else
            lB.style.visibility = "visible";

    }
    