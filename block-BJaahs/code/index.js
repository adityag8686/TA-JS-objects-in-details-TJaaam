let title = "Where is the capital of Jordan";
let options = ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;
function isAnswerCorrect(index){
    return correctAnswerIndex == index;
}
function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

let questions = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index){
        return correctAnswerIndex == questions.correctAnswerIndex;
    },
    getCorrectAnswer(){
        return questions.options[questions.correctAnswerIndex];
    }
};
function createQuestion(title,options,correctAnswerIndex){
    let question = {};
    question.title =title;
    question.options = options;
    question.correctAnswerIndex =correctAnswerIndex;
    question.isAnswerCorrect= function(index){
        return correctAnswerIndex == this.correctAnswerIndex;
    }
    question.getCorrectAnswer = function (){
        return this.options[this.correctAnswerIndex];
    }

}
let testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };