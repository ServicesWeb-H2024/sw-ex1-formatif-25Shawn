const sql = require('../config/db');

class Titre_Netflix{
    constructor(type_title, offset){
        this.type_title = type_title;
        this.offset = offset;
    }


    static requeteTitre(params){

        return new Promise((resolve, reject)=>{
            const requete = `SELECT * FROM netflix_titles WHERE show_type = ? LIMIT 10 OFFSET ?`;

            sql.query(requete, params, (error, result)=>{
                if(error){
                    reject(error);
                }
                else{
                    resolve(result);
                }
            });
        });
    }
}

module.exports = Titre_Netflix;