const modelTitre = require('../model/modelTitre');

exports.AfficherTitres = (req, res) => {

    const page = parseInt(req.query.page);



    var type_title = "";

    if(req.params.type_title === "Film"){
        type_title = "Movie";
    }
    else if(req.params.type_title === "Série"){
        type_title = "TV Show";
    }
    else{
        const message = {
            message: `Le type ${req.params.type_title} est invalide`
        }

        return res.status(400).send(message);
    }

    if(page < 1 || !Number.isInteger(page)){
        const message = {
            message: `La page est invalide`
        }

        return res.status(400).send(message);
    }

    const offset = (page - 1) * 10;
    const params = [type_title, offset];

    modelTitre.requeteTitre (params)

    .then(resultat => {

        const prochainePage = resultat.length > 0;

        const reponse = {
            titres: resultat.map(item =>({show_id:item.show_id,title:item.title})),
            filtre: req.params.type_title,
            page:page,
            url_page_suivante: prochainePage ? `/api/titres/${req.params.type_title}?page=${ page + 1 }` : null
        }
        return res.status(200).send(reponse);
    })
    .catch(error => {
        return res.status(500).send(error);
    });
}
