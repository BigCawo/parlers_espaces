// index.js





// Get the root element
var root = document.documentElement;
var style = getComputedStyle(root);



let projectValue = 0;
let center = document.getElementById("center");
let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let supervoil = 0;
let voile = document.getElementById("filter");
let spawnState = 0;
let wDesc = Number(style.getPropertyValue('--w-desc'));


//mediaqueries

Mq480.addEventListener("change", function() {
   
    descSpawn(1);
}); 





function loadValues() {
    projectHilight(projectValue)
    scaleFactor = Number(style.getPropertyValue('--scaleFactor'));

    pOllas = Number(document.getElementById("buttonOllas").offsetLeft);
    wOllas = Number(document.getElementById("buttonOllas").offsetWidth);
    hOllas = Number(document.getElementById("buttonOllas").offsetHeight);

    pChaiseAttache = Number(document.getElementById("buttonChaiseAttache").offsetLeft);
    wChaiseAttache = Number(document.getElementById("buttonChaiseAttache").offsetWidth);
    hChaiseAttache = Number(document.getElementById("buttonChaiseAttache").offsetHeight);

    pNasa = Number(document.getElementById("buttonNasa").offsetLeft);
    wNasa = Number(document.getElementById("buttonNasa").offsetWidth);
    hNasa = Number(document.getElementById("buttonNasa").offsetHeight);

    pMeubleBazar = Number(document.getElementById("buttonMeubleBazar").offsetLeft);
    wMeubleBazar = Number(document.getElementById("buttonMeubleBazar").offsetWidth);
    hMeubleBazar = Number(document.getElementById("buttonMeubleBazar").offsetHeight);

    pPol = Number(document.getElementById("buttonPol").offsetLeft);
    wPol = Number(document.getElementById("buttonPol").offsetWidth);
    hPol = Number(document.getElementById("buttonPol").offsetHeight);

    pTableBasse = Number(document.getElementById("buttonTableBasse").offsetLeft);
    wTableBasse = Number(document.getElementById("buttonTableBasse").offsetWidth);
    hTableBasse = Number(document.getElementById("buttonTableBasse").offsetHeight);

    pMobilierGrillage = Number(document.getElementById("buttonMobilierGrillage").offsetLeft);
    wMobilierGrillage = Number(document.getElementById("buttonMobilierGrillage").offsetWidth);
    hMobilierGrillage = Number(document.getElementById("buttonMobilierGrillage").offsetHeight);

    pLampeColette = Number(document.getElementById("buttonLampeColette").offsetLeft);
    wLampeColette = Number(document.getElementById("buttonLampeColette").offsetWidth);
    hLampeColette = Number(document.getElementById("buttonLampeColette").offsetHeight);

    pLampeIcosaedre = Number(document.getElementById("buttonLampeIcosaedre").offsetLeft);
    wLampeIcosaedre = Number(document.getElementById("buttonLampeIcosaedre").offsetWidth);
    hLampeIcosaedre = Number(document.getElementById("buttonLampeIcosaedre").offsetHeight);

    pAPropos = Number(document.getElementById("buttonAPropos").offsetLeft);
    wAPropos = Number(document.getElementById("buttonAPropos").offsetWidth);
    hAPropos = Number(document.getElementById("buttonAPropos").offsetHeight);

    WindowWidth = window.innerWidth;
    wAccueil = 0*WindowWidth;
 

    scrollTo(projectValue);

    if (Mq480.matches){
        projectCenter = -0.50
    }
    else {
        projectCenter = -0.25
    }  

}; 

window.onload = loadValues();




center.addEventListener("scroll", function(){

    output.innerHTML = this.scrollLeft
    output2.innerHTML = y;

    

})


function test(){
    output.innerHTML = "oui"  
}

    






