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
     constructor(name,age,gender,sportsNAme){
         super(name,age,gender)
        this.sportsName = sportsName;
    }
    play(){
        alert (`I am playing ${this.sportsName}`);
    }
}
class crickter extends player {
    constructor(name,age,gender,sportsNAme,teamName){
        super(name,age,gender)
        this.teamName = teamName;
    }
    playCricket (){
        alert (`I am playing cricket with ${this.teamName}`);
    }
}
class teacher extends person {
    constructor(name,age,gender,instituteName){
        super(name,age,gender)
        this.instituteName = instituteName;
    }
    teach(){
        alert (`I teach at ${this.instituteName}`);
    }
}
class artist extends person {
  constructor(name,age,gender,kind){
        super(name,age,gender)
        this.kind = kind;
    }
    createArt(){
        alert (`I create ${this.kind} of art`);
    }
}