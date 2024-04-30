const $startGameButton =document.querySelector(".start-quiz")
const $questionsContainer =document.querySelector(".questions-container")

$startGameButton.addEventListener("click",startGame)


function startGame() {
    $startGameButton.classList.add("hider")
    $questionsContainer.classList.remove("hide")
}
