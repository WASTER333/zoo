const AnimalsService = require('../services/AnimalsService');

class AnimalsController {

    static getAll(req, res) {
        res.json(AnimalsService.getAll());
    }

    static getById(req, res) {
        const id = parseInt(req.params.id);
        const animal = AnimalsService.getById(id);
        animal
            ? res.json(animal)
            : res.status(404).json({ message: "nie znaleziono zwierzęcia" });
    }

    static getEndangered(req, res) {
        res.json(AnimalsService.getEndangered());
    }

    static getByHabitat(req, res) {
        const habitat = req.params.habitat;
        res.json(AnimalsService.getByHabitat(habitat));
    }

    static getBySpecies(req, res) {
        const species = req.query.species;
        res.json(AnimalsService.getBySpecies(species));
    }
}

module.exports = AnimalsController;
