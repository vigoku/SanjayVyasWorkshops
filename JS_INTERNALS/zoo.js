var hathi = "mere sathi";

var tiger = "marega";
function zoo () {
    var tiger = "zinda hai";
    var lion = "marega";
    var ghadiyal = "ke asoo";

    function cage () {
        console.log("tiger", tiger) // duplicate tiger
        console.log("haathi" , hathi);
    
    }

    function pond(){
        console.log("ghadiyal", ghadiyal);
    }
    //pond;
    return cage;//! original tiger nad lion are dead.
}

var pinjra = zoo();
pinjra();