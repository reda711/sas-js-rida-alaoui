/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 09 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FILTRAGE DE DONNÉES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Dans le même tableau de candidats, écrivez une fonction qui retourne un nouveau tableau contenant uniquement les candidats ayant un score >= 10.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-09
 * ▶️ Commande : node day07/exercices/exercice-09.js
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

function plusdix(candidats) {
    let result = [{}]
    let count = 0
    for (let i = 0; i < candidats.length; i++) {
        if(candidats[i].score >= 10){
            result[count] = candidats[i] 
            count++
        }
        
    }
    return result
}

console.log(plusdix(candidats));
