/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 07 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * NETTOYAGE DE SCRAPING AVEC DES OBJETS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez scrappé une liste de prix : [{ article: "PC", prix: "1500$" }, { article: "Souris", prix: "25$" }]. Écrivez une fonction qui modifie les objets pour que le prix devienne un vrai Number (enlever le "$").
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day07/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let prices = [{ article: "PC", prix: "1500$" }, { article: "Souris", prix: "25$" }]
function priceonly(sentence) {
    let pricesonly = []
    for (let i = 0; i < sentence.length; i++) {
        pricesonly[i] = Number(prices[i].prix.slice(0 , -1))
    }
    return pricesonly
}
console.log(priceonly(prices));