// intro //

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