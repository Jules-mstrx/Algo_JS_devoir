"use strict";

/**
 créer class tueur
 créer variables des survivants (noms, cara)
 créer class survivant
 créer Jason
 randomiser cara, noms, proba pour chaque survivant
 créer boucle while pour les actions et afficher les résultats
 messages de fin
 */

class Tueur{
    constructor(hp, nom){
        this.hp=hp;
        this.nom=nom;
    }
}

let cara=["Joueur de LoL", "Fan de One Piece", "Balkany", "Amateur de Doliprane", "Réparateur d'imprimante", "OTP Yuumi", "Amateur de short", "GigaChad", "DJ Khaled", "Consommateur d'eau"];
let nomSurvivant=["Edgar", "Jean", "Jules", "Ilan", "Jarod", "Lu", "Aurelien", "Gabin", "Norman", "Pas"];

class Survivant{
    constructor(){
        this.prenom=nomSurvivant[Math.floor(Math.random() * nomSurvivant.length)];
        this.caracteristique=cara[Math.floor(Math.random() * cara.length)];
        this.probaMort=Math.floor(Math.random() * 10);
        this.probaEsquive=Math.floor(Math.random() * (10 - this.probaMort));
        this.probaDegatDead=10-this.probaMort-this.probaEsquive;
        this.proba = [];
        for(let i=0;i<this.probaMort;i++){
            this.proba.push("Mort");
        }
        for(let i=0;i<this.probaEsquive;i++){
            this.proba.push("Esquive");
        }
        for(let i=0;i<this.probaDegatDead;i++){
            this.proba.push("Mort+Degat");
        }
    }
}

let Tueur1= new Tueur(100, "Jason");

let perso1= new Survivant();
let perso2= new Survivant();
let perso3= new Survivant();
let perso4= new Survivant();
let perso5= new Survivant();

console.log(perso1);
console.log(perso2);
console.log(perso3);
console.log(perso4);
console.log(perso5); 

let listVivant=[perso1, perso2, perso3, perso4, perso5];
let listMort=[];

while(Tueur1.hp>0 && listVivant.length>0){
    let vivantAlea=listVivant[Math.floor(Math.random() * listVivant.length)];
    let action=vivantAlea.proba[Math.floor(Math.random() * vivantAlea.proba.length)];
    if(action=="Mort"){
        listMort.push(vivantAlea.prenom);
        listVivant.splice(listVivant.indexOf(vivantAlea),1);
        console.log("Jason a tué" + " "+ vivantAlea.prenom);
    }
    if(action=="Esquive"){
        Tueur1.hp-=10;
        console.log(vivantAlea.prenom + " a esquivé et a infligé 10 dégats");
    }
    if(action=="Mort+Degat"){
        listMort.push(vivantAlea.prenom);
        listVivant.splice(listVivant.indexOf(vivantAlea),1);
        Tueur1.hp-=15;
        console.log("Jason a tué" + vivantAlea.prenom + " mais il lui a infligé 15 dégats");
    }
}

if(Tueur1<=0){
    console.lop("Jason est mort");
    console.log("Les Survivants ont gagnés mais RIP à ", listMort);
}else{
    console.log("Les Survivants sont tous morts");
}

console.log(listMort + " sont morts");