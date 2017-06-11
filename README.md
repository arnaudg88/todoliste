# Site web Todo liste

Ce projet est un site web qui permet la gestion d'une todo liste comme Evernote (https://evernote.com)

## Outils

Meteor ([https://www.meteor.com/]())
	C'est un framework de node.js de développement web en javascript
    
MongoDB ([https://www.mongodb.com/]())
	C'est un système de stockage de données NoSQL
    
### Packages

**ian:accounts-ui-bootstrap-3**       1.2.89  Ajoute un formulaire de connection
**accounts-password**                 1.3.6  Gestion des mot de passe du formulaire de connection
**aldeed:collection2-core**           2.0.1  Gestion de la structure des collections mongoDB
**momentjs:moment**                   2.18.1  Gestion des dates et heures sur javascript
**rajit:bootstrap3-datepicker**       1.6.4  Permet de choisir une date
**twbs:bootstrap**                    3.3.6  bootstrap
**kadira:blaze-layout**               2.3.0  Gestion de l'affichage des templates
**kadira:flow-router**                2.12.1  Gestion des routes du site web
    
## Installation

1. Télécharger le projet

2. Il faut installer meteor, sur ce lien [https://www.meteor.com/install]()

3. Ouvrir une fenêtre de commande dans le dossier du projet et de faire les commandes suivantes :

> $ meteor npm install

> $ meteor

Une fois que la fenêtre de commande affiche : 

> App running at: http://localhost:3000/

4. Il suffit d'aller à l'aide d'un navigateur web sur le lien [http://localhost:3000/]()

## Structure du projet

**imports/ui/pages** Page du site web
**imports/ui/components** Templates
**imports/api/notes** Gestion de la collection des notes
**imports/startup/client/routes.js** Gestion des routes