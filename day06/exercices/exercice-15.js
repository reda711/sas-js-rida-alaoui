/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * FUSION TRIÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez deux tableaux DÉJÀ triés : [1, 3, 5] et [2, 4, 6]. Écrivez un algorithme pour les fusionner en un seul tableau trié [1, 2, 3, 4, 5, 6] (sans utiliser .sort()).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let tableau1 = [1, 3, 5]
let tableau2 = [2, 4, 6]
let tableaumix = []
     for (let i = 0; i < tableau1.length; i++) {
          tableaumix[i * 2] = tableau1[i]
     }
     for (let j = 0; j < tableau1.length; j++) {
          tableaumix[j * 2 + 1] = tableau2[j]          
     }
console.log(tableaumix);
