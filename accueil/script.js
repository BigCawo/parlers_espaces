// index.js





// Get the root element
var root = document.documentElement;
var style = getComputedStyle(root);



let projectValue = -1;
let center = document.getElementById("center");
let output = document.getElementById("output");
let output2 = document.getElementById("output2");
let supervoil = 0;
let voile = document.getElementById("filter");
let spawnState = 0;
let wDesc = Number(style.getPropertyValue('--w-desc'));
let w = projectValue

let b = 1000

//mediaqueries

Mq480.addEventListener("change", function() {
   
    descSpawn(1);
}); 





function loadValues() {
    projectHilight(projectValue)
    scaleFactor = Number(style.getPropertyValue('--scaleFactor'));

    POllas = Number(document.getElementById("buttonOllas").offsetLeft);
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

    pLampeRessort = Number(document.getElementById("buttonLampeRessort").offsetLeft);
    wLampeRessort = Number(document.getElementById("buttonLampeRessort").offsetWidth);
    hLampeRessort = Number(document.getElementById("buttonLampeRessort").offsetHeight);

    pVaseSuspendu = Number(document.getElementById("buttonVaseSuspendu").offsetLeft);
    wVaseSuspendu = Number(document.getElementById("buttonVaseSuspendu").offsetWidth);
    hVaseSuspendu = Number(document.getElementById("buttonVaseSuspendu").offsetHeight);

    pTerresLointaines = Number(document.getElementById("buttonTerresLointaines").offsetLeft);
    wTerresLointaines = Number(document.getElementById("buttonTerresLointaines").offsetWidth);
    hTerresLointaines = Number(document.getElementById("buttonTerresLointaines").offsetHeight);

    pFabriqueABrac = Number(document.getElementById("buttonFabriqueABrac").offsetLeft);
    wFabriqueABrac = Number(document.getElementById("buttonFabriqueABrac").offsetWidth);
    hFabriqueABrac = Number(document.getElementById("buttonFabriqueABrac").offsetHeight);

    pChmupTheDog = Number(document.getElementById("buttonChmupTheDog").offsetLeft);
    wChmupTheDog = Number(document.getElementById("buttonChmupTheDog").offsetWidth);
    hChmupTheDog = Number(document.getElementById("buttonChmupTheDog").offsetHeight);

    pParlersEspace = Number(document.getElementById("buttonParlersEspace").offsetLeft);
    wParlersEspace = Number(document.getElementById("buttonParlersEspace").offsetWidth);
    hParlersEspace = Number(document.getElementById("buttonParlersEspace").offsetHeight);

    pPommeDeTerre = Number(document.getElementById("buttonPommeDeTerre").offsetLeft);
    wPommeDeTerre = Number(document.getElementById("buttonPommeDeTerre").offsetWidth);
    hPommeDeTerre = Number(document.getElementById("buttonPommeDeTerre").offsetHeight);

    pCarnets = Number(document.getElementById("buttonCarnets").offsetLeft);
    wCarnets = Number(document.getElementById("buttonCarnets").offsetWidth);
    hCarnets = Number(document.getElementById("buttonCarnets").offsetHeight);

    pIllustrations = Number(document.getElementById("buttonIllustrations").offsetLeft);
    wIllustrations = Number(document.getElementById("buttonIllustrations").offsetWidth);
    hIllustrations = Number(document.getElementById("buttonIllustrations").offsetHeight);

    pStellarium = Number(document.getElementById("buttonStellarium").offsetLeft);
    wStellarium = Number(document.getElementById("buttonStellarium").offsetWidth);
    hStellarium = Number(document.getElementById("buttonStellarium").offsetHeight);

    pCharlette = Number(document.getElementById("buttonCharlette").offsetLeft);
    wCharlette = Number(document.getElementById("buttonCharlette").offsetWidth);
    hCharlette = Number(document.getElementById("buttonCharlette").offsetHeight);




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
    output2.innerHTML = w;  

})

const scrollContainer = document.getElementById('center');

