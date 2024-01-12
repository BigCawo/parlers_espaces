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
            document.getElementById("categories").style.height = "calc( var(--h-sidebar) * 1.5 )"

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
    


}

//intro//




let content = document.getElementById('imgIntro');
let parentMobile = document.getElementById('baliseMobile');
let parentScreen = document.getElementById('baliseScreen');
let dateMobile = document.getElementById("dateMobile")
let date = document.getElementById("date")

function myFunction(x) {
if (x.matches) { // If media query matches



    parentMobile.insertBefore(content, parentMobile.firstChild);
    date.style.display = "inline-block";
    dateMobile.innerHTML = "&nbsp;-&nbsp;"

} else {
    parentScreen.insertAdjacentElement("afterend",content);
    date.style.display = "block";
    dateMobile.innerHTML = ""

}
}

// Create a MediaQueryList object
let x = window.matchMedia("(max-width: 900px)")

// Call listener function at run time
myFunction(x);

// Attach listener function on state changes
x.addEventListener("change", function() {
myFunction(x);
}); 
