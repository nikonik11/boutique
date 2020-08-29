// ETAPE 1, Je crée mon fichier db.js appeler db par convention pour créer une connexion a ma bdd
// Pour cela j'utilise mongoose qui est un framework qui permet de faciliter la communication entre mongodb et node

const mongoose = require('mongoose'); // pour l'utiliser , je le require
const config = require('./src/config/env.config'); // permet de recuperer les variable d'environnement du fichier env.config