scrollContainer.addEventListener('wheel', (evt) => {
    spotsVisible = document.getElementById("spot").style.opacity
    evt.preventDefault();
    if (spotsVisible == 0.55){ 
        

  
        w = Math.max(projectValue +  Math.sign(evt.deltaY),0)
        if(0 < w && w < 22){
            scrollContainer.style.scrollBehavior = "initial"
            projectSelect(w)
            }

    }
    else {
    scrollContainer.style.scrollBehavior = "initial"
    scrollContainer.scrollLeft += evt.deltaY;
    }
    scrollContainer.style.scrollBehavior = "smooth"

  
});


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
            document.getElementById("corps").style.opacity = "1"    

        if (x == 1){
                window.location.href = "../qui-suis-je/"

        }

        if (x == 2){
            window.location.href = "../"

        }

        if (x == 3){
            window.location.href = ""
        }

        if (x == 4){
            window.location.href = "..objet/chaise-Pol/"
        }

        if (x == 5){
            window.location.href = "../objet/nasa/"
        }

        if (x == 6){
            window.location.href = "../"
        }

        if (x == 7){
            window.location.href = ""       
        }

        if (x == 8){
            window.location.href = "../objet/lampe-ressort/"
        }

        if (x == 9){
            window.location.href = "../objet/lampe-double-clip/"
        }

        if (x == 10){
            window.location.href = "../"
        }

        if (x == 11){
            window.location.href = "../objet/meuble-a-bazar/"
        }

        if (x == 12){
            window.location.href = "../objet/vase-suspendu/"
        }

        if (x == 13){
            window.location.href = "../"
        }

        if (x == 14){
            window.location.href = "../"
        }

        if (x == 15){
            window.location.href = "../"
        }
        
        if (x == 16){
            window.location.href = "../objet/Pol/"
        }

        if (x == 17){
            window.location.href = ""
        }

        if (x == 18){
            window.location.href = "../"
        }

        if (x == 19){
            window.location.href = "../objet/mobilier-grillage/"
        }

        if (x == 20){
            window.location.href = "../"
        }

        if (x == 21){
            window.location.href = "../"
        }


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
        center.scrollTo(projectCenter*WindowWidth+(pAPropos+0.5*wAPropos), 0)
    }

    if(x == 2){
        center.scrollTo(projectCenter*WindowWidth+(pTerresLointaines+0.5*wTerresLointaines), 0)
    }

    if(x == 3){
        center.scrollTo(projectCenter*WindowWidth+(pLampeIcosaedre+0.5*wLampeIcosaedre), 0)
    }

    if(x == 4){
        center.scrollTo(projectCenter*WindowWidth+(pChaiseAttache+0.5*wChaiseAttache), 0);
    }

    if(x == 5){
        center.scrollTo(projectCenter*WindowWidth+(pNasa+0.5*wNasa), 0);
        // document.getElementById("nasa").getElementsByClassName("background")[0].style.opacity = 1;
    }

    if(x == 6){
        center.scrollTo(projectCenter*WindowWidth+(pFabriqueABrac+0.5*wFabriqueABrac), 0)
    }

    if(x == 7){
        center.scrollTo(projectCenter*WindowWidth+(pTableBasse+0.5*wTableBasse), 0)
    }

    if(x == 8){
        center.scrollTo(projectCenter*WindowWidth+(pLampeRessort+0.5*wLampeRessort), 0)
    }

    if(x == 9){
        center.scrollTo(projectCenter*WindowWidth+(pLampeColette+0.5*wLampeColette), 0)
    }

    if(x == 10){
        center.scrollTo(projectCenter*WindowWidth+(pChmupTheDog+0.5*wChmupTheDog), 0)
    }

    if(x == 11){
        center.scrollTo(projectCenter*WindowWidth+(pMeubleBazar+0.5*wMeubleBazar), 0)
    }

    if(x == 12){
        center.scrollTo(projectCenter*WindowWidth+(pVaseSuspendu+0.5*wVaseSuspendu), 0)
    }

    if(x == 13){
        center.scrollTo(projectCenter*WindowWidth+(pParlersEspace+0.5*wParlersEspace), 0)
    }

    if(x == 14){
        center.scrollTo(projectCenter*WindowWidth+(pPommeDeTerre+0.5*wPommeDeTerre), 0)
    }

    if(x == 15){
        center.scrollTo(projectCenter*WindowWidth+(pCarnets+0.5*wCarnets), 0)
    }

    if(x == 16){
        center.scrollTo(projectCenter*WindowWidth+(pPol+0.5*wPol), 0)
    }

    if(x == 17){
        center.scrollTo(projectCenter*WindowWidth+(POllas+0.5*wOllas), 0);

    }

    if(x == 18){
        center.scrollTo(projectCenter*WindowWidth+(pIllustrations+0.5*wIllustrations), 0)
    }


    if(x == 19){
        center.scrollTo(projectCenter*WindowWidth+(pMobilierGrillage+0.5*wMobilierGrillage), 0)
    }

    if(x == 20){
        center.scrollTo(projectCenter*WindowWidth+(pStellarium+0.5*wStellarium), 0)
    }

    if(x == 21){
        center.scrollTo(projectCenter*WindowWidth+(pCharlette+0.5*wCharlette), 0)
    }








}

