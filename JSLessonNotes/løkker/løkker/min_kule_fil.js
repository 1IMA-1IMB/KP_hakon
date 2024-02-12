//Array med tekst-strenger
let ord_liste = ["hei", "og", "hå", "eh"];

//Array med tall
let liste_med_tall = [20, 30, 40, 55, 90, 109, 11, 20];


//Eksempel på en while-løkke
let tall = 0;

while (tall <= 10) { //Sjekker om tall er mindre eller lik 10. 

    console.log(tall); //Skriver ut den verdien tallet foreløpig har

    //Øker tall med 1.
    tall = tall + 1; //Kan også skrives som "tall++;"

    //Bunnen av while-løkken. Her vil programmet gå opp igjen til linje 11
}


//Eksempel på en for-løkke
console.log("\n\n\n--- Console-logger innholdet i ord_liste med en for-løkke ---"); //'\n' betyr at vi lager en ny, blank linje (at vi basically trykker Enter)
for (ord in ord_liste) { //Løkke som gjentas for HVERT element i ord_liste-arrayet
    /*
    ord_liste inneholder 4 elementer; "hei", "og", "hå", "eh"

    For hver gang denne løkken gjentas, vil 'ord' bli satt til 
    0, 1, 2 og 3 etter tur. Altså ikke "hei", "og", "hå" og "eh".

    Derfor bruker vi 'ord' som en tall-variabel som gir oss PLASSEN i ord_liste.
    Når f.eks. 'ord' er lik 2, vil ord_liste[ord] gi oss ordet på plass nummer
    tre i ord_liste (fordi plassene alltid begynner på null i et array, 
        0 -->1 -->[[2]] -->3)
    */

    console.log(ord_liste[ord]);

    //Hvis 'ord' var lik 0 her
    //Så vil 'ord' bli satt til å være lik 1 nå, nå som neste gjentakning starter.
}


//Vi kan også utføre samme operasjonen over, med en while-løkke
console.log("\n\n\n--- Console-logger innholdet i tall-listen med en while løkke ---");

tall = 0; //Vi bruker 'tall' som en variabel for plassen i liste_med_tall. 

while (tall < liste_med_tall.length) {//Sjekker om 'tall' er mindre enn antall plasser som finnes i liste_med_tall

    console.log(liste_med_tall[tall]);

    //Øker 'tall' med 1
    tall++; //VELDIG VIKTIG for å forhindre at løkken gjentar seg for alltid!
}

console.log("*--- Ferdig! ---*");