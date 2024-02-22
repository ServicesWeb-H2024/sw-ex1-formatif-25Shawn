const modelTitre = require('../models/modelTitre.js');
exports.afficherTitre = (req, res) => {
    const page = parseInt(req.query.page);

    if (req.params.type_title === 'Film') {
        req.params.type_title = 'Movie';
    } else if (req.params.type_title === 'Série') {
        req.params.type_title = 'TV Show';
    } else {
        return res.status(400).send(`Le type ${req.params.type_title} est invalide`);
    }

    if(page < 1){
        return res.status(400).send(`La page est invalide`);
    }

    const params = [req.params.type_title, page];

    console.log(params);
    modelTitre.requeteTitre(params)
        .then(result => {
            return res.status(200).send(result);
        })
        .catch(error => {
            return res.status(500).send(error);
        });
}

exports.afficherTitre = (req, res) => {

    
    const page = parseInt(req.query.page);

    if(req.params.type_title === 'Film'){
        req.params.type_title = 'Movie';
    }
    else if(req.params.type_title === 'Série'){
        req.params.type_title = 'TV Show';
    }

    const params = [req.params.type_title, page];

    console.log(params);
    modelTitre.requeteTitre(params)
        .then(result => {
            return res.status(200).send(result);
        })
        .catch(error => {
            return res.status(500).send(error);
        });
}
