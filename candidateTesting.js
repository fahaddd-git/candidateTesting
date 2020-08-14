// Refer to the online book to access detailed instructions for this project.

// URL = https://education.launchcode.org/intro-to-professional-web-dev/assignments/candidateQuiz.html

// Welcome to your first assignment.
// Login and then fork this repl.it
// Add your code here. You can do do it!

const input = require('readline-sync');


let questions = ["True or false: 5000 meters = 5 kilometers. ","(5 + 3)/2 * 10 = ?", 'Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2?', "Who was the first American woman in space?", "What is the minimum crew size for the International Space Station (ISS)?"];
let realAnswer = ["True", "40", "Trajectory", "Sally Ride", "3"];
let studentAnswersCorrect = 0;

let studentName = input.question("Candidate Name: ");
for (let i=0;i<questions.length;i++){
  let studentAnswer = input.question(`${i+1}) ${questions[i]}\nYour answer: `);
  console.log(`Correct answer: ${realAnswer[i]}\n`)
  if (studentAnswer.toLowerCase() === realAnswer[i].toLowerCase()){
    studentAnswersCorrect += 1;
  } else {}
}

let percentage = Math.round((studentAnswersCorrect/(questions.length)) * 100);
console.log(`>>> Overall Grade: ${percentage}% (${studentAnswersCorrect} out of ${questions.length} responses correct <<<<`);

if (percentage < 70){
  console.log(">>>> Status: FAILED <<<<");
} else {
  console.log(">>>> Status: SUCCESS <<<<");
}
