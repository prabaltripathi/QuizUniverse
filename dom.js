const question = document.getElementById("ques");
const option1 = document.getElementById("op1");
const option2 = document.getElementById("op2");
const option3 = document.getElementById("op3");
const option4 = document.getElementById("op4");
const questionNumber = document.getElementById("qno");
const nextButton = document.getElementById("btn3");
const previousButton = document.getElementById("btn4");
const questionButton = document.getElementsByClassName("questions");
let marked = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
let j = 0;
let answered=0;
let unAnswered
let correct 
let score 
let markedForReview=0;


document.getElementById("radio1").checked = false
document.getElementById("radio2").checked = false
document.getElementById("radio3").checked = false
document.getElementById("radio4").checked = false




class Question {
    constructor(question, option1, option2, option3, option4, correct) {
        this.question = question;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.correct = correct;
    }
}
const optionArray = [document.getElementById("op1"), document.getElementById("op2"), document.getElementById("op3"), document.getElementById("op4")]
const questionArray = [document.getElementById("q1"), document.getElementById("q2"), document.getElementById("q3"), document.getElementById("q4"), document.getElementById("q5"), document.getElementById("q6"), document.getElementById("q7"), document.getElementById("q8"), document.getElementById("q9"), document.getElementById("q10"), document.getElementById("q11"), document.getElementById("q12")]
const array = [
    new Question("In the movie BILLU, what is the name of the village where billu lives?", 'joonagarh', 'budhbuda', 'shyampur', 'narola', 2),
    new Question("what is the name of rtesh deshmukh's character in DHAMAAL?", 'John', 'Lucky', 'Roy', 'Ram', 3),
    new Question('Who plays the female lead in the movie FASHION?', 'Kriti Sanon', 'Deepika Padukone', 'Kareena Kapoor', 'Priyanka Chopra', 4),
    new Question('In the movie BILLU, what is the name of the village where billu lives?', 'joonagarh', 'budhbuda', 'shyampur', 'narola', 2),
    new Question("what is the name of rtesh deshmukh's character in DHAMAAL?", 'John', 'Lucky', 'Roy', 'Ram', 3),
    new Question('Who plays the female lead in the movie FASHION?', 'Kriti Sanon', 'Deepika Padukone', 'Kareena Kapoor', 'Priyanka Chopra', 1),
    new Question('In the movie BILLU, what is the name of the village where billu lives?', 'joonagarh', 'budhbuda', 'shyampur', 'narola', 'budhbuda', 4),
    new Question("what is the name of rtesh deshmukh's character in DHAMAAL?", 'John', 'Lucky', 'Roy', 'Ram', 3),
    new Question('Who plays the female lead in the movie FASHION?', 'Kriti Sanon', 'Deepika Padukone', 'Kareena Kapoor', 'Priyanka Chopra', 1),
    new Question('In the movie BILLU, what is the name of the village where billu lives?', 'joonagarh', 'budhbuda', 'shyampur', 'narola', 2),
    new Question("what is the name of rtesh deshmukh's character in DHAMAAL?", 'John', 'Lucky', 'Roy', 'Ram', 3),
    new Question('Who plays the female lead in the movie FASHION?', 'Kriti Sanon', 'Deepika Padukone', 'Kareena Kapoor', 'Priyanka Chopra', 4),
]
const totalQuestion = 12;
let currentQuestion = 0;

