# Projet MERN

- Définition : MERN est un acronyme représentant un ensemble de technologies (à la fois côté serveur et côté client) permettant de développer des applications web full stack. Voici les 4 technologies utilisées par cette stack :

  - MongoDB
  - Express.js
  - React
  - Node

## Le backend :

- Dans le terminal ouvrir votre dossier backend et lancer la commande `npm init' pour initialiser le projet.
- Installer nodemon `npm install nodemon'
  - nodemon est un outil qui permet de relancer automatiquement le serveur à chaque modification du code.

<img        src="./backend/assets/capture005.png"
            alt="Capture du projet MERN"
            width= 80%
            align="center"
/>

- il suffira de lancer la commande `npm start' pour lancer le serveur.
- Installer express `npm install express '
  - "Express" est un framework pour Node.js qui facilite la création d'applications web en fournissant des fonctionnalités pour la gestion des requêtes HTTP, la définition des routes, la gestion des sessions, la gestion des cookies, etc.
- Installer dotenv `npm install dotenv'
  - Dotenv est un module qui permet de charger des variables d'environnement depuis un fichier .env.
  - Par la suite, il sera possible d'accéder aux variables d'environnement via process.env.VARIABLE
- Creer un dossier config et un fichier .env pour les informations sensibles.

<img        src="./backend/assets/capture001.png"
            alt="Capture du projet MERN"
            width= 80%
            align="center"
/>

- Creer un fichier server.js (ou index.js) qui sera la base de notre serveur.
- Installer mongoose `npm install mongoose'
  - Mongoose est un module qui permet de faciliter la gestion de la base de données MongoDB.
- Confifuger dans le dossier config le fichier db.js pour la connexion à la base de données.

<img        src="./backend/assets/capture001.png"
            alt="Capture du projet MERN"
            width= 80%
            align="center"
/>

- Tester la connexion à la base de données dans le fichier server.js

<img        src="./backend/assets/capture003.png"
            alt="Capture du projet MERN"
            width= 80%
            align="center"
/>

- ou avec nodemon :

<img src="./backend/assets/capture004.png"
alt="Capture du projet MERN"
width= 80%
align="center"
/>

- Creer des routes dans le dossier routes et les importer dans le fichier server.js
  - const userRoutes = require('./routes/user');
  - app.use('/api/user', userRoutes);

<img src="./backend/assets/capture006.png"
alt="Capture du projet MERN"
width= 80%
align="center"
/>

- Creer un dossier routes et un fichier user.routes.js

<img src="./backend/assets/capture006.png"
alt="Capture du projet MERN"
width= 80%
align="center"
/>

- A présent api/user/register est disponible pour créer un nouvel utilisateur.
