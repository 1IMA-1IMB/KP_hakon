// array's 
let Liste_med_tall = [10, 12, 10, 11];

console.log(Liste_med_tall[1]);

// starter altid på 0, [1] er 12 fordi 10 er 0 


// løkker 
let elev_liste = ["Henriette", "Livia", "Håkon", "Odin", "Oscar"];
let liste_kopi = ["Henriette", "Håkon", "Livia", "Odin", "Oscar"];

let index = 0;

while(index < elev_liste.length){

    // console.log(elev_liste[index]); // må være over index++ 
    index++; // index øker med 1.
}

for(let i = 0; i < elev_liste.length; i++){
    //console.log(elev_liste[i]);
}

if(elev_liste == liste_kopi){
    //console.log("suksess!");
}else{
   // console.log("failure..");
}

for(elev in elev_liste){ 

    console.log(elev_liste[elev]);
}