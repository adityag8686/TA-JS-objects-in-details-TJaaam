// Function Pattern

function createUserData ( name, id, noOfProjects ){
    let userData = {};
    userData.name = name;
    userData.id = id;
    userData.noOfProjects = noOfProjects;

    userData.getProjects = function(){
        return userData.noOfProjects;
    };
    userData.changeName = function(newName){
        return userData.name;
    };
    userData.incrementProject = function(){
        return userData.noOfProjects++;
    };
    userData.decrementProject = function(){
        return userData.noOfProjects--;
    };
}

//prototypal pattern
let userDataMethods = {
    getProjects : function(){
        return userData.noOfProjects;
    },
    changeName : function(newName){
        return userData.name;
    },
    incrementProject : function(){
        return userData.noOfProjects++;
    },
    decrementProject : function(){
        return userData.noOfProjects--;
    },
};  

function createUserData( name, id, noOfProjects ){
    let userData = Object.create(userDataMethods);
    userData.name = name;
    userData.id = id;
    userData.noOfProjects = noOfProjects;
    return userData;
}

//Pseudoclassical Way

function createUserData( name, id, noOfProjects ){
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
}
createUserData.prototype = {
    getProjects : function(){
        return userData.noOfProjects;
    },
    changeName : function(newName){
        return userData.name;
    },
    incrementProject : function(){
        return userData.noOfProjects++;
    },
    decrementProject : function(){
        return userData.noOfProjects--;
    },
}

//class
class createUserData {
    constructor( name, id, noOfProjects ){
        this.name = name;
        this.id = id;
        this.noOfProjects = noOfProjects;
    }
    getProjects (){
        return userData.noOfProjects;
    }
    changeName (newName){
        return userData.name;
    }
    incrementProject (){
        return userData.noOfProjects++;
    }
    decrementProject(){
        return userData.noOfProjects--;
    }
}