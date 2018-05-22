## Todo (update 22mai)

## priorité 1
- **récupérer** les scholies des lycéens sur l'ancienne base (apapi)
- pouvoir éditer les manuscrits (voir et éditer les infos)
- pour les images liées aux entités : idem
- pour Scholies, ajouter un champs manuscrits/image
- pouvoir changer le champ `title` des entités
- lister les mot-clés par ordre alphabétiques lorsqu'ils sont classés par sous-catégories.
- Lorsqu'on crée un mot-clé, il faut un champs obligatoire `category`
- pouvoir visualiser l'uri entière des entités
- Marcello/enrico :  page couverture avec texte de welcome : dans `front/assets/components/home/componentHome... ` et `front/assets/components/layout/header... `
- Marcello/enrico : doublon de personnes citées ? envoyer les identifiants à arthur qui fera un collapse.
- pour les admin : effacer une catégorie (dont elsa)

## priorité 2
- recherche à la volée dans les entités
- ajouter le nom des cités dans les entités/épigrammes : on veut pouvoir attacher des villes à des entités (et non pas simplement à des auteurs)
- Notes : le titre des notes pose problème: le rendre non-éditable, créé par défaut avec `nomEntité-numéroDeNote`
- Ajouter l'édition au scholies, outre que la langue : à faire via skype pour consolider les éditions/langues
- pour les administrateurs : lister les 20 derniers ajouts/update sur la plateforme toutes choses confondues

## priorité 3
- erreur si on crée une entité avec nouvel auteur (création d'auteur), alors l'auteur n'est pas ajouté (pas visible dans le frontend).
  - "sortir et rentrer" l'épigramme quand on l'importe.
- pouvoir éditer les infos d'édition des versions.
- pendant un alignement : ajouter le titre de l'épigramme + les titres de versions (langue et édition)
- ajouter une langue de travail par défaut pour l'utilisateur

## priorité 4
- page auteur :
  - ajouter un champs uri pour les auteurs (vers des identifiants uniques (wikidata ou autre))
  - ajouter un champs de texte pour la biographie (ou bien aller récupérer des biographies existantes..?) : pls versions et plusieurs langues
- bouton pour revenir en arrière
- ajouter des enregistrements sonores.
- ajouter une note aux traductions : principe, associer l'uri de l'objet à une nouvelle note, en reprenant l'autocomplétion de "find something on the platform"
  - pour les versions : ajouter une note.

## priorité 5
- parler avec crane : probleme pour récupérer le livre 7 : quel encodage ?
- chaque utilisateur peut se créer une collection d'uri validée (selon lui)
1. improvement-full manuscrit
  - se baser sur une version jpg du manuscrit.
  - puis on ajouter un champs coordonnées d'image pour identifier les épigrammes
  - export possible vers xml

### option à discuter
- éditer des auteurs créés par d'autres utilisateurs ?
- pb pour enrico : quand est ce qu'on refresh l'api ? récupérer le message d'erreur de la console.


## priorité 6

- alignement avec semantic web (version 2.0)

## general
- fractionner tous les components "specific" en meta components plus restreints (notes, versions, etc etc) pour faciliter la maintenance du code
- ajouter une policy pour log toute l'activité de l'API
- ajouter les collections de translations, entities, etc dans le model Users
- ajouter une UI pour /users et mettre mes contribs dedans (1j) P2

### Entities

- supprimer toutes les relations de l'entité (URI, etc) lors de l'effacement de l'entité.
- Pour "add draft", ce serait pas mal d'avoir le texte grec à côté, sur la droite X (4h) P6

### Text allignement display :
- améliorer alignement des vers (pas trop grave)(2j) P7


### Langues
- Est-ce qu'on aligne le manuscrit et le texte X? P7

### Manuscrit

### Contributions
- Possibilité d'effacer depuis la page des contributions (4h) P7

- ? personnes citées important d'ajouter un champ pour - existant ou pas réélles- historiques-mythologiques- personnages p5