function previous() {
    if(marked[currentQuestion]==-1)
    {
        checker();
        if(marked[currentQuestion]!=-1){
        answered++;    
        }
        unAnswered=totalQuestion-answered;
    
    }
    checker()
document.getElementById("answered").innerHTML=answered;
document.getElementById("unAnswered").innerHTML=unAnswered;
document.getElementById("markedForReview").innerHTML=markedForReview;
    if (marked[currentQuestion] != -1) {
        document.getElementById("radio" + marked[currentQuestion]).checked = false
    }

    if (currentQuestion > 0)
        currentQuestion--;

    if (currentQuestion === 0) {
        previousButton.style.backgroundColor = '#55bcc9';
    }
    else {
        previousButton.style.backgroundColor = '#fc4445';
    }
    console.log(marked)


    loadQuestion();
    nextButton.style.backgroundColor = '#fc4445';
    colourChanger();
    console.log(currentQuestion)
}
function next() {
    if(marked[currentQuestion]==-1)
    {
        checker();
        if(marked[currentQuestion]!=-1){
        answered++; 
        }
        unAnswered=totalQuestion-answered;
    
    }
    checker();   
document.getElementById("answered").innerHTML=answered;
document.getElementById("unAnswered").innerHTML=unAnswered;
document.getElementById("markedForReview").innerHTML=markedForReview;
    if (marked[currentQuestion] != -1) {
        document.getElementById("radio" + marked[currentQuestion]).checked = false
    }
    if (currentQuestion < totalQuestion - 1)
        currentQuestion++;
    if (currentQuestion !== totalQuestion - 1) {
        nextButton.style.backgroundColor = '#fc4445';
    }
    else {
        nextButton.style.backgroundColor = '#55bcc9';
    }
    loadQuestion();
    colourChanger();
    previousButton.style.backgroundColor = '#fc4445';

}

function loadQuestion() {
    question.textContent = array[currentQuestion].question;
    option1.textContent = array[currentQuestion].option1;
    option2.textContent = array[currentQuestion].option2;
    option3.textContent = array[currentQuestion].option3;
    option4.textContent = array[currentQuestion].option4;
    questionNumber.textContent = "Question" + " " + (currentQuestion + 1);
    if (marked[currentQuestion] != -1) {
        document.getElementById("radio" + marked[currentQuestion]).checked = true
    }
}
function colourChanger() {
    document.getElementById("q" + (currentQuestion + 1)).style.backgroundColor = '#97caef';
    for (let i = 1; i <= 12; i++) {

        if (i != (currentQuestion + 1)) {
            document.getElementById("q" + i).style.backgroundColor = '#55bcc9';
        }


    }
}
function checker() {
    let temp = true;
    for (j = 0; j < optionArray.length; j++) {
        if (document.getElementById("radio" + (j + 1)).checked == true) {
            marked[currentQuestion] = j + 1;
            document.getElementById("q"+(currentQuestion+1)).style.backgroundColor="green";
            temp = false;

        }
    }
    if (temp) {
        marked[j] = -1;
        document.getElementById("q"+(currentQuestion+1)).style.backgroundColor="#55bcc9";
    }
}
function checker2(k) {
    if(marked[currentQuestion]==-1)
    {
        checker();
        if(marked[currentQuestion]!=-1){
        answered++;    
    }
        unAnswered=totalQuestion-answered;
    
    }
    checker()  
document.getElementById("answered").innerHTML=answered;
document.getElementById("unAnswered").innerHTML=unAnswered;
document.getElementById("markedForReview").innerHTML=markedForReview;
    if (marked[currentQuestion] != -1) {
        document.getElementById("radio" + marked[currentQuestion]).checked = false
    }
            currentQuestion=k-1;
            loadQuestion();
        }
function answerChecker() {
    for (let l = 0; l < 12; l++) {
        if (marked[l] === array[l].correct) {
            answered++;
            correct++;
        }
        else if (marked[l] === -1) {
            continue
        }
        else {

            answered++;
            wrong++;
        }
    }
    let score = correct*4  - wrong;
}
function flag()
{
markedForReview++;
document.getElementById("q+(currentQuestion+1)").style.backgroundColor="violet";    
}
function passValues()
{
    localStorage.setItem("ans",answered);
    localStorage.setItem("cor",correct);
    localStorage.setItem("wro",wrong);
    localStorage.setItem("sco",score);

}

