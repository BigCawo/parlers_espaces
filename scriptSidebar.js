

// ~~~~ Sidebar ~~~~ //
let Sidebar = document.getElementById("sidebar")
let lastScrollTop = 0;
let initScrollTop = 50;



window.addEventListener("scroll", function(){


var st =  this.window.scrollY;

if (st > lastScrollTop) {
    Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"
   } 
   
else 
    Sidebar.style.bottom= "0"
    // else was horizontal scroll

   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling


})     



function bwyuu(){
    document.getElementById("output").innerHTML = scrollTop
}

document.body.addEventListener("scroll", function(){



sst = document.body.scrollTop
// document.getElementById("output").innerHTML = document.body.scrollTop


        
if (sst > initScrollTop) {
    Sidebar.style.bottom= "calc(-1*var(--h-sidebar))"
    } 
    
else 
    Sidebar.style.bottom= "0"
    // else was horizontal scroll

    initScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling


        

})





// function SidebarHide(Mq480){

//     if(Mq480.matches){
//         Sidebar.style.visibility = "visible"


//     }
//     else{
//         Sidebar.style.visibility = "visible"


//     }
// }



// // ~~~~ MediaQueries ~~~~ //


// // Mq dependant function to call 

// SidebarHide(Mq480);

// // Listener function on state changes
// Mq900.addEventListener("change", function() {
//     null;
// }); 

// Mq480.addEventListener("change", function() {
//     SidebarHide(Mq480);
// }); 