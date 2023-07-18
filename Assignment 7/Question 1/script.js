const questions = [
    {
        question:"Which is largest animal in the world",
        answers:[
            {Text: "Shark", correct: false},
            {Text: "Elephant", correct: false},
            {Text: "Blue Whale", correct: true},
            {Text: "Mouse", correct: false},
        ]
    },
    {
        question:"What is capital of INDIA",
        answers:[
            {Text: "Mumbai", correct: false},
            {Text: "Jaipur", correct: false},
            {Text: "Bangolere", correct: false},
            {Text: "Dlehi", correct: true},
        ]
    },
    {
        question:"Which is smallest continent in world",
        answers:[
            {Text: "Asia", correct: false},
            {Text: "Austalia", correct: true},
            {Text: "Arctric", correct: false},
            {Text: "Mouse", correct: false},
        ]
    },
    {
        question:"Name of Indian currency",
        answers:[
            {Text: "Dolor", correct: false},
            {Text: "Yen", correct: false},
            {Text: "Yuro", correct: false},
            {Text: "Rupee", correct: true},
        ]
    },
    {
        question:"Which is the largest in desert in the world",
        answers:[
            {Text: "Kalahari", correct: false},
            {Text: "Sahara", correct: false},
            {Text: "thar", correct: false},
            {Text: "Antartica", correct: true},
        ]
    }
];

const ques = document.getElementById("que");
const buttons = document.getElementsByClassName("btns");
const next = document.getElementsByClassName("nbtn");

let currentque = 0;
let score = 0;

function startQuiz (){
    currentque = 0;
    score = 0;
    next.innerHTML =  "Next";
    showQue();
}

function showQue(){
    let ques = questions[currentque];
    let queNo = currentque + 1;
    ques.innerHTML = queNo + "." + currentque.question;

    currentque.answers.forEach(answer => {
        
        const bt = document.childElement("button");
        bt.innerHTML = answers.text
        bt.classList.add ("btn");
        buttons.appendChild (bt) ;
    });

}
startQuiz ();