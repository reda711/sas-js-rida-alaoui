/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * GÉNÉRATEUR DE MOT DE PASSE FACTICE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Écrivez une fonction genererMotDePasse(longueur) qui génère et retourne une chaîne aléatoire contenant X fois la lettre "A" ou un chiffre aléatoire. (Utilisez Math.random()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day03/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function genererMotDePasse(longueur) {
    let password = ""
    longueur--
    let min = 60
    let max = 69
    for(let i = longueur ; i >= 0; i--){
       if(Math.floor(Math.random() * 11) + min == 65){
        password = password + String.fromCharCode(65)
       }
       else {
       let digit = (Math.floor(Math.random() * 11) + min) % 10 
        password = password + digit
       }
    }    return password   

}
       console.log(genererMotDePasse(5))