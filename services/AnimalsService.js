const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/zoo.json');

class AnimalsService {

    static getAll() {
        const data = fs.readFileSync(filePath);
        return JSON.parse(data);
    }

    static getById(id) {
        const animals = this.getAll();
        return animals.find(animal => animal.id === id);
    }

    static getEndangered() {
        const animals = this.getAll();
        return animals.filter(animal => animal.isEndangered);
    }

    static getByHabitat(habitat) {
        const animals = this.getAll();
        return animals.filter(animal => animal.habitat === habitat);
    }

    static getBySpecies(species) {
        const animals = this.getAll();
        return animals.filter(animal => animal.species === species);
    }
}

module.exports = AnimalsService;
