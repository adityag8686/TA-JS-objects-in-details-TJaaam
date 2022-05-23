let animal = {
    eat: function(){
        console.log (`I live in ${this.location} and I can eat!`);
    },
    changeLocation : function(){
        this.location = newLocation;
        return newLocation;
    },
    summary: function (){
        returns `I live in ${this.location} and I have ${this.numberOfLegs}`
    }
}
function CreateAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethods);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}



function createDog (name,color){
    let dog = CreateAnimal(location, numberOfLegs)
    Object.setPrototypeOf(dog, dogMethods);
    dog.name = name;
    dog.color = color;
    return dog;
}
let dogMethods= {
    bark : function (){
        alert(`I am ${this.name} and I can bark 🐶`)
    },
    changeName: function(newName){
        this.name = newName
        return this.name;
    },
    changeColor : function (newColor){
        this.color = newColor;
        return this.color;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.color} color. I cam also bark`
    }
}
Object.setPrototypeOf(dogMethods, animalMethods);



let catMethods = {
    meow: function(){
        alert(`I am ${this.name} and I can do meow meow`);
    },
    changeName: function(newName){
        this.name = newName;
        return this.name;
    },
    changeColorOfEyes: function(newColor){
        this.colorOfEyes = newColor;
        return this.colorOfEyes;
    },
    summary: function(){
        return `I am ${this.name} and I am of ${this.colorOfEyes} color. I can also do meow meow`
    }

}
Object.setPrototypeOf(catMethods, animalMethods);


function cat(name, colorOfEyes){
    let cat = CreateAnimal(location,numberOfLegs);
    Object.setPrototypeOf(cat, catMethods);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}