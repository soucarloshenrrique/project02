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
    
