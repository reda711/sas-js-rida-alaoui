/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * OCCURRENCES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui prend un tableau de mots ["pomme", "banane", "pomme", "orange", "banane", "pomme"]. Comptez combien de fois chaque élément apparaît. (Vous pouvez afficher : "pomme: 3, banane: 2, orange: 1").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day05/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function Quantite(mots) {
    let compteur = [];
    let quantite = [];
    let count = 0;
    let result = []
    for (let i = 0; i < mots.length; i++) {

        if (!compteur.includes(mots[i])) {
            compteur[count] = mots[i];
            quantite[count] = 1;
            count++;
        } 
        else {
            let index = compteur.indexOf(mots[i]);
            quantite[index]++;
        }
    }
    for (let k = 0; k < compteur.length; k++) {
      result[k] = `${compteur[k]} : ${quantite[k]} `
      
    }
    result = String(result)
    return result;
  }

  console.log(Quantite(["pomme", "banane", "pomme", "orange", "banane", "pomme"]));
