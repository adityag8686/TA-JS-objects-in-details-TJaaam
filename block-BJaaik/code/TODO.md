## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

![Inheritance](../assets/inheritance.png)

class Person {
    constructor(name,age,gender){
        this.name = name;
        this.age = age;
        this.gender = gender
    }
    eat(){
        alert(`I am eating`);
    }
    sleep(){
        alert(`I am sleeping`);
    }
    walk(){
        alert(`I am walking`);
    }
}
class player extends person {
    constructor(sportsName) {
        this.sportName = sportsName;
    }
    play(){
        alert (`I am playing ${this.sportsName}`);
    }
}
class crickter extends player {
    constructor (teamName){
        this.teamName = teamName;
    }
    playCricket (){
        alert (`I am playing cricket with ${this.teamName}`);
    }
}
class teacher extends person {
    constructor (instituteName){
        this.instituteName = instituteName;
    }
    teach(){
        alert (`I teach at ${this.instituteName}`);
    }
}
class artist extends person {
   constructor (kind){
        this.kind = kind;
    }
    createArt(){
        alert (`I create ${this.kind} of art`);
    }
}