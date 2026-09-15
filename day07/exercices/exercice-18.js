/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPARAISON D'OBJETS (DEEP EQUAL CONCEPT)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction sontIdentiques(obj1, obj2) qui vérifie si deux objets littéraux (sans objets imbriqués) ont exactement les mêmes clés et les mêmes valeurs.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day07/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function sontIdentiques(obj1, obj2) {
    let identique = true
    let keys1 = Object.keys(obj1)
    let keys2 = Object.keys(obj2)
    let values1 = Object.values(obj1)
    let values2 = Object.values(obj2)
    for (let i = 0; i < keys1.length; i++) {
        if(keys1[i] !== keys2[i]){
                    identique = false
        }
        if(values1[i] !== values2[i]){
        identique = false
    }
}   
        
    

return identique
}


let utilisateur = {
    nom : "reda",
    age : 23,
    estAdmin : true
}
let utilisateur2 = {
    nom : "reda",
    age : 23,
    estAdmin : true
}
console.log(sontIdentiques(utilisateur , utilisateur2));
