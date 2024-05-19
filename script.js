const quiz = [
    {
        question: "What is the brain of the computer commonly known as?",
        ans1text: "Motherboard",
        ans2text: "Central Processing Unit (CPU)",
        ans3text: "Hard Disk",
        ans4text: "RAM",
        answer: "Central Processing Unit (CPU)"
    },
    {
        question: "Which device is used to display information in a visual form?",
        ans1text: "Printer",
        ans2text: "Monitor",
        ans3text: "Keyboard",
        ans4text: "Mouse",
        answer: "Monitor"
    },
    {
        question: "What does RAM stand for?",
        ans1text: "Read Access Memory",
        ans2text: "Random Access Memory",
        ans3text: "Run Access Memory",
        ans4text: "Real Access Memory",
        answer: "Random Access Memory"
    },
    {
        question: "Which of the following is a permanent storage device?",
        ans1text: "RAM",
        ans2text: "ROM",
        ans3text: "Hard Disk",
        ans4text: "Cache",
        answer: "Hard Disk"
    },
    {
        question: "What is the main function of an operating system?",
        ans1text: "To manage computer resources and provide a user interface",
        ans2text: "To perform arithmetic operations",
        ans3text: "To compile programs",
        ans4text: "To enable internet connectivity",
        answer: "To manage computer resources and provide a user interface"
    },
    {
        question: "Which programming language is primarily used for web development?",
        ans1text: "C++",
        ans2text: "Python",
        ans3text: "JavaScript",
        ans4text: "Java",
        answer: "JavaScript"
    },
    {
        question: "What does HTML stand for?",
        ans1text: "HyperText Markup Language",
        ans2text: "HighText Markup Language",
        ans3text: "HyperTool Markup Language",
        ans4text: "Hyperlink Text Markup Language",
        answer: "HyperText Markup Language"
    },
    {
        question: "Which device is used for inputting data into a computer?",
        ans1text: "Monitor",
        ans2text: "Printer",
        ans3text: "Mouse",
        ans4text: "RAM",
        answer: "Mouse"
    },
    {
        question: "What type of software is an antivirus program?",
        ans1text: "System software",
        ans2text: "Application software",
        ans3text: "Utility software",
        ans4text: "Development software",
        answer: "Utility software"
    },
    {
        question: "What does URL stand for?",
        ans1text: "Uniform Resource Locator",
        ans2text: "Universal Resource Locator",
        ans3text: "Uniform Resource Link",
        ans4text: "Universal Resource Link",
        answer: "Uniform Resource Locator"
    }
    
]

const question = document.getElementById("quiz-question");
console.log(question)
console.log(question.textContent)

const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");
const answerEle = document.querySelectorAll(".answer");

console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);


const submit = document.getElementById("submit");

let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);


question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;


console.log("answer elements", answerEle);





submit.addEventListener("click", ()=>{
    const checkedAns = document.querySelector('input[type="radio"]:checked');
    console.log(checkedAns);
    console.log(checkedAns.nextElementSibling.textContent);

    if(checkedAns === null){
        alert("Please select an answer");
    }else{
        if(checkedAns.nextElementSibling.textContent == quiz[currentQuestion].answer){
            score++;
        }
        currentQuestion++;

        if(currentQuestion < quiz.length){
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        }else{
            alert("Your score is " + score + " out of " + quiz.length);
            location.reload();
        }
    }
})
