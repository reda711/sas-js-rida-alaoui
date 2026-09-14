/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * GÉNÉRATEUR DE COMBINAISONS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Étant donné un tableau de 3 couleurs ["Rouge", "Vert", "Bleu"], générez toutes les paires possibles : ["Rouge-Vert", "Rouge-Bleu", "Vert-Rouge", ...].
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day05/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let couleurs = ["Rouge", "Vert", "Bleu"]
let pairs = []
let count = 0
    for (let i = 0; i < couleurs.length; i++) {
        for (let j = 0; j < couleurs.length; j++) {
            if(i !== j){
                pairs[count] = couleurs[i] + "-" + couleurs[j]
                count++
            }
        }
        
    }
    console.log(pairs);
    