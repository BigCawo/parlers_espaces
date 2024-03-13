// intro //

// MediaQueryList variables//
let Mq1300 = window.matchMedia("(max-width: 1300px)")
let Mq900 = window.matchMedia("(max-width: 900px)")
let Mq480 = window.matchMedia("(max-width: 480px)")



// Listener function on state changes

Mq1300.addEventListener("change", function() {
    null;
}); 

Mq900.addEventListener("change", function() {
    null;
}); 

Mq480.addEventListener("change", function() {
    null;
}); 

let content = document.getElementById('imgIntro');
let parentMobile = document.getElementById('baliseMobile');
let parentScreen = document.getElementById('baliseScreen');
let dateMobile = document.getElementById("dateMobile")
let date = document.getElementById("date")



function introElemPos(Mq900) {
if (Mq900.matches) { // If media query matches


    parentMobile.insertBefore(content, parentMobile.firstChild);
    date.style.display = "inline-block";
    dateMobile.innerHTML = "&nbsp;-&nbsp;"


} else {
    parentScreen.insertAdjacentElement("afterend",content);
    date.style.display = "block";
    dateMobile.innerHTML = ""

}
}


// MediaQueryList variables//


// Mq dependant function to call 
introElemPos(Mq900);

// Listener function on state changes
Mq900.addEventListener("change", function() {
    introElemPos(Mq900);
}); 