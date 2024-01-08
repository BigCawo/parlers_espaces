var n = 1

setInterval(function fakeGif(n) {

    if (n==2){
        document.getElementById("bonjour").src = "../assets/apropos-expérimentations-dessins-03-LQ.png"
    

    }

if (n==1){
    document.getElementById("bonjour").src = "../assets/apropos-expérimentations-dessins-02-LQ.png"

}

n=n+1

},1000)