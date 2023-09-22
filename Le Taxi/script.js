"use strict";

/**boucle 30 feu rouge
à chaque feu check quel son joue
si wejdene -> -1 hp et change de taxi
si 0hp -> explose
a la fin dire combien changement de taxi*/

let personnage="John";
let santeMental=10;
let changement=0
let listMusique=["Son1", "Son2", "Son3", "Anissa - Wejdene", "Son5"];

for(let i=30;i>0;i--){
    let son = listMusique[Math.floor(Math.random() * listMusique.length)];
    console.log(son + " -" + " Il reste" + " " + i + " feu rouge");
    if(son == "Anissa - Wejdene"){
        santeMental--;
        changement++;
    }
    if(santeMental == 0){
        console.log(personnage + " explose");
    }
}

if(santeMental>0){
    console.log(personnage + " est rentré chez lui");
}

console.log(personnage + " a changé de taxi" + " " + changement + " fois");