const express = require('express');
const AnimalsController = require('./controllers/AnimalsController');

const app = express();
const PORT = 3000;


app.get('/animals', AnimalsController.getAll);
app.get('/animals/:id', AnimalsController.getById);
app.get('/animals/endangered', AnimalsController.getEndangered);
app.get('/animals/habitat/:habitat', AnimalsController.getByHabitat);
app.get('/animals/species', AnimalsController.getBySpecies);


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
