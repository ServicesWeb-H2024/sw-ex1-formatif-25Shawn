const constrollerTitre = require('../controller/controllerTitre');

const express = require('express');
const router = express.Router();


router.get('/:type_title', (req, res) => {

    constrollerTitre.AfficherTitres(req, res);
});


exports.router = router;