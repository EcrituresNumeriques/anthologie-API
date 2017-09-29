## à faire plateforme

- allignement avec semantic web (version 2.0)
- ajouter uri pour villes, auteurs, mots-clés etc. (1j) P5

## general
- ~~translation => versions sur toute la plateforme + api (4h) P1~~
- ~~Preload UI~~
- passer tous les fetchs dans les states de components
- ajouter tous les fetchs au store redux (pre-étape nécessaire pour regler tous les problemes d'ajouts non pris en compte immediatement par la plateforme).
- ajouter une UI pour fetch
- fractionner tous les components "specific" en meta components plus restreints (notes, versions, etc etc) pour faciliter la maintenance du code
- ajouter une policy pour log toute l'activité de l'API
- ajouter les collections de translations, entities, etc dans le model Users
- ajouter une UI pour /users et mettre mes contribs dedans (1j) P2


### Home
- ~~possibilité d'éditer le texte de welcome (même très geek, c'est moi qui va le faire - sur github par ex?)~~
- ~~ajout de licence partout (je peux le faire sur github?)~~

### Entities
- recherche dans la page entités (la même que dans la home) (2h) P2

- ~~possibilité d'effacer les entités? (3h) P1~~
- suprimer toutes les relations de l'entité (URI, etc) lors de l'effacement de l'entité.
- ~~classer par défault les entités par ordre alphabétique~~
- ~~add draft: il faut pouvoir spécifier l'édition et il faut ensuite afficher l'auteur (user qui a créé le texte) (2h) P1~~
- Pour "add draft", ce serait pas mal d'avoir le texte grec à côté, sur la droite X (4h) P6
- add keyword autocompletion (select keyword) - ou liste par famille, ou mieux: les deux: d'abord je choisi la famille et puis autocomplétion ou liste compl;ete si je n'cris rien (3h) P1

### Text allignement display :
- bouton pour revenir à l'arrière 9en général dans tous les menus qui s'ouvrent à partir d'entités - add keyword etc (8h) P3
- améliorer allignement des vers (pas trop grave)(2j) P7

## Authors
- ordre alphabétique (4h) P2
- possibilité d'effacer (3h) P2
- quand je créé l'auteur il ne l'associe pas tout de suite... donc j'en créé un deuxième... (1h) P2

### Scholies
- ~~possibilité d'afficher le scholie et de l'éditer - on ne peut pas afficher le texte iDEM POUR NOTES (1h) P1~~
- ~~possibilité d'effacer (2h) P1~~
### Notes
- ~~possibilité d'afficher le scholie et de l'éditer - on ne peut pas afficher le texte iDEM POUR NOTES (1h) P1~~
- ~~possibilité d'effacer (1h) P1~~
### Keywords
- ~~impossibilité d'effacer le titre du keyword(30min) P1~~
- ~~* Catégories de mots-clés : genre, mètre, personnes citées, personnages, thème, ville, ... Famille de mots-clés et catégories de mots-clés --> à y réfléchir~~
- ~~lister par catégorie et puis ordre alphabétique. Peut-être catégories qui s'ouvrent seulement si on clique (donc on voit d'abord la liste des catégories et si on clique on ouvre la liste des mots) (4h) P1~~
- ~~admin: crée familles~~
- ~~normal user: crée mots-clés dans famille~~


## bugs
- ~~il faut sortir et rentrer pour afficher l'épigramme quand on l'importe(1h) P1~~
- pour l'épigramme 7.2, par exemple, la plateforme ne recupère pas l'auteur depuis perseus (elle le faisait avant mais maintenant ca ne semble plus marcher) (1j a voir avec Gregory Crane) P7


### Langues
- ~~Séparer langues et versions --> langues et occurences X~~
- possibilité d'effacer (1h) P2
- ~~reprendre d'une liste~~
- ~~pas possibilité de créer pour utilisateur normal~~
- ~~possibilité de créer édition pour user normal mais pas langue~~
- ~~Ajouter images du manuscrit, de façon standardisée.~~
- Est-ce qu'on aligne le manuscrit et le texte X? P7

### Manuscrit
- possibilité d'éditer les manuscrits ajoutés P7
### Contributions
- Possibilité d'effacer depuis la page des contributions (4h) P7
### Cities
Question: comment tu l'avais importées?
- problèmes coordonnées gps... il n'y a pas NSEW!

### Champs à ajouter
- ~~images manuscrit~~
- Possibilité d'ajouter des enregistrement (4h) P6

- possibilité de monitorer l'activité - qui a fait quoi dernièrement pour admin (2 j) P5

## Problèmes d'affichage
- le uri ne peut pas être visualisé (des entités) p5

## Page auteurs
- il faudrait ajouter un champ uri p5
- il faudrait ajouter un champ de texte (genre biographie) p4
- effacer authors p4


## Mots-clés
- il faudrait être obligé de classer tout mot-clé créé dans une catégorie (pas de unassigned) p4

- personnes citées important d'ajouter un champ pour - existant ou pas réélles- historiques-mythologiques- personnages p5


## Varia
- il faudrait pouvoir éditer l'édition des textes - même sans pouvoir changer les textes eux-mêmes p5

### notes
enlever titre p4

## villes nommées dans les épigrammes, ajouter p5

## ajouter édition au scholies p4

## effacer tout ce qu'on crée

## langue par défault p6

## allignement: ajouter titre entité p4
