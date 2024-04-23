
// carnet A4 10-2023

var SliderDetector = document.getElementById("myRangeA");

let wA = 595
let hA = 842
let nbr = 8;



SliderDetector.oninput = function() {
    p = this.value
    if (n<p){
            if(p<nbr+1)
            carouselContainer.style.transform="translateX("+(-p+1)*(wA)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hA)+"px)";
            carouselContainer.style.transition="all 0.5s ease";
            affichermasquer();
            }
    else {
        if(p>0)
            
            carouselContainer.style.transform="translateX("+(-p+1)*(wA)+"px)";
            // carouselContainer.style.transform="translateY("+(-p+1)*(hA)+"px)";

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


    carouselContainer = document.getElementById("carouselContainerA")
    l = document.getElementById("lA")
    r = document.getElementById("rA")
    carouselContainer.style.width = (wA*nbr)+"px";
    for( i = 1 ; i <= nbr; i++){
        div = document.createElement("div");
        div.className="carouselPhotoA"
        div.style.backgroundImage="url('../../assets/pol-dossiertechnique/dossier technique-0"+(i)+".svg')";
        div.style.scrollSnapAlign = "start"
        carouselContainer.appendChild(div);
    }
    affichermasquer();
    }

function resize(){

carouselScale = document.getElementById("carouselA")
carnetMargin = document.getElementById("carnetContainerA")
buttonScale = document.getElementById("navBar")
mainW = document.getElementById("main2").offsetWidth
mainH = document.getElementById("main2").offsetHeight
main = document.getElementById("main2")

carouselH = document.getElementById("carouselA").offsetHeight
sh = window.innerHeight
sw = window.innerWidth

t = (mainW - ((wA/hA)*sh))/2

// document.getElementById("input").innerHTML= document.getElementById("carouselA").scrollLeft






if (t>=0){

    factor = sh/hA
    carouselScale.style.transform = "scale("*factor+")"
    carnetMargin.style.marginLeft = t+"px"
    carouselScale.style.marginTop = 0

}
/*
else{

    factor = mainW/wA
    carouselScale.style.transform = "scale("+factor+")"
    carnetMargin.style.marginLeft = 0
}
*/
else{

    factor = mainW/wA
    carouselScale.style.transform = "scale("+factor+")"


}







}

resize();

window.onresize=function(){
    
    resize();

}




    rA.onclick=function(){
        if(p<nbr+1)
            p++;
            SliderDetector.value = p
        carouselContainer.style.transform="translate("+(-p+1)*(wA)+"px)";
        carouselContainer.style.transition="all 0.5s ease";

       affichermasquer();

    }

    lA.onclick=function(){
        if(p>1)
            p--;
            SliderDetector.value = p
            
        carouselContainer.style.transform="translate("+(-p+1)*(wA)+"px)";
        carouselContainer.style.transition="all 0.5s ease";
        affichermasquer();
    }


  function affichermasquer(){
        if(p>=nbr)
            r.style.visibility = "hidden";
        else
            r.style.visibility = "visible";

        if(p<=1)
            l.style.visibility = "hidden";
        else
            l.style.visibility = "visible";

    }
    