let tall_1 = 8; //global variabel
let tall_2 = 7; //global variabel


function enVilkaarligFunksjon(){
    let teller = 0; //lokal variabel

    teller++; // +1
    // Disse tre er like
    teller = teller + 1;
    // Disse tre er like
    teller += 1;

    console.log(teller);
}

// console.log(teller); Denne funker IKKE (pga lokal variabel)


function minFunksjon(){

   console.log("Dette er en funksjon!");
   console.log("Hva som helst!");

}

function gangeSammen(tall, annet_tall){
    console.log(tall + " ganget sammen med " + annet_tall + " er lik " + tall * annet_tall);
}


let utsagn = false; //Disse to er BOOLEAN-variabler. Alltid kun true eller false
let annet_utsagn = true; //Disse to er BOOLEAN-variabler. Alltid kun true eller false

let tall_3 = 7; //Disse to variablene brukes i if-setningene i funksjonen under!
let tall_4 = 7; //Disse to variablene brukes i if-setningene i funksjonen under!

function if_setninger(){

    if( tall_3 < tall_4){

        //gjør noe her 
        console.log("Første if-en er sann!");

    } else if(tall_4 < tall_3){

        //gjør noe annet her
        console.log("Else if-en stemte!");

    }else{

        //gjør noe annet her igjen, hvis ingenting har kommet gjennom
        console.log("Else-en funket");
    }

}
