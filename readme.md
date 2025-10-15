# Jeu JavaScript : Feu, Eau, Terre

Ce projet est un petit jeu en JavaScript inspiré du principe "pierre-papier-ciseaux", où le joueur affronte l’ordinateur avec trois pouvoirs : feu, eau et terre.

## Règle du jeu

- Le joueur et l'ordinateur ont trois pouvoirs : **feu**, **eau**, **terre**
- Le **feu** bat la **terre**
- L'**eau** bat le **feu**
- La **terre** bat l'**eau**
- Il y a égalité si le joueur et l'ordinateur ont le même pouvoir
- Une manche est gagnée par le premier qui atteint le score de 10 points

## Technologies utilisées

- **HTML** : structure de la page et création des boutons pour les choix du joueur.
- **CSS** : feuille de style personnalisée pour rendre le jeu visuellement attractif et améliorer l’expérience utilisateur.
- **JavaScript** : logique du jeu, gestion des événements, génération aléatoire du choix de l’ordinateur, comparaison des choix et affichage dynamique des résultats.

## Choix techniques

- **Simplicité et accessibilité** : Le jeu est entièrement en JavaScript natif, sans framework, pour rester simple et accessible à tous.
- **Manipulation du DOM** : Les interactions et l’affichage des résultats se font dynamiquement pour une expérience fluide.
- **Feuille de style personnalisée** : J’ai choisi d’ajouter une feuille de style CSS pour rendre le jeu plus agréable visuellement, avec des couleurs distinctes pour chaque pouvoir et des boutons bien visibles.
- **Lisibilité du code** : Les fonctions sont séparées pour chaque action (choix du joueur, choix de l’ordinateur, comparaison, affichage) afin de faciliter la maintenance et l’évolution du projet.
