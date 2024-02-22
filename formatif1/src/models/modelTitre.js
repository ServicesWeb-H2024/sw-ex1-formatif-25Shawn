const e = require('express');
const sql = require('../config/db');

class netflix{

    constructor(type_title, offset){
        this.type_title = type_title;
        this.offset = offset;
    }

    
static requeteTitre = (params) =>{
        return new Promise((resolve, reject) => {
            let requete = 'SELECT * FROM netflix_titles WHERE show_type = ? LIMIT 10 OFFSET ?';

            sql.query(requete, params, (err, res) => {
                if(err){
                    console.log('error: ', err);
                    return reject(err);
                }
                console.log('Titres: ', res);
                return resolve(res);
            });
        });
    }
}

module.exports = netflix;