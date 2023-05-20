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

function showquestions(){
    var question = document.getElementById("question");
    question.innerHTML = questions[0].question;
    var optionElement = document.getElementsByClassName("option-element");
    for (var i = 0; i < optionElement.length; i++){
    
    optionElement[i].innerHTML = questions[0].options[i];
    // console.log(questions[0].options[2])
    }
}