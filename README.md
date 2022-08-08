#  Groupomania P7 - Anthony Marcato

## *Introduction*

Réalisation de la partie 7 de la formation OpenClassRooms qui consiste à faire un réseau social d'entreprise "Groupomania".

## *Spécifications*

### Une page de connexion

Une page de connexion permettant à l’utilisateur de se connecter, ou bien
de créer un compte s’il n’en possède pas. Ici il faut demander le minimum
d’informations, la connexion doit se faire à partir de deux éléments : le mail
de l’employé, et un mot de passe.

● Un utilisateur doit avoir la possibilité de se déconnecter.
● La session de l’utilisateur persiste pendant qu’il est connecté.
● Les données de connexion doivent être sécurisées.

### Une page d'accueil

La page d’accueil doit lister les posts créés par les différents utilisateurs.
On voudra que les posts soient listés de façon antéchronologique (du plus
récent au plus ancien).

● Un utilisateur doit pouvoir créer un post.
● Un post doit pouvoir contenir du texte et une image.
● Un utilisateur doit aussi pouvoir modifier et supprimer ses posts.
● Un utilisateur doit pouvoir liker un post, une seule fois pour chaque post.

### Un rôle administrateur

Dans le but de pouvoir faire de la modération si nécessaire, il faudra créer
un utilisateur “administrateur” ; celui-ci aura les droits de modification /
suppression sur tous les posts du réseau social.

## *Identité graphique*

Police d’écriture : Lato.
Couleurs :
● Primaire : - #FD2D01
● Secondaire : - #FFD7D7
● Tertiaire : - #4E5166

---

## *Installation*

Créez un fichier .env dans le dossier "server" et ajoutez les clés suivantes: 

PORT=5000
MONGO_DB="mongodb+srv://marcat:b9b08cd7@cluster0.yubck.mongodb.net/SocialMedia?retryWrites=true&w=majority"
SECRET_TOKEN="ANY-SECRET-TOKEN"
REACT_APP_PUBLIC_FOLDER = http://localhost:5000/
CRYPTOJS_EMAIL_KEY="ANY-SECRET-KEY"

--

Créez un fichier .env dans le dossier "client" et ajoutez la clé suivante:

REACT_APP_PUBLIC_FOLDER = http://localhost:5000/images/

Ouvrez un nouveau terminal et tapez les commandes suivantes: 

   - cd server
- - npm install
- - npm start



Ouvrez un nouveau terminal et tapez les commandes suivantes: 

- cd client
- - npm install
- - npm start


--

## *Enjoy :)*