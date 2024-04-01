

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

    initScrollTop = sst <= 0 ? 0 : sst; // For Mobile or negative scrolling


        

})
