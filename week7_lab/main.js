function Panda(name, age){
    this.name = name,
    this.age = age,
    this.type = "Panda",
    this.image = "images/panda.png";
}

function Lion(name, age){
    this.name = name,
    this.age = age,
    this.type = "Lion",
    this.image = "images/lion.png";
}

function Fish(name, age){
    this.name = name,
    this.age = age,
    this.type = "Fish",
    this.image = "images/fish.png";
}

var animals = [new Panda(), new Lion(), new Fish()];
var names = ["Bob", "John", "Alice"];

function generateRandomIndex(maxIndex){
    var randNum = Math.floor(Math.random() * maxIndex);
    return randNum;
}

function generateRandomName(){
    var nameIndex = generateRandomIndex(animals.length);
    return names[nameIndex];
}

function generateRandomAge(){
    var randAge = generateRandomIndex(6);
    return randAge;
}

function generateRandomAnimal(){
    var animalIndex = generateRandomIndex(animals.length);
    var randAnimal = animals[animalIndex];
    if (randAnimal instanceof Panda){
        return new Panda(generateRandomName(), generateRandomAge());
    }
    else if (randAnimal instanceof Lion){
        return new Lion(generateRandomName(), generateRandomAge());
    }
    else if (randAnimal instanceof Fish){
        return new Fish(generateRandomName(), generateRandomAge());
    }
}

function onLoad(){
    var animal = generateRandomAnimal();
    document.getElementById("animal-properties").textContent = animal.name + ": " + animal.age + " years old";
    document.getElementById("animal-img").setAttribute("src", animal.image);
}
