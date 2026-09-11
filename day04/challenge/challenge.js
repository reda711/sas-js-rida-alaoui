/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · CHALLENGE
 * LE GESTIONNAIRE D'INVENTAIRE DE L'AVENTURIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer l'inventaire (sac à dos) d'un héros dans un jeu vidéo, en utilisant uniquement des fonctions pour manipuler la "mémoire" globale.
 *
 * Consignes :
 * 1. Déclarez une variable globale (hors des fonctions) or = 0.
 * 2. Créez une fonction ajouterOr(montant) qui ajoute à la bourse et affiche "Vous avez ramassé [montant] or. Total: [or]".
 * 3. Créez une fonction depenserOr(montant) qui vérifie si le héros a assez d'or. Si oui, déduit l'or et affiche l'achat. Sinon, affiche "Fonds insuffisants".
 * 4. Créez une fonction combatGagne() qui appelle ajouterOr avec un montant aléatoire entre 10 et 50.
 * 5. Simulez une aventure : gagnez 3 combats, puis tentez d'acheter une épée à 100 or.
 * Bonus : Utilisez des closures pour éviter d'avoir or en variable globale vulnérable !
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day03/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
function or(){
    let or = 0 

    function ajouterOr(montant) {
    or += montant
    return `you have picked ${montant} gold , your new balance is ${or}`
}
function depenserOr(montant) {
    if(or < montant){
        return `you don't have enough to processed`
    }
    else {
            or -= montant
        return `you have spent ${montant}, your new balace is ${or}`
    }
}
function combatGagne() {
    let min = 10
    let max = 50
    let montant = Math.floor(Math.random() * (max - min + 1) + min)
    return ajouterOr(montant)
}
    return {
        ajouterOr , depenserOr , combatGagne
    }
}
const wallet = or()
console.log(wallet.combatGagne())
console.log(wallet.combatGagne())
console.log(wallet.combatGagne())
console.log(wallet.depenserOr(100))