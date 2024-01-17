

// ~~~~ Header ~~~~ //
let Header = document.getElementById("header")



window.addEventListener("scroll", function(){
    if(Mq480.matches){
        if (scrollY < 25){
            Header.style.bottom= "45px"
            Header.style.transition= "all 0.5s ease"
            
        }

        else{
            Header.style.bottom= "0"
            Header.style.transition= "all 0.5s ease"

        }
    }

})

// ~~~~ Accueil ~~~~ //

function shutDownBaaaa() {
    let aa = buttonValue = document.getElementById("buttonDessin").value;
    let bb = buttonValue = document.getElementById("buttonObjet").value;
    let cc = buttonValue = document.getElementById("buttonFiction").value;
  /*  let dd = buttonValue = document.getElementById("buttonMemoire").value; */

    if ( aa == "on" ){
        y = "dessin"
        z = "buttonDessin"
        a = "descDessin"


    }

    if ( bb == "on"){
        y = "objet"
        z = "buttonObjet"
        a = "descObjet"

    }

    if ( cc == "on"){
        y = "fiction"
        z = "buttonFiction"
        a = "descFiction"
        
    }
 /*   
    if ( dd == "on"){
        y = "memoire"
        z = "buttonMemoire"
        a = "descMemoire"
        
    }
*/
    document.getElementById(z).value = "off"

    document.getElementById(z).style.fontSize = "var(--fs-c)"
    document.getElementById("categories").style.height = "var(--h-sidebar)"
    

    const icons = document.getElementsByClassName("icons");
    for (let i = 0; i < icons.length; i++) {
        icons[i].style.display = "inline";
        
    }
    //descriptions
    /**/


    const resetDesc = document.getElementsByClassName("desc");
    
    for (let i = 0; i < resetDesc.length; i++) {
        resetDesc[i].style.display = "block"
        resetDesc[i].style.opacity = "0%"
    } 


    for (let i = 0; i < resetDesc.length; i++) {
        resetDesc[i].style.maxHeight = "0"
    }

    document.getElementById(a).style.opacity = "100%"

    
    //descriptions
}


function test(x) {

 
    
    


    if ( x == 0){
        y = "dessin"
        z = "buttonDessin"
        a = "descDessin"
        buttonValue = document.getElementById("buttonDessin").value

    }

    if ( x == 1){
        y = "objet"
        z = "buttonObjet"
        a = "descObjet"
        buttonValue = document.getElementById("buttonObjet").value
    }

    if ( x == 2){
        y = "fiction"
        z = "buttonFiction"
        a = "descFiction"
        buttonValue = document.getElementById("buttonFiction").value
    }
    
    if ( x == 3){
        y = "memoire"
        z = "buttonMemoire"
        a = "descMemoire"
        buttonValue = document.getElementById("buttonMemoire").value
    }
    

        if (buttonValue == "off") {

            const reset = document.getElementsByClassName("button");

            
            for (let i = 0; i < reset.length; i++) {
                reset[i].value = "off"
                reset[i].style.fontSize = "var(--fs-c)"
            }


            document.getElementById(z).value = "on"
            document.getElementById(z).style.fontSize = "calc( var(--fs-c) * 1.5 )"
                // document.getElementById("categories").style.height = "calc( var(--h-sidebar) * 1.5 )"

            const icons = document.getElementsByClassName("icons");
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.display = "none";
            }
            //descriptions
            /**/
            const resetDesc = document.getElementsByClassName("desc");

            for (let i = 0; i < resetDesc.length; i++) {
                resetDesc[i].style.display = "none"
                resetDesc[i].style.opacity = "100%"

                
            }
            document.getElementById(a).style.display = "block"
            
            document.getElementById(a).style.maxHeight = "calc( 80vh - var(--h-sidebar) )"
            

            //descriptions


            const selection = document.getElementsByClassName(y);
            for (let i = 0; i < selection.length; i++) {
                selection[i].style.display = "inline";
            
            }       
        } 

        if (buttonValue == "on") {



            document.getElementById(z).value = "off"

            document.getElementById(z).style.fontSize = "var(--fs-c)"
            // document.getElementById("categories").style.height = "var(--h-sidebar)"
            

            const icons = document.getElementsByClassName("icons");
            for (let i = 0; i < icons.length; i++) {
                icons[i].style.display = "inline";
                
            }
            //descriptions
            /**/


            const resetDesc = document.getElementsByClassName("desc");
            
            for (let i = 0; i < resetDesc.length; i++) {
                resetDesc[i].style.display = "block"
                resetDesc[i].style.opacity = "0%"
            } 


            for (let i = 0; i < resetDesc.length; i++) {
                resetDesc[i].style.maxHeight = "0"
            }

            document.getElementById(a).style.opacity = "100%"

            
            //descriptions

        
        }
    


}
