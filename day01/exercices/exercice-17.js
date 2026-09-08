/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 01 · EXERCICE 17 · NIVEAU 3 : DÉFI (AVANCÉS)
 * JEU : PIERRE, PAPIER, CISEAUX
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Déclarez deux variables joueur1 = "Pierre" et joueur2 = "Ciseaux". En utilisant des conditions, déterminez qui a gagné. (Gérez tous les cas possibles ou utilisez une logique optimisée).
 *
 * RÉSULTAT ATTENDU
 * Joueur 1 gagne !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-17
 * ▶️ Commande : node day01/exercices/exercice-17.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
let joueur1 = "Pierre"
let joueur2 = "Ciseaux"

if(joueur1 == "Pierre" && joueur2 == "Ciseaux"){
    console.log("Joueur 1 gagne")
}
else if(joueur1 == "PAPIER" && joueur2 == "Ciseaux"){
    console.log("Joueur 2 gagne")
}
else if(joueur1 == "Ciseaux" && joueur2 == "Ciseaux"){
    console.log("Draw")
}
else if(joueur1 == "PAPIER" && joueur2 == "Pierre"){
    console.log("Joueur 1 gagne")
}
else if(joueur1 == "PAPIER" && joueur2 == "PAPIER"){
    console.log("Draw")
}
else if(joueur1 == "Pierre" && joueur2 == "PAPIER"){
    console.log("joueur 2 gagne")
}
else if(joueur1 == "Pierre" && joueur2 == "Pierre"){
    console.log("Draw")
}
else if(joueur1 == "Ciseaux" && joueur2 == "Pierre"){
    console.log("joueur2 gagne")
}
else if(joueur1 == "Ciseaux" && joueur2 == "PAPIER"){
    console.log("joueur1 gagne")
}
else {
    console.log("invalide input")
}