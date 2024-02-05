
let sauer = 100;

// oppgave 1A 

function tellEnSau() {
    sauer = sauer - 1; // Kode for å minske verdien av 'sauer' med 1

    console.log("Du har " + sauer + " sauer igjen å telle før du sovner.");
}

// oppgave 1B
  
function tellNoenSauer(tall) {
    sauer = sauer - tall; 
    console.log("you have " + sauer + " sheeps to count before you can sleep.");
}

tellNoenSauer(40);

// oppgave 1C

function mistetTellingen(){
    
    sauer = 100; 

    console.log("suer")
}

mistetTellingen(100);

// oppgave 1D

function tellNoenSauer(sauer) {
   
    if (sauer > 0) {
       
        console.log("Bæææ! Det er " + sauer + " sauer.");
    } else {
        
        console.log("zzz zzz zzz");
    }
}

tellNoenSauer(5); 
tellNoenSauer(0); 
tellNoenSauer(-3); 


