
// carnet A4 10-2023

var SliderDetector = document.getElementById("myRangeC");

let wC = 1920
let hC = 1390
let nbr = 59;



SliderDetector.oninput = function() {
    p = this.value
    if (n<p){
            if(p<nbr+1)
            carouselContainer.style.transform="translateX("+(-p+1)*(wC)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hC)+"px)";
            carouselContainer.style.transition="all 0.5s ease";
            affichermasquer();
            }
    else {
        if(p>0)
            
            carouselContainer.style.transform="translateX("+(-p+1)*(wC)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hC)+"px)";

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


    carouselContainer = document.getElementById("carouselContainerC")
    lC = document.getElementById("lC")
    rC = document.getElementById("rC")
    carouselContainer.style.width = (wC*nbr)+"px";
    for( i = 1 ; i <= nbr; i++){
        div = document.createElement("div");
        div.className="carouselPhotoC"
        div.style.backgroundImage="url('../../assets/carnets/2023_10_A5/"+(i-1)+".jpg')";
        carouselContainer.appendChild(div);
    }
    affichermasquer();
    }

function resize(){

carouselScale = document.getElementById("carouselC")
carnetMargin = document.getElementById("carnetContainerC")
mainW = document.getElementById("main2").offsetWidth
sh = window.innerHeight
sw = window.innerWidth

t = (mainW - ((wC/hC)*0.8*sh))/2






if (t>=0){

    factor = sh/hC
    carouselScale.style.transform = "scale("+0.8*factor+")"
    carnetMargin.style.marginLeft = t+"px"

}
/*
else{

    factor = mainW/wC
    carouselScale.style.transform = "scale("+factor+")"
    carnetMargin.style.marginLeft = 0
}
*/
else{

    factor = mainW/wC
    carouselScale.style.transform = "scale("+factor+")"
    
    carnetMargin.style.marginLeft = 0
}







}

resize();

window.onresize=function(){
    
    resize();

}




    rC.onclick=function(){
        if(p<nbr+1)
            p++;
            SliderDetector.value = p
        carouselContainer.style.transform="translate("+(-p+1)*(wC)+"px)";
        carouselContainer.style.transition="all 0.5s ease";

       affichermasquer();

    }

    lC.onclick=function(){
        if(p>1)
            p--;
            SliderDetector.value = p
            
        carouselContainer.style.transform="translate("+(-p+1)*(wC)+"px)";
        carouselContainer.style.transition="all 0.5s ease";
        affichermasquer();
    }


  function affichermasquer(){
        if(p>=nbr)
            rC.style.visibility = "hidden";
        else
            rC.style.visibility = "visible";

        if(p<=1)
            lC.style.visibility = "hidden";
        else
            lC.style.visibility = "visible";

    }
    