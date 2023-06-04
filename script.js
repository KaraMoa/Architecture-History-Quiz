const form = document.querySelector('.quiz-form');
const correctAnswers = ["D", "A", "A", "A", "B", "C"];
const question = document.querySelectorAll(".question")
const result = document.querySelector('.result');
let score = 0
const scoresPrint = document.querySelector('.scores');

/*const reset = document.getElementById('reset');

reset.addEventListener('click', () => {
    location.reload();
})*/

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const userInput = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value,];
     result.classList.remove ('hidden')
    userInput.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 1
            question[index].classList.add('correct')
           
            
             
        }
        else { question[index].classList.add('wrong')}
       
        
        
    })
    scoresPrint.innerText = `Your scored ${score}/5`;
    scrollTo(0, 0);
})