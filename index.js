const $startGameButton = document.querySelector(".start-quiz")
const $questionsContainer = document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questionText = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click",startGame)
$nextQuestionButton.addEventListener("click",displayNextQuestion)


let currentQuestionIndex = 0
let totalCorrect = 0


function startGame() {
    $startGameButton.classList.add("hide")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions.length === currentQuestionIndex) {
        return finishGame()
    }

 $questionText.textContent = questions[currentQuestionIndex].question
 questions[currentQuestionIndex].answers.forEach(answer => {
    const newAnswer = document.createElement("button")
    newAnswer.classList.add("button", "answer")
    newAnswer.textContent = answer.text
    if (answer.correct) {
      newAnswer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAnswer)
  
    newAnswer.addEventListener("click", SelectionAnswer)
  })
  

} 

 function resetState() {
    while($answersContainer.firstChild){
        $answersContainer.removeChild($answersContainer.firstChild)
       }
    
    
    document.body.removeAttribute("class")
    $nextQuestionButton.classList.add("hide")
 }


function SelectionAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add ("correct")
        totalCorrect++
    } else {
        document.body.classList.add("incorrect")
    } 
    
    document.querySelectorAll(".answer").forEach(button => {
        button.disabled = true

        if (button.dataset.correct) {
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}
 

function finishGame() {
    const totalQuestion = questions.length;
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ""

    switch (true) {
        case (performance >= 90):
            message = "Excellent :)"
            break
        case (performance >= 70):
            message = "Very Good :)"
            break
        case (performance >= 50):
            message = "Good"
            break
        default:
            message = "Study more :("
    }

    $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      You Right ${totalCorrect} the ${totalQuestions} question!
      <span>Results: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer test
    </button>
  `

}


    const questions = [
        {
            question: "Who is the all-time leading FIFA World Cup scorer?",
            answers: [
                { text: "Miroslav Klose", correct: true },
                { text: "Ronaldo Nazário", correct: false },
                { text: "Pelé", correct: false },
                { text: "Gerd Müller", correct: false }
            ]
        },
        {
            question: "Which country won the 2018 World Cup?",
            answers: [
                { text: "França", correct: true },
                { text: "Brasil", correct: false },
                { text: "Alemanha", correct: false },
                { text: "Argentina", correct: false }
            ]
        },
        {
            question: "Which player has won the most Ballon d'Or?",
            answers: [
                { text: "Lionel Messi", correct: true },
                { text: "Cristiano Ronaldo", correct: false },
                { text: "Johan Cruyff", correct: false },
                { text: "Michel Platini", correct: false }
            ]
        },
        {
            question: "Which club has won the most UEFA Champions Leagues?",
            answers: [
                { text: "Real Madrid", correct: true },
                { text: "Milan", correct: false },
                { text: "Liverpool", correct: false },
                { text: "Barcelona", correct: false }
            ]
        },
        {
            question: "Which player was the youngest to participate in a World Cup?",
            answers: [
                { text: "Pelé", correct: false },
                { text: "Norman Whiteside", correct: true },
                { text: "Samuel Eto'o", correct: false },
                { text: "Michael Owen", correct: false }
            ]
        },
        {
            question: "Which team won the first World Cup?",
            answers: [
                { text: "Uruguai", correct: true },
                { text: "Brasil", correct: false },
                { text: "Itália", correct: false },
                { text: "Argentina", correct: false }
            ]
        },
        {
            question: "Which player is known as 'El Pibe de Oro'?",
            answers: [
                { text: "Diego Maradona", correct: true },
                { text: "Lionel Messi", correct: false },
                { text: "Ronaldinho", correct: false },
                { text: "Gabriel Batistuta", correct: false }
            ]
        },
        {
            question: "Which player holds the record for most goals in a single edition of a World Cup?",
            answers: [
                { text: "Just Fontaine", correct: true },
                { text: "Ronaldo Nazário", correct: false },
                { text: "Harry Kane", correct: false },
                { text: "Miroslav Klose", correct: false }
            ]
        },
        {
            question: "Which club is known as 'The Invincibles' in the English Premier League?",
            answers: [
                { text: "Chelsea", correct: false },
                { text: "Manchester United", correct: false },
                { text: "Arsenal", correct: true },
                { text: "Liverpool", correct: false }
            ]
        },
        {
            question: "Who was the captain of the Spanish team that won the 2010 World Cup?",
            answers: [
                { text: "Xavi Hernandez", correct: false },
                { text: "Iker Casillas", correct: true },
                { text: "Sergio Ramos", correct: false },
                { text: "Andres Iniesta", correct: false }
            ]
        },
        
    ]      
