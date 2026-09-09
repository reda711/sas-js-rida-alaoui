/**
 * JOUR 02 — GUIDE 03
 * Les boucles imbriquées (Grille)
 *
 * OBJECTIF
 * Affichez un carré de 3 lignes et 3 colonnes rempli d'étoiles *.
 *
 * Aide : consulte ../02-guides.md seulement si tu bloques.
 */
'use strict';

let carre = ""
for (let i = 1 ; i <= 9 ; i++){
    carre += "*"
    if(i % 3 == 0){
        carre += "\n"
    }    
}    
    console.log(carre)

