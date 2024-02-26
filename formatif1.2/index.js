const express = require('express');
const app = express();

const routesTitre = require('./src/route/routeTitre');
const { route } = require('./src/route/routeTitre');


app.use(express.json());
app.use('/api/titres', routesTitre.router);



const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});