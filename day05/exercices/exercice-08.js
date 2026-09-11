/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * CAPITALISATION (TITLE CASE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction capitaliser(mot) qui prend "yOUcoDe" et retourne "Youcode" (seule la première lettre est en majuscule, le reste en minuscules).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function capitaliser(mot) {
    let result = ""
    let firstletter = mot.charAt(0).toUpperCase()
    for(let i = 0 ; i <= mot.length ; i++){
        result += mot.charAt(i).toLowerCase()
    }
    result = result.slice(1)
    result = firstletter + result
    return result
}
