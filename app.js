const express = require('express');
const app = express();

//middleware d'authentification
const basicAuth = require('./auth')


// Route protégée par l'authentification Basique
app.get('/basicAuth', basicAuth, (req, res) => {
  res.send('Vous êtes authentifié avec succès !');
});

// Route publique / page d'accueil
app.get('/', (req, res) => {
  res.send('Test technique de Remi OZCAN');
});

// Démarrage du serveur
app.listen(3000, () => {
  console.log('Le serveur écoute sur le port 3000');
});