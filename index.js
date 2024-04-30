const $startGameButton =document.querySelector(".start-quiz")
const $questionsContainer =document.querySelector(".questions-container")

$startGameButton.addEventListener("click",startGame)


function startGame() {
    $startGameButton.classList.add("hider")
    $questionsContainer.classList.remove("hide")
    displayNextQuestion()
}




const questions = [
    {
      question: "Quem é o maior artilheiro de todos os tempos da Copa do Mundo da FIFA?",
      answers: [
        { text: "<javascript>", correct: false },
        { text: "<js>", correct: false },
        { text: "<script>", correct: false },
        { text: "<scripting>", correct: false }
      ]  
    },
]
