//Prototypal pattern
let questionMethods = {
    isAnswerCorrect: function (index) {
        return index == this.correctAnswerIndex;
    },
    getCorrectAnswer: function () {
        return this.correctAnswerIndex;
    }
}

function Question(title, options, correctAnswerIndex){
    let quiz = Object.create (questionMethods);
    quiz.title = title;
    quiz.options = options;
    quiz.options = correctAnswerIndex;
    return quiz;
}
//Pseudoclassical pattern
function Question(title, options, correctAnswerIndex){
    this.title = title;
    this.options = options;
    this.options = correctAnswerIndex;
}
Question.prototype = {
    isAnswerCorrect (index) {
        return index == this.correctAnswerIndex;
    },
    getCorrectAnswer (){
        return this.correctAnswerIndex;
    }
}
//class 

class Question{
    constructor(title, options, correctAnswerIndex){
        this.title = title;
        this.options = options;
        this.options = correctAnswerIndex;
    }
    isAnswerCorrect (index) {
        return index == this.correctAnswerIndex;
    }
    getCorrectAnswer (){
        return this.correctAnswerIndex;
    }
}

let firstQuestion = new Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
);
let secondQuestion = new Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
);