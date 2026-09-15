/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day07/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let test = {
    prenom: "Reda",
    nom: "Alaoui",
    adresse: {
        ville: "Meknes",
        pays: "Maroc"
    }
};
let clone = {...test}
    clone.adresse.ville = "Midelt"
console.log(clone);
console.log(test);

// Because after we clone an object we can change its properties without affecting the original but when we change the value on the nested object it affect the original also because it still reference to the same object