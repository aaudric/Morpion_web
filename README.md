# Jeu Simple Tic-Tac-Toe

Ce projet est une implémentation basique du jeu Tic-Tac-Toe utilisant HTML et JavaScript. Il permet à deux joueurs de jouer tour à tour sur un même ordinateur. Le jeu détecte automatiquement une victoire ou un match nul et propose de réinitialiser la partie pour recommencer.

## Fonctionnalités

- Plateau de jeu Tic-Tac-Toe interactif
- Jeu en tour par tour entre deux joueurs
- Détection de victoire pour les deux joueurs
- Détection de match nul
- Fonctionnalité de réinitialisation du jeu

## Comment Jouer

1. Ouvrez le jeu dans un navigateur web en chargeant le fichier HTML.
2. Le jeu commence avec le joueur X. Cliquez sur une cellule vide pour faire un mouvement.
3. Le jeu passe ensuite au joueur O. Continuez à alterner les tours.
4. Le jeu détecte et annonce une victoire ou un match nul.
5. Cliquez sur l'alerte pour réinitialiser le jeu et commencer un nouveau tour.

## Détails de l'Implémentation

La logique du jeu est implémentée en JavaScript. Elle utilise la fonction `document.getElementsByTagName` pour interagir avec les cellules du tableau (td) qui composent le plateau de jeu. Les joueurs cliquent sur les cellules pour faire leurs mouvements. Le jeu vérifie s'il y a une victoire ou un match nul après chaque mouvement. L'état du jeu peut être réinitialisé, effaçant le plateau et commençant une nouvelle partie.

### Fonctions

- **gagne(joueur) :** Vérifie si le joueur actuel a gagné la partie.
- **matchNul() :** Vérifie si la partie est un match nul.
- **reset() :** Efface le plateau de jeu et réinitialise la partie.

### Logique du Jeu

Le jeu alterne les tours entre deux joueurs, X et O. Il vérifie une condition de victoire ou de match nul après chaque mouvement. Les conditions de victoire sont vérifiées le long des lignes, des colonnes et des diagonales. Si le plateau est plein sans qu'aucun joueur n'ait gagné, le jeu déclare un match nul.

## Comment Configurer

Il suffit d'inclure le code JavaScript fourni dans votre fichier HTML à l'intérieur d'une balise `<script>`. Assurez-vous d'avoir un tableau avec des éléments `td` correspondant au plateau de jeu.

Amusez-vous bien à jouer au Tic-Tac-Toe !
