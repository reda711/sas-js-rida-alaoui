/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 16 · NIVEAU 3 : DÉFI (AVANCÉS)
 * SCRAPING : EXTRACTION DE DONNÉES MIXTES
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vous avez "scrappé" une page mal codée et obtenu ce tableau : ["Prix", 15.5, null, "Quantite", 3, undefined, "Total", 46.5]. Écrivez une fonction qui filtre ce tableau pour ne garder QUE les nombres valides.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-16
 * ▶️ Commande : node day05/exercices/exercice-16.js
 */
'use strict';

// // 1. Identifie les données nécessaires.
// // 2. Écris ta solution sous cette ligne.
function filter(message) {
let cleanmsg = []
let count = 0
    for (let i = 0; i < message.length; i++) {
        if(message[i] ===  Number(message[i])){
            cleanmsg[count] = message[i]
            count++
        }
    }
    return cleanmsg
}

console.log(filter(["Prix", 15.5, null, "Quantite", 3, undefined, "Total", 46.5]))
