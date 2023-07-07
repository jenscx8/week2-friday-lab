const animal_data = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger = 50) {
        this.name = name
        this.species = species
        this.color = color
        this.hunger = hunger
    }
    greet(greeting = 'hi'){
        console.log(`${greeting}, i am ${this.name} the ${this.species}`)
    }
    /*
    greet(greeting = 'hi'){
        console.log(`${greeting}, i am ${this.name} the ${this.species}`)
    }
     */

    feed(){
        this.hunger -= 20
        console.log('yum i love food')
    }
    
    
}

class Cat extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }
    greet(){
        super.greet('mewwwww')
    }
    feed(){
        this.hunger -= 20
        console.log(`yum i love ${this.food}`)
    }
}

class Dog extends Animal {
    constructor(name, color, hunger = 50) {
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }
    greet(){
        super.greet('woofer')
    }
    feed(){
        this.hunger -= 20
        console.log(`yum i love ${this.food}`)
    }
}

// create new class called animalShelter which will be an array to store the list of animal objects
class AnimalShelter {
    // this will create an empty array
    constructor() {
        this.animals = []
    }
    // create a function/method to store the animal objects in the array
    addAnimal(animal) {
        this.animals.push(animal)
    }
    // create a method to remove animals from the array once they have been adopted
    adopt(animal) {
        // create a variable to store the index of the animal being adopted
        let animalIndex = this.animals.indexOf(animal)
        // use the splice method to remove it from the array
        this.animals.splice(animalIndex, 1)
    }
    getAnimalsBySpecies(species) {
        return this.animals.filter(a => a.species === species)
    }
}
// create a new instance of shelter to add the json data
const shelter = new AnimalShelter()
// loop through the json file and create new animal objects to store in the animalshelter class
for (let a of animal_data) {
    let animal;
    let hunger = a.hunger ? a.hunger : 50
    if(a.species === 'dog'){ 
        animal = new Dog(a.name, a.color, hunger)
    } else if (a.species === 'cat') {
        animal = new Cat(a.name, a.color, hunger)
    } else {
        animal = new Animal(a.name, a.species, a.color, hunger)
    }
    shelter.addAnimal(animal)
}

for (const animal of shelter.animals) {
    animal.greet();
    animal.feed();
  }