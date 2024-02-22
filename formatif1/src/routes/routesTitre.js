const controllerTitre = require('../controllers/controllerTitre');
const express = require('express');
const router = express.Router();

router.get('/:type_title',(req,res)=>{

    controllerTitre.afficherTitre(req,res);
});

exports.router = router;