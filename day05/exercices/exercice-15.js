/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 05 · EXERCICE 15 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VÉRIFICATEUR D'ANAGRAMME
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Vérifiez si "chien" et "niche" sont des anagrammes (elles contiennent exactement les mêmes lettres, même quantité).
 * Indice : vous pouvez les transformer en tableau, les trier, et les rejoindre.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-15
 * ▶️ Commande : node day05/exercices/exercice-15.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.

function compare(mot1, mot2) {
    if(mot1.length !== mot2.length){
        return false
    }
    mot1 = mot1.split("")
    mot2 = mot2.split("")
    for (let i = 0; i < mot1.length; i++) {
        let found = false
        for (let j = 0; j < mot2.length; j++) {
            if(mot1[i] === mot2[j]){
                found = true
                mot2[j] = null
                break
            }
            
        }
     if(found == false){
        return false
     }   
    }
return true


}


        
