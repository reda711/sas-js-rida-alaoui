/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DANS UN TABLEAU D'OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez un tableau de candidats (chaque objet a nom et score). Écrivez une fonction qui retourne le nom du candidat ayant le meilleur score.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day07/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let candidats = [
    {
        nom : "oussama",
        score : 5
    }
    ,{
        nom : "nasser", 
        score : 100
    }
    ,{
        nom : "zakaria",
        score : 60
    }
]
function meilleur(candidats) {
    let meilleurscore = 0
    for (let i = 0; i < candidats.length; i++) {
        if(candidats[i].score > meilleurscore){
            meilleurscore = candidats[i].score
        }
        
    }
    return meilleurscore
}
