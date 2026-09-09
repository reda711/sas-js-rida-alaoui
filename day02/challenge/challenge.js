/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 02 · CHALLENGE
 * LE BRUTE-FORCER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte :
 * Vous simulez un programme pour "craquer" un cadenas à 3 chiffres.
 *
 * Consignes :
 * 1. Définissez codeSecret = 739.
 * 2. Utilisez des boucles imbriquées (3 boucles for imbriquées allant chacune de 0 à 9) pour simuler les roues d'un cadenas de valise.
 * 3. À chaque essai, reconstituez le code testé (ex: c1 * 100 + c2 * 10 + c3).
 * 4. Si le code testé est égal au codeSecret, arrêtez toutes les boucles et affichez "Code trouvé : 739 après X essais".
 * Note : Réfléchissez à la manière de sortir de plusieurs boucles imbriquées (labels ou vérification de variable booléenne trouve).
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day02/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
let CodeSecret = 739 
let firstdigit = Math.floor(CodeSecret / 100)
let seconddigit = Math.floor(CodeSecret % 100 / 10)
let thirddigit = Math.floor((CodeSecret % 100) % 10)
let attempts = 0
console.log(firstdigit , seconddigit , thirddigit);



for (let c1 = 0 ; c1 <= 9 ; c1++){
    attempts++
    if(c1 == firstdigit){
        c1 = String(c1)
       var guessedCodeSecret = c1
       console.log(guessedCodeSecret);
       break
    }
}
    for(let c2 = 0 ; c2 <= 9 ; c2++){
    attempts++
    if(c2 == seconddigit){
        c2 = String(c2)
        guessedCodeSecret = guessedCodeSecret + c2
        break
    }
    }
      for(let c3 = 0 ; c3 <= 9 ; c3++){
        attempts++
    if(c3 == thirddigit){
        c3 = String(c3)
        guessedCodeSecret = guessedCodeSecret + c3
        break        
    }
}
if(guessedCodeSecret == CodeSecret){
    console.log("You are correct your guest is "+ guessedCodeSecret + " it took you " + attempts + " attempts" );
}
    

