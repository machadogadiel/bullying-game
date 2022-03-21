




function verifyAnswer(correctAnswer) {
    var answer = prompt("Digite a sua resposta:")

    if (answer.toLowerCase() == 'a'|| answer.toLowerCase() == 'b' || answer.toLowerCase() == 'c' || answer.toLowerCase() == 'd') {
        if (answer.toLowerCase() !== correctAnswer) {
            alert("Resposta errada! tente novamente")
        } else {
            alert("Reposta correta")
        }
        
    } else {
        alert("Você precisa responder com uma das 4 opções: A, B, C ou D")
    }
}