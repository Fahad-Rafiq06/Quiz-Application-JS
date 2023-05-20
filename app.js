var questions = [
    {
        question : "According to population, which is the largest city of Pakistan?",
        answer : "Karachi",
        options : [
            "Islamabad",
            "Lahore",
            "Karachi",
        ] 
    },
    {
        question : "What is the name of the highest peak of Pakistan?",
        answer : "K-2 mountain",
        options : [
            "K-2 mountain",
            "Mount-Everest",
            "Himalaya",
        ] 
    },
    {
        question : "In which year did Pakistan win the Cricket World Cup?",
        answer : "1992",
        options : [
            "1987",
            "1992",
            "1991",
        ] 
    }
]

var question = document.getElementById("question");
var optionElement = document.getElementsByClassName("option-element");

function showquestions(){

    // target id from html
    
    
    // adding object value in the targetted html element
    question.innerHTML = questions[0].question;

    // using loop to show multiple options in the document from the object
    for (var i = 0; i < optionElement.length; i++){
    
    optionElement[i].innerHTML = questions[0].options[i];
    // console.log(questions[0].options[2])
    }
}

var questioncount = 0;

function nextq (){
    questioncount++;
    question.innerHTML = questions[questioncount].question;
    for (var i = 0; i < optionElement.length; i++){
    
        optionElement[i].innerHTML = questions[questioncount].options[i];
        // console.log(questions[0].options[2])
        }

    console.log(questioncount)
}
