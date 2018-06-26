const quizContainer = document.getElementById('quizbox');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

let result = [];

const myQuestions = [
  {
    question: "What's your favourite colour?",
    answers: {
      a: "Red",
      b: "Orange",
      c: "Blue",
      d: "Pink",
      e: "Green",
      f: "Purple"
    },
    
    correctAnswer: "c"

function buildQuiz(){
	

}

function showResults(){}

buildQuiz();





submitButton.addEventListener('click', showResults);