function projectHilight(x){

    if(x == 1){
        a = wAPropos;
        b = hAPropos;
        const non = document.getElementById("APropos").getElementsByClassName("backgroundColor2");
        for (let i = 0; i < non.length; i++) {
            non[i].style.opacity = 1;
            
        }
        document.getElementById("APropos").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 2){
        a = wTerresLointaines;
        b = hTerresLointaines;
        document.getElementById("TerresLointaines").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("TerresLointaines").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 3){
        a = wLampeIcosaedre;
        b = hLampeIcosaedre;
        document.getElementById("LampeIcosaedre").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("LampeIcosaedre").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 4){
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



    if(x == 5){
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

    if(x == 6){
        a = wFabriqueABrac;
        b = hFabriqueABrac;
        document.getElementById("FabriqueABrac").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("FabriqueABrac").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 7){
        a = wTableBasse;
        b = hTableBasse;
        document.getElementById("TableBasse").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("TableBasse").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 8){
        a = wLampeRessort;
        b = hLampeRessort;
        document.getElementById("LampeRessort").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("LampeRessort").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 9){
        a = wLampeColette;
        b = hLampeColette;
        document.getElementById("LampeColette").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("LampeColette").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 10){
        a = wChmupTheDog;
        b = hChmupTheDog;
        document.getElementById("ChmupTheDog").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("ChmupTheDog").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }


    if(x == 11){
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

    if(x == 12){
        a = wVaseSuspendu;
        b = hVaseSuspendu;
        document.getElementById("VaseSuspendu").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("VaseSuspendu").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 13){
        a = wParlersEspace;
        b = hParlersEspace;
        document.getElementById("ParlersEspace").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("ParlersEspace").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 14){
        a = wPommeDeTerre;
        b = hPommeDeTerre;
        document.getElementById("PommeDeTerre").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("PommeDeTerre").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 15){
        a = wCarnets;
        b = hCarnets;
        document.getElementById("Carnets").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("Carnets").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 16){
        a = wPol;
        b = hPol;
        document.getElementById("Pol").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("Pol").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }


    if(x == 17){
        a = wOllas;
        b = hOllas;
        document.getElementById("Ollas").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("Ollas").style.zIndex = 10

        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 18){
        a = wIllustrations;
        b = hIllustrations;
        document.getElementById("Illustrations").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("Illustrations").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 19){
        a = wMobilierGrillage;
        b = hMobilierGrillage;
        document.getElementById("MobilierGrillage").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("MobilierGrillage").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 20){
        a = wStellarium;
        b = hStellarium;
        document.getElementById("Stellarium").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("Stellarium").style.zIndex = 10
    
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        // document.getElementById("buttonOut").style.height = b+"px"
    }

    if(x == 21){
        a = wCharlette;
        b = hCharlette;
        document.getElementById("Charlette").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("Charlette").style.zIndex = 10
    
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

// Pol

let buttonPol = document.getElementById("buttonPol")
buttonPol.addEventListener("mouseover", function(){

    
    document.getElementById("Pol").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonPol.addEventListener("mouseout", function(){

    document.getElementById("Pol").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// VaseSuspendu

let buttonVaseSuspendu = document.getElementById("buttonVaseSuspendu")
buttonVaseSuspendu.addEventListener("mouseover", function(){

    
    document.getElementById("VaseSuspendu").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonVaseSuspendu.addEventListener("mouseout", function(){

    document.getElementById("VaseSuspendu").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// APropos

let buttonAPropos = document.getElementById("buttonAPropos")
buttonAPropos.addEventListener("mouseover", function(){

    
    const non = document.getElementById("APropos").getElementsByClassName("backgroundColor");
    for (let i = 0; i < non.length; i++) {
        non[i].style.opacity = 1;
        
    }

})

buttonAPropos.addEventListener("mouseout", function(){

    const non = document.getElementById("APropos").getElementsByClassName("backgroundColor");
    for (let i = 0; i < non.length; i++) {
        non[i].style.opacity = 0;
        
    }


})

// TableBasse

let buttonTableBasse = document.getElementById("buttonTableBasse")
buttonTableBasse.addEventListener("mouseover", function(){

    
    document.getElementById("TableBasse").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonTableBasse.addEventListener("mouseout", function(){

    document.getElementById("TableBasse").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// MobilierGrillage

let buttonMobilierGrillage = document.getElementById("buttonMobilierGrillage")
buttonMobilierGrillage.addEventListener("mouseover", function(){

    
    document.getElementById("MobilierGrillage").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonMobilierGrillage.addEventListener("mouseout", function(){

    document.getElementById("MobilierGrillage").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// LampeColette

let buttonLampeColette = document.getElementById("buttonLampeColette")
buttonLampeColette.addEventListener("mouseover", function(){

    
    document.getElementById("LampeColette").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonLampeColette.addEventListener("mouseout", function(){

    document.getElementById("LampeColette").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// LampeIcosaedre

let buttonLampeIcosaedre = document.getElementById("buttonLampeIcosaedre")
buttonLampeIcosaedre.addEventListener("mouseover", function(){

    
    document.getElementById("LampeIcosaedre").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonLampeIcosaedre.addEventListener("mouseout", function(){

    document.getElementById("LampeIcosaedre").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// LampeRessort

let buttonLampeRessort = document.getElementById("buttonLampeRessort")
buttonLampeRessort.addEventListener("mouseover", function(){

    
    document.getElementById("LampeRessort").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonLampeRessort.addEventListener("mouseout", function(){

    document.getElementById("LampeRessort").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// Ollas

let buttonOllas = document.getElementById("buttonOllas")
buttonOllas.addEventListener("mouseover", function(){

    
    document.getElementById("Ollas").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonOllas.addEventListener("mouseout", function(){

    document.getElementById("Ollas").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// TerresLointaines

let buttonTerresLointaines = document.getElementById("buttonTerresLointaines")
buttonTerresLointaines.addEventListener("mouseover", function(){

    
    document.getElementById("TerresLointaines").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonTerresLointaines.addEventListener("mouseout", function(){

    document.getElementById("TerresLointaines").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// FabriqueABrac

let buttonFabriqueABrac = document.getElementById("buttonFabriqueABrac")
buttonFabriqueABrac.addEventListener("mouseover", function(){

    
    document.getElementById("FabriqueABrac").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonFabriqueABrac.addEventListener("mouseout", function(){

    document.getElementById("FabriqueABrac").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// ChmupTheDog

let buttonChmupTheDog = document.getElementById("buttonChmupTheDog")
buttonChmupTheDog.addEventListener("mouseover", function(){

    
    document.getElementById("ChmupTheDog").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonChmupTheDog.addEventListener("mouseout", function(){

    document.getElementById("ChmupTheDog").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// ParlersEspace

let buttonParlersEspace = document.getElementById("buttonParlersEspace")
buttonParlersEspace.addEventListener("mouseover", function(){

    
    document.getElementById("ParlersEspace").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonParlersEspace.addEventListener("mouseout", function(){

    document.getElementById("ParlersEspace").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// PommeDeTerre

let buttonPommeDeTerre = document.getElementById("buttonPommeDeTerre")
buttonPommeDeTerre.addEventListener("mouseover", function(){

    
    document.getElementById("PommeDeTerre").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonPommeDeTerre.addEventListener("mouseout", function(){

    document.getElementById("PommeDeTerre").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// Carnets

let buttonCarnets = document.getElementById("buttonCarnets")
buttonCarnets.addEventListener("mouseover", function(){

    
    document.getElementById("Carnets").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonCarnets.addEventListener("mouseout", function(){

    document.getElementById("Carnets").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// Illustrations

let buttonIllustrations = document.getElementById("buttonIllustrations")
buttonIllustrations.addEventListener("mouseover", function(){

    
    document.getElementById("Illustrations").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonIllustrations.addEventListener("mouseout", function(){

    document.getElementById("Illustrations").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// Stellarium

let buttonStellarium = document.getElementById("buttonStellarium")
buttonStellarium.addEventListener("mouseover", function(){

    
    document.getElementById("Stellarium").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonStellarium.addEventListener("mouseout", function(){

    document.getElementById("Stellarium").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

// Charlette

let buttonCharlette = document.getElementById("buttonCharlette")
buttonCharlette.addEventListener("mouseover", function(){

    
    document.getElementById("Charlette").getElementsByClassName("backgroundColor")[0].style.opacity = 1;



})

buttonCharlette.addEventListener("mouseout", function(){

    document.getElementById("Charlette").getElementsByClassName("backgroundColor")[0].style.opacity = 0;


})

