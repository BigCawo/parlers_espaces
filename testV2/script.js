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
let offsetDesc = "52dvw"


//mediaqueries

Mq480.addEventListener("change", function() {
   
    descSpawn(1);
}); 





function loadValues() {
    projectHilight(projectValue)
    scaleFactor = Number(style.getPropertyValue('--scaleFactor'));

    pChaiseAttache = Number(document.getElementById("buttonChaiseAttache").offsetLeft);
    wChaiseAttache = Number(document.getElementById("buttonChaiseAttache").offsetWidth);
    hChaiseAttache = Number(document.getElementById("buttonChaiseAttache").offsetHeight);

    pNasa = Number(document.getElementById("buttonNasa").offsetLeft);
    wNasa = Number(document.getElementById("buttonNasa").offsetWidth);
    hNasa = Number(document.getElementById("buttonNasa").offsetHeight);

    pMeubleBazar = Number(document.getElementById("buttonMeubleBazar").offsetLeft);
    wMeubleBazar = Number(document.getElementById("buttonMeubleBazar").offsetWidth);
    hMeubleBazar = Number(document.getElementById("buttonMeubleBazar").offsetHeight);


    WindowWidth = window.innerWidth;
    wAccueil = 0*WindowWidth;
 

    scrollTo(projectValue);

    if (Mq480.matches){
        projectCenter = -0.45
        offsetDesc = "2dvh";
    }
    else {
        projectCenter = -0.25
        offsetDesc = "52dvw";
    }  

}; 

window.onload = loadValues();


// projectValue.addEventListener("change", function(){

//     output.innerHTML = "oui"

// })

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
            document.getElementById("maison").style.backgroundColor = "rgba(0, 0, 0,0)";
            document.getElementById("buttonDesc").style.visibility = "visible";
            document.getElementById("spot").style.visibility = "visible";
            document.getElementById("spot").style.opacity = "0.55";
            //disableButtons
            const disableButtons = document.getElementsByClassName("buttonProject");
            for (let i = 0; i < disableButtons.length; i++) {
                disableButtons[i].style.visibility = "hidden";
            }
            
            
            if(spawnState == 1) {
            document.getElementById("projectInformations").style.left = "100dvw"
            setTimeout(()=> {
                document.getElementById("projectInformations").style.left = offsetDesc
                }
                ,300);
            }

            else {
                document.getElementById("projectInformations").style.left = offsetDesc
                if(spawnState == 0){
                    spawnState = 1
                    }
                else {spawnState = 0}
            }

        }
    }

    const resetZIndex = document.getElementsByClassName("project");
        for (let i = 0; i < resetZIndex.length; i++) {
            resetZIndex[i].style.zIndex = "initial";
            
        }

    if (x == 0) {
        document.getElementById("maison").style.backgroundColor = "rgba(0, 0, 0,0.2)";
        document.getElementById("projectInformations").style.left = "100dvw"
        document.getElementById("buttonDesc").style.visibility = "hidden"
        document.getElementById("spot").style.visibility = "hidden"
        document.getElementById("spot").style.opacity = "0"
        //enableButtons
        const disableButtons = document.getElementsByClassName("buttonProject");
        for (let i = 0; i < disableButtons.length; i++) {
            disableButtons[i].style.visibility = "visible";
        }
        

        const backgroundColor = document.getElementsByClassName("backgroundColor2");
        for (let i = 0; i < backgroundColor.length; i++) {
            backgroundColor[i].style.opacity = 0;
        }

        spawnState = 0
        projectValue = 0

    }
}



function projectSelect(x){

    y = projectValue

    projectValue = x;

    const background = document.getElementsByClassName("background");
    for (let i = 0; i < background.length; i++) {
        background[i].style.opacity = 0.6;
        
    }

    const backgroundColor = document.getElementsByClassName("backgroundColor2");
    for (let i = 0; i < backgroundColor.length; i++) {
        backgroundColor[i].style.opacity = 0;
        
    }

    const spotsVisibility = document.getElementsByClassName("spots");
    for (let i = 0; i < spotsVisibility.length; i++) {
        spotsVisibility[i].style.opacity = 0;
        
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
}

function projectHilight(x){

    if(x == 1){
        a = wChaiseAttache;
        b = hChaiseAttache;
        document.getElementById("chaiseAttache").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("chaiseAttache").style.zIndex = 9

        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        document.getElementById("spotMiddle").style.height = b+"px"
    }

    if(x == 2){
        a = wNasa;
        b = hNasa;
        document.getElementById("nasa").getElementsByClassName("backgroundColor2")[0].style.opacity = 1;
        document.getElementById("nasa").style.zIndex = 9

        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        document.getElementById("spotMiddle").style.height = b+"px"

        // document.getElementById("nasa").getElementsByClassName("background")[0].style.opacity = 1;
    }

    if(x == 3){
        a = wMeubleBazar;
        b = hMeubleBazar;
        document.getElementById("spotRight").style.left = (-projectCenter*WindowWidth)+a/2+"px"
        document.getElementById("spotLeft").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.left = (-projectCenter*WindowWidth)-a/2+"px"
        document.getElementById("spotMiddle").style.width = a+"px"
        document.getElementById("spotMiddle").style.height = b+"px"
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


    document.getElementById("meubleBazar").style.zIndex = 10
    voile.style.opacity = "0.5"


})

buttonMeubleBazar.addEventListener("mouseout", function(){

    document.getElementById("meubleBazar").style.zIndex = "initial"
    voile.style.opacity = "0"


})