function descSpawn(x){

    if(projectValue == y){
        null
    }
    else{

        if (x == 1) {
            // document.getElementById("maison").style.backgroundColor = "rgba(0, 0, 0,0)";
            document.getElementById("buttonDesc").style.visibility = "visible";
            document.getElementById("spot").style.visibility = "visible";
            document.getElementById("spot").style.opacity = "0.55";
            //disableButtons
            // const disableButtons = document.getElementsByClassName("buttonProject");
            // for (let i = 0; i < disableButtons.length; i++) {
            //     disableButtons[i].style.visibility = "hidden";
            // }
            
            
            if(spawnState == 1) {
            document.getElementById("projectInformations").style.right = "calc(-1*var(--w-desc))"
            // document.getElementById("projectAnimation").style.visibility = "hidden"

            setTimeout(()=> {
                document.getElementById("projectInformations").style.right = "0"
                // document.getElementById("projectAnimation").style.visibility = "visible"
                }
                ,300);
            }

            else {
                document.getElementById("projectInformations").style.right = "0"
                // document.getElementById("projectAnimation").style.visibility = "visible"
                if(spawnState == 0){
                    spawnState = 1
                    }
                else {spawnState = 0}
            }

        }
    }

    if (x == 0) {
        // document.getElementById("maison").style.backgroundColor = "rgba(0, 0, 0,0.2)";
        document.getElementById("spot").style.opacity = "0"

        const backgroundColor = document.getElementsByClassName("backgroundColor2");
        for (let i = 0; i < backgroundColor.length; i++) {
            backgroundColor[i].style.opacity = 0;
        }
        // document.getElementById("projectAnimation").style.visibility = "hidden"
        setTimeout(()=> {
            document.getElementById("projectInformations").style.right = "calc(-1*var(--w-desc))"
            document.getElementById("buttonDesc").style.visibility = "hidden"
            document.getElementById("spot").style.visibility = "hidden"

            //enableButtons
            const disableButtons = document.getElementsByClassName("buttonProject");
            for (let i = 0; i < disableButtons.length; i++) {
                disableButtons[i].style.visibility = "visible";
            }
            

            const resetZIndex = document.getElementsByClassName("project");
            for (let i = 0; i < resetZIndex.length; i++) {
                resetZIndex[i].style.zIndex = "initial";
                
            }
        

            spawnState = 0
            projectValue = 0
            }
            ,350);
        

    }
}



function projectSelect(x){

    y = projectValue

    if (projectValue == x){
        document.getElementById("corps").style.opacity = "0"
        setTimeout(()=> {

        if (x == 0){
            null
        }

        if (x == 1){
            window.location.href = "..objet/chaise-pol/"
        }

        if (x == 2){
            window.location.href = "../objet/nasa/"
        }

        if (x == 3){
            window.location.href = "../objet/meuble-a-bazar/"
        }
        
        if (x == 4){
            window.location.href = "../objet/pol/"
        }

        if (x == 5){
            null        
        }

        if (x == 6){
            window.location.href = "../objet/mobilier-grillage/"
        }

        if (x == 7){
            window.location.href = "../objet/lampe-double-clip/"
        }

        if (x == 8){
            null
        }
        
        if (x == 9){
            window.location.href = "../qui-suis-je/"
        }
        
        // if (x == 10){
        //     window.location.href = "index.html"
        // }


        }
        ,350);


    }


    projectValue = x;

    // const background = document.getElementsByClassName("background");
    // for (let i = 0; i < background.length; i++) {
    //     background[i].style.opacity = 0.6;
        
    // }

    const backgroundColor = document.getElementsByClassName("backgroundColor2");
    for (let i = 0; i < backgroundColor.length; i++) {
        backgroundColor[i].style.opacity = 0;
        
    }

    const spotsVisibility = document.getElementsByClassName("spots");
    for (let i = 0; i < spotsVisibility.length; i++) {
        spotsVisibility[i].style.opacity = 0;
        
    }

    const non = document.getElementsByClassName("project");
    for (let i = 0; i < non.length; i++) {
        non[i].style.zIndex = 5;
        
    }

    
    descSpawn(1);
    scrollTo(x);
    projectHilight(x);
}


