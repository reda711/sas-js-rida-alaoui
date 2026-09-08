/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * VALIDATION DE PANIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Un client achète un panier de 350 MAD. S'il dépasse 200 MAD, la livraison est gratuite. S'il dépasse 500 MAD, il a en plus 10% de réduction. Affichez le coût final du panier et si la livraison est gratuite ou non.
 *
 * RÉSULTAT ATTENDU
 * Coût final: 350 MAD, Livraison: Gratuite
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day01/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let panier = 550
let coutfinal
if(panier >= 200 && panier < 500){
    coutfinal = panier + " " + "plus la livraison est gratuite"
    console.log(coutfinal)
}
else if(panier < 200){
    coutfinal = panier + "les frais de livraison"
    console.log(coutfinal)
}
else{
    coutfinal = panier / 100 * 90 + " plus la livraison est gratuite"
    console.log(coutfinal) 
}