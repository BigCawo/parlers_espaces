
// carnet A4 10-2023

var SliderDetector = document.getElementById("myRangeD");

let wD = 1920
let hD = 1533
let nbr = 51;



SliderDetector.oninput = function() {
    p = this.value
    if (n<p){
            if(p<nbr+1)
            carouselContainer.style.transform="translateX("+(-p+1)*(wD)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hD)+"px)";
            carouselContainer.style.transition="all 0.5s ease";
            affichermasquer();
            }
    else {
        if(p>0)
            
            carouselContainer.style.transform="translateX("+(-p+1)*(wD)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hD)+"px)";

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


    carouselContainer = document.getElementById("carouselContainerD")
    lD = document.getElementById("lD")
    rD = document.getElementById("rD")
    carouselContainer.style.width = (wD*nbr)+"px";
    for( i = 1 ; i <= nbr; i++){
        div = document.createElement("div");
        div.className="carouselPhotoD"
        div.style.backgroundImage="url('../../assets/carnets/2023_05_A5/"+(i-1)+".jpg')";
        carouselContainer.appendChild(div);
    }
    affichermasquer();
    }

function resize(){

carouselScale = document.getElementById("carouselD")
carnetMargin = document.getElementById("carnetContainerD")
mainW = document.getElementById("main2").offsetWidth
sh = window.innerHeight
sw = window.innerWidth

t = (mainW - ((wD/hD)*0.8*sh))/2






if (t>=0){

    factor = sh/hD
    carouselScale.style.transform = "scale("+0.8*factor+")"
    carnetMargin.style.marginLeft = t+"px"

}
/*
else{

    factor = mainW/wD
    carouselScale.style.transform = "scale("+factor+")"
    carnetMargin.style.marginLeft = 0
}
*/
else{

    factor = mainW/wD
    carouselScale.style.transform = "scale("+factor+")"
    
    carnetMargin.style.marginLeft = 0
}







}

resize();

window.onresize=function(){
    
    resize();

}




    rD.onclick=function(){
        if(p<nbr+1)
            p++;
            SliderDetector.value = p
        carouselContainer.style.transform="translate("+(-p+1)*(wD)+"px)";
        carouselContainer.style.transition="all 0.5s ease";

       affichermasquer();

    }

    lD.onclick=function(){
        if(p>1)
            p--;
            SliderDetector.value = p
            
        carouselContainer.style.transform="translate("+(-p+1)*(wD)+"px)";
        carouselContainer.style.transition="all 0.5s ease";
        affichermasquer();
    }


  function affichermasquer(){
        if(p>=nbr)
            rD.style.visibility = "hidden";
        else
            rD.style.visibility = "visible";

        if(p<=1)
            lD.style.visibility = "hidden";
        else
            lD.style.visibility = "visible";

    }
    