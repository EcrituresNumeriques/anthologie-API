## à faire plateforme

- allignement avec semantic web (version 2.0)
- ajouter uri pour villes, auteurs, mots-clés etc.

## general
- translation => versions sur toute la plateforme + api
- ~~Preload UI~~
- passer tous les fetchs dans les states de components
- ajouter tous les fetchs au store redux (pre-étape nécessaire pour regler tous les problemes d'ajouts non pris en compte immediatement par la plateforme).
- ajouter une UI pour fetch
- fractionner tous les components "specific" en meta components plus restreints (notes, versions, etc etc) pour faciliter la maintenance du code
- ajouter une policy pour log toute l'activité de l'API
- ajouter les collections de translations, entities, etc dans le model Users
- ajouter une UI pour /users et mettre mes contribs dedans


### Home
- ~~possibilité d'éditer le texte de welcome (même très geek, c'est moi qui va le faire - sur github par ex?)~~
- ~~ajout de licence partout (je peux le faire sur github?)~~

### Entities
- recherche dans la page entités (la même que dans la home)

- possibilité d'effacer les entités?

- ~~classer par défault les entités par ordre alphabétique~~
- add draft: il faut pouvoir spécifier l'édition et il faut ensuite afficher l'auteur (user qui a créé le texte)
- Pour "add draft", ce serait pas mal d'avoir le texte grec à côté, sur la droite X
- add keyword autocompletion (select keyword) - ou liste par famille, ou mieux: les deux: d'abord je choisi la famille et puis autocomplétion ou liste compl;ete si je n'cris rien

### Text allignement display :
- bouton pour revenir à l'arrière 9en général dans tous les menus qui s'ouvrent à partir d'entités - add keyword etc
- améliorer allignement des vers (pas trop grave)

## Authors
- ordre alphabétique
- possibilité d'effacer
- quand je créé l'auteur il ne l'associe pas tout de suite... donc j'en créé un deuxième...

### Scholies
- possibilité d'afficher le scholie et de l'éditer - on ne peut pas afficher le texte iDEM POUR NOTES
- possibilité d'effacer
### Notes
- possibilité d'afficher le scholie et de l'éditer - on ne peut pas afficher le texte iDEM POUR NOTES
### Keywords
- impossibilité d'effacer le titre du keyword
- ~~* Catégories de mots-clés : genre, mètre, personnes citées, personnages, thème, ville, ... Famille de mots-clés et catégories de mots-clés --> à y réfléchir~~
- lister par catégorie et puis ordre alphabétique. Peut-être catégories qui s'ouvrent seulement si on clique (donc on voit d'abord la liste des catégories et si on clique on ouvre la liste des mots)
- ~~admin: crée familles~~
- ~~normal user: crée mots-clés dans famille~~


## bugs
- il faut sortir et rentrer pour afficher l'épigramme quand on l'importe
- pour l'épigramme 7.2, par exemple, la plateforme ne recupère pas l'auteur depuis perseus (elle le faisait avant mais maintenant ca ne semble plus marcher)


### Langues
- ~~Séparer langues et versions --> langues et occurences X~~
- possibilité d'effacer
- ~~reprendre d'une liste~~
- ~~pas possibilité de créer pour utilisateur normal~~
- ~~possibilité de créer édition pour user normal mais pas langue~~
- ~~Ajouter images du manuscrit, de façon standardisée.~~
- Est-ce qu'on aligne le manuscrit et le texte X?

### Contributions
- Possibilité d'effacer depuis la page des contributions
### Cities
Question: comment tu l'avais importées?
- problèmes coordonnées gps... il n'y a pas NSEW!

### Champs à ajouter
- ~~images manuscrit~~
- Possibilité d'ajouter des enregistrement

- possibilité de monitorer l'activité - qui a fait quoi dernièrement pour admin
