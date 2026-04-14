🍽️ DashMeal

DashMeal est une plateforme moderne de gestion de restaurants et de commande en ligne. Elle permet aux restaurateurs de gérer leur menu, de suivre les commandes en temps réel et d'offrir une expérience fluide aux clients via une interface intuitive et responsive.
🚀 Fonctionnalités
👨‍🍳 Côté Restaurant (Dashboard)

    Gestion du Menu : Création, modification et suppression de plats avec catégories et prix.

    Suivi des Commandes : Interface de gestion des commandes en temps réel (En attente, En cours, Livrée).

    Profil Restaurateur : Personnalisation des informations de l'établissement.

    Statistiques : Aperçu rapide des performances et des ventes.

👤 Côté Client

    Parcours Fluide : Consultation des menus avec un design épuré.

    Système de Panier : Ajout de plats et gestion des quantités avant validation.

    Interface Responsive : Expérience optimisée pour mobile, tablette et desktop.

🛠️ Stack Technique

Le projet repose sur des technologies robustes privilégiant la performance et la simplicité de maintenance :

    Backend : AdonisJS 6 (Framework Node.js TypeScript)

    Frontend : Bootstrap 5 (Design épuré et responsive) & EdgeJS (Moteur de template)

    Base de données : PostgreSQL (via l'ORM Lucid)

    Gestion des assets : Vite.js

📦 Installation
Prérequis

    Node.js (v20+)

    PostgreSQL installé et configuré

    npm ou pnpm

Étapes d'installation

    Cloner le repository
    Bash

    git clone https://github.com/votre-username/dashmeal.git
    cd dashmeal

    Installer les dépendances
    Bash

    npm install

    Configuration de l'environnement
    Copiez le fichier .env.example en .env et configurez vos accès à la base de données.
    Bash

    cp .env.example .env

    Lancer les migrations et les seeders
    Bash

    node ace migration:run
    node ace db:seed

    Lancer le serveur de développement
    Bash

    npm run dev

    L'application sera disponible sur http://localhost:3333.

🎨 Design & UX

L'interface a été conçue avec une approche minimaliste, utilisant les composants natifs de Bootstrap 5 pour garantir une rapidité de chargement maximale et une navigation sans friction.
📝 Licence


🤝 Contact

Samuel MAHAN - Développeur Full-Stack