function scrollTo(x){


    if(x == 1){
        center.scrollTo(projectCenter*WindowWidth+(pChaiseAttache+0.5*wChaiseAttache), 0);

    }

    if(x == 2){
        center.scrollTo(projectCenter*WindowWidth+(pNasa+0.5*wNasa), 0);
        // document.getElementById("nasa").getElementsByClassName("background")[0].style.opacity = 1;
    }

    if(x == 3){
        center.scrollTo(projectCenter*WindowWidth+(pMeubleBazar+0.5*wMeubleBazar), 0)
    }

    if(x == 4){
        center.scrollTo(projectCenter*WindowWidth+(pPol+0.5*wPol), 0)
    }

    if(x == 5){
        center.scrollTo(projectCenter*WindowWidth+(pTableBasse+0.5*wTableBasse), 0)
    }

    if(x == 6){
        center.scrollTo(projectCenter*WindowWidth+(pMobilierGrillage+0.5*wMobilierGrillage), 0)
    }

    if(x == 7){
        center.scrollTo(projectCenter*WindowWidth+(pLampeColette+0.5*wLampeColette), 0)
    }

    if(x == 8){
        center.scrollTo(projectCenter*WindowWidth+(pLampeIcosaedre+0.5*wLampeIcosaedre), 0)
    }

    if(x == 9){
        center.scrollTo(projectCenter*WindowWidth+(pAPropos+0.5*wAPropos), 0)
    }
}

function projectHilight(x){

    if(x == 1){
        a = wChaiseAttache;
        b = hChaiseAttache;
        document.getElementById("chaiseAttache").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("chaiseAttache").style.zIndex = 10

        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 2){
        a = wNasa;
        b = hNasa;
        document.getElementById("nasa").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("nasa").style.zIndex = 10

        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"

        // document.getElementById("nasa").getElementsByClassName("background")[0].style.opacity = 1;
    }

    if(x == 3){
        a = wMeubleBazar;
        b = hMeubleBazar;
        document.getElementById("meubleBazar").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("meubleBazar").style.zIndex = 10

        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 4){
        a = wPol;
        b = hPol;
        document.getElementById("pol").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 5){
        a = wTableBasse;
        b = hTableBasse;
        document.getElementById("tableBasse").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 6){
        a = wMobilierGrillage;
        b = hMobilierGrillage;
        document.getElementById("mobilierGrillage").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 7){
        a = wLampeColette;
        b = hLampeColette;
        document.getElementById("lampeColette").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 8){
        a = wLampeIcosaedre;
        b = hLampeIcosaedre;
        document.getElementById("lampeIcosaedre").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 9){
        a = wAPropos;
        b = hAPropos;
        document.getElementById("APropos").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }
}
// CHAISEATTACHE

let buttonChaiseAttache = document.getElementById("buttonChaiseAttache")
buttonChaiseAttache.addEventListener("mouseover", function(){


    // document.getElementById("chaiseAttache").style.zIndex = 10
    document.getElementById("chaiseAttache").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonChaiseAttache.addEventListener("mouseout", function(){

    // document.getElementById("chaiseAttache").style.zIndex = "initial"
    document.getElementById("chaiseAttache").getElementsByClassName("backgroundColor")[0].style.opacity = 0;



})

// NASA

let buttonNasa = document.getElementById("buttonNasa")
buttonNasa.addEventListener("mouseover", function(){


    // document.getElementById("nasa").style.zIndex = 10
    document.getElementById("nasa").getElementsByClassName("backgroundColor")[0].style.opacity = 1;


})

buttonNasa.addEventListener("mouseout", function(){

    // document.getElementById("nasa").style.zIndex = "initial"
    document.getElementById("nasa").getElementsByClassName("backgroundColor")[0].style.opacity = 0;



})

// MEUBLEBAZAR

let buttonMeubleBazar = document.getElementById("buttonMeubleBazar")
buttonMeubleBazar.addEventListener("mouseover", function(){


    document.getElementById("meubleBazar").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonMeubleBazar.addEventListener("mouseout", function(){

    document.getElementById("meubleBazar").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})