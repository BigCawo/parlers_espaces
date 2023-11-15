
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
                /*
                reset[i].style.backgroundColor = "rgba(194, 194, 194, 0.486)"
                reset[i].style.color = "black"
                */
                reset[i].style.fontSize = "var(--fs-c)"
            }


            document.getElementById(z).value = "on"
            document.getElementById(z).style.fontSize = "calc( var(--fs-c) * 1.5 )"
            document.getElementById("categories").style.height = "calc( var(--h-sidebar) * 1.5 )"
            /*
            document.getElementById(z).style.backgroundColor = "black"
            document.getElementById(z).style.color = "white"
            */

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
            
            //marge
            //document.getElementById("descriptions").style.marginBottom ="20px"

            //descriptions


            const selection = document.getElementsByClassName(y);
            for (let i = 0; i < selection.length; i++) {
                selection[i].style.display = "inline";
            
            }       
        } 

        if (buttonValue == "on") {



            document.getElementById(z).value = "off"
            /*
            document.getElementById(z).style.backgroundColor = "rgba(194, 194, 194, 0.486)"
            document.getElementById(z).style.color = "black"
            */
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

             //marge
             //document.getElementById("descriptions").style.marginBottom ="0"
            
            //descriptions

        
        }
    


}


