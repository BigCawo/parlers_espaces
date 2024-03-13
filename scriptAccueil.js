

// ~~~~ Accueil ~~~~ //



function shutDownBaaaa() {
    descSpawn(0);

    let aa = buttonValue = document.getElementById("buttonIllustration").value;
    let bb = buttonValue = document.getElementById("buttonObjet").value;
    let cc = buttonValue = document.getElementById("buttonMediation").value;
    let dd = buttonValue = document.getElementById("buttonMultimedia").value; 

    if ( aa == "on" ){
        y = "Illustration"
        z = "buttonIllustration"
        a = "descIllustration"


    }

    if ( bb == "on"){
        y = "Objet"
        z = "buttonObjet"
        a = "descObjet"

    }

    if ( cc == "on"){
        y = "Mediation"
        z = "buttonMediation"
        a = "descMediation"
        
    }
   
    if ( dd == "on"){
        y = "Multimedia"
        z = "buttonMultimedia"
        a = "descMultimedia"
        
    }

    document.getElementById(z).value = "off"
    document.getElementById(z+"2").value = "off"

    document.getElementById(z).style.opacity = 1
    document.getElementById(z+"2").style.opacity = 1
    
    const reset = document.getElementsByClassName("button");
    for (let i = 0; i < reset.length; i++) {
        reset[i].style.opacity = 1;

    }

    const resett = document.getElementsByClassName("buttonReset");            
    for (let i = 0; i < resett.length; i++) {
        resett[i].value = "off"
        resett[i].style.opacity = 0.25
    }

    const icons = document.getElementsByClassName("project");
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.opacity = 1;
        icons[i].style.zIndex = 5;
        
    }
    //descriptions
    /**/


    const resetDesc = document.getElementsByClassName("desc");
    
    for (let i = 0; i < resetDesc.length; i++) {
        resetDesc[i].style.opacity = "block"
        resetDesc[i].style.opacity = "0%"
    } 


    for (let i = 0; i < resetDesc.length; i++) {
        resetDesc[i].style.maxHeight = "0"
    }

    document.getElementById(a).style.opacity = "100%"

    
    //descriptions
}


function projectSort(x) {

    descSpawn(0);
    
    


    if ( x == 0){
        y = "Illustration"
        z = "buttonIllustration"
        a = "descIllustration"
        buttonValue = document.getElementById("buttonIllustration").value

    }

    if ( x == 1){
        y = "Objet"
        z = "buttonObjet"
        a = "descObjet"
        buttonValue = document.getElementById("buttonObjet").value
    }

    if ( x == 2){
        y = "Mediation"
        z = "buttonMediation"
        a = "descMediation"
        buttonValue = document.getElementById("buttonMediation").value
    }
    
    if ( x == 3){
        y = "Multimedia"
        z = "buttonMultimedia"
        a = "descMultimedia"
        buttonValue = document.getElementById("buttonMultimedia").value
    }
    

        if (buttonValue == "off") {
            
            const reset = document.getElementsByClassName("button");       
            for (let i = 0; i < reset.length; i++) {
                reset[i].value = "off"
                reset[i].style.opacity = 0.25
            }

                        
            const resett = document.getElementsByClassName("buttonReset");            
            for (let i = 0; i < resett.length; i++) {
                resett[i].value = "off"
                resett[i].style.opacity = 1
            }


            document.getElementById(z).value = "on"
            document.getElementById(z+"2").value = "on"
            document.getElementById(z).style.opacity = 1
            document.getElementById(z+"2").style.opacity = 1

                // document.getElementById("categories").style.height = "calc( var(--h-sidebar) * 1.5 )"
            const icons = document.getElementsByClassName("project");
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.opacity = 0.25;
                // icons[i].style.zIndex = 51;
            }
            //descriptions
            /**/
            // const resetDesc = document.getElementsByClassName("desc");

            // for (let i = 0; i < resetDesc.length; i++) {
            //     resetDesc[i].style.opacity = 0.25
            //     resetDesc[i].style.opacity = "100%"

                
            // }
            // document.getElementById(a).style.opacity = "block"
            
            // document.getElementById(a).style.maxHeight = "calc( 80vh - var(--h-sidebar) )"
            

            // //descriptions


            const selection = document.getElementsByClassName(y);
            for (let i = 0; i < selection.length; i++) {
                selection[i].style.opacity = 1;
                // selection[i].style.zIndex = 5;
            }       
        } 

        if (buttonValue == "on") {



            document.getElementById(z).value = "off"
            document.getElementById(z+"2").value = "off"

            document.getElementById(z).style.opacity = 1
            document.getElementById(z+"2").style.opacity = 1
            // document.getElementById("categories").style.height = "var(--h-sidebar)"

            

            const reset = document.getElementsByClassName("button");
            for (let i = 0; i < reset.length; i++) {
                reset[i].style.opacity = 1;

            }

            const resett = document.getElementsByClassName("buttonReset");            
            for (let i = 0; i < resett.length; i++) {
                resett[i].value = "off"
                resett[i].style.opacity = 0.25
            }
            
            const icons = document.getElementsByClassName("project");
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.opacity = 1;
                // icons[i].style.zIndex = 5;
                
            }
            //descriptions
            /**/


            // const resetDesc = document.getElementsByClassName("desc");
            
            // for (let i = 0; i < resetDesc.length; i++) {
            //     resetDesc[i].style.opacity = "block"
            //     resetDesc[i].style.opacity = "0%"
            // } 



            // document.getElementById(a).style.opacity = "100%"

            
            //descriptions

        
        }
    



}




