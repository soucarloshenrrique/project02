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
 questions[currentQuestionIndex].answers.forEach(answers=> {
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
        if (button.dataset.correct){
            button.classList.add("correct")
        } else {
            button.classList.add("incorrect")
        }

        button.disabled = true
        
    })

    $nextQuestionButton.classList.remove("hide")
    currentQuestionIndex++
}
 


    const questions = [
        {
            question: "Quem é o maior artilheiro de todos os tempos da Copa do Mundo da FIFA?",
            answers: [
                { text: "Miroslav Klose", correct: true },
                { text: "Ronaldo Nazário", correct: false },
                { text: "Pelé", correct: false },
                { text: "Gerd Müller", correct: false }
            ]
        },
        {
            question: "Qual país ganhou a Copa do Mundo de 2018?",
            answers: [
                { text: "França", correct: true },
                { text: "Brasil", correct: false },
                { text: "Alemanha", correct: false },
                { text: "Argentina", correct: false }
            ]
        },
        {
            question: "Qual jogador ganhou mais Bolas de Ouro?",
            answers: [
                { text: "Lionel Messi", correct: true },
                { text: "Cristiano Ronaldo", correct: false },
                { text: "Johan Cruyff", correct: false },
                { text: "Michel Platini", correct: false }
            ]
        },
        {
            question: "Qual clube venceu mais Liga dos Campeões da UEFA?",
            answers: [
                { text: "Real Madrid", correct: true },
                { text: "Milan", correct: false },
                { text: "Liverpool", correct: false },
                { text: "Barcelona", correct: false }
            ]
        },
        {
            question: "Qual jogador foi o mais jovem a participar de uma Copa do Mundo?",
            answers: [
                { text: "Pelé", correct: false },
                { text: "Norman Whiteside", correct: true },
                { text: "Samuel Eto'o", correct: false },
                { text: "Michael Owen", correct: false }
            ]
        },
        {
            question: "Qual time venceu a primeira Copa do Mundo?",
            answers: [
                { text: "Uruguai", correct: true },
                { text: "Brasil", correct: false },
                { text: "Itália", correct: false },
                { text: "Argentina", correct: false }
            ]
        },
        {
            question: "Que jogador é conhecido como 'El Pibe de Oro'?",
            answers: [
                { text: "Diego Maradona", correct: true },
                { text: "Lionel Messi", correct: false },
                { text: "Ronaldinho", correct: false },
                { text: "Gabriel Batistuta", correct: false }
            ]
        },
        {
            question: "Qual jogador detém o recorde de mais gols em uma única edição de uma Copa do Mundo?",
            answers: [
                { text: "Just Fontaine", correct: true },
                { text: "Ronaldo Nazário", correct: false },
                { text: "Harry Kane", correct: false },
                { text: "Miroslav Klose", correct: false }
            ]
        },
        {
            question: "Qual clube é conhecido como 'Os Invencíveis' na Premier League inglesa?",
            answers: [
                { text: "Chelsea", correct: false },
                { text: "Manchester United", correct: false },
                { text: "Arsenal", correct: true },
                { text: "Liverpool", correct: false }
            ]
        },
        {
            question: "Quem foi o capitão da seleção espanhola que venceu a Copa do Mundo de 2010?",
            answers: [
                { text: "Xavi Hernandez", correct: false },
                { text: "Iker Casillas", correct: true },
                { text: "Sergio Ramos", correct: false },
                { text: "Andres Iniesta", correct: false }
            ]
        }
        
    ];
    
    function finishGame() {
        const totalQuestion = questions.length;
        const performance = Math.floor(totalCorrect * 100 / totalQuestion);
    
        let message = "";
    
        switch (true) {
            case (performance >= 90):
                message = "Excellent :)";
                break;
            case (performance >= 70):
                message = "Very Good :)";
                break;
            case (performance >= 50):
                message = "Good";
                break;
            default:
                message = "Study more :(";
        }
    
        return message; // Adicionei uma declaração de retorno para que você possa usar a mensagem fora da função.
    
    

       $questionsContainer.innerHTML =
       `
          <p  class="final-message">
             You Right ${totalCorrect} The ${totalQuestion} question!
             <span> Results: ${message}</span>
          </span>
          <button onclick=window.location.reload() class="button">
             Retake test 
          </button>
       `
    
    }        
