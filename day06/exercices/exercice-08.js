/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 08 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * RECHERCHE DU MAXIMUM ET MINIMUM
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui parcourt un tableau de nombres aléatoires et retourne le plus grand et le plus petit nombre, SANS utiliser Math.max ni Math.min.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-08
 * ▶️ Commande : node day05/exercices/exercice-08.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
function tableau(numbers) {
    let max = 0
    let min = 0
    numbers = Array(numbers)
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * 10)
    }
        numbers = numbers.sort()
        max = numbers[numbers.length - 1]
        min = numbers[0]
    return `${numbers} the min is ${min} and the max is ${max}` 
}
console.log(tableau(5));
