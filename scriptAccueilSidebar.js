

// ~~~~ Sidebar ~~~~ //
let Sidebar = document.getElementById("sidebar")
let ScrollY = window.scrollX


window.addEventListener("scroll", function(){
    if(Mq480.matches){
        if (scrollY < 25){
            Sidebar.style.bottom= "0"
        }

        else{
            Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"
        }
    }

})



function SidebarHide(Mq480){

    if(Mq480.matches){
        Sidebar.style.visibility = "visible"


    }
    else{
        Sidebar.style.visibility = "visible"


    }
}



// ~~~~ MediaQueries ~~~~ //


// Mq dependant function to call 

SidebarHide(Mq480);

// Listener function on state changes
Mq900.addEventListener("change", function() {
    null;
}); 

Mq480.addEventListener("change", function() {
    SidebarHide(Mq480);
}); 