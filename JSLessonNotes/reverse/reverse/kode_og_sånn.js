let person_liste = [];

person_liste.push("Jon");
person_liste.push("Arya");
person_liste.push("Sansa");
person_liste.push("Bran");
person_liste.push("Robb");
person_liste.push("Theon");
person_liste.push("Rickon");

console.log("---ORIGINGAL LISTE---");
console.log(person_liste);

//Lager en reversert liste
console.log("\n\n\n---.reverse()-funksjon---");
console.log(person_liste.reverse());


person_liste.reverse(); //Reverserer tilbake slik at vi kan teste videre


//Lager en WHILE-LOOP som går fra SLUTT til START
let reversert_liste = [];
let index = (person_liste.length - 1);
while(index >= 0){

    let ting_i_lista = person_liste[index];
    reversert_liste.push(ting_i_lista);

    index = index - 1;
}

console.log("\n\n\n---WHILE-LOOP---");
console.log(reversert_liste);


//Lager en FOR-LOOP som kun består av de 4 siste navnene i person_liste
let reversert_liste_2 = [];
for(let i = (person_liste.length - 1); //Lar "i" være lik den siste indexen
    i >= (person_liste.length - 4); //Sier at løkka skal fortsette SÅ LENGE "i" er større enn den fjerde siste plassen
    i--){ //Sier at den skal senke "i" med 1 for hver sykel i løkka

    reversert_liste_2.push(person_liste[i]);
}

console.log("\n\n\n---FOR-LOOP---");
console.log(reversert_liste_2);