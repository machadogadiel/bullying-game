var currentPhase = window.location.pathname

function verifyAnswer(correctAnswer) {
    var num = 3

    while (true) {
        var answer = prompt("Digite a sua resposta:").toLowerCase()

        if (answer == 'a'|| answer == 'b' || answer == 'c' || answer == 'd') {
            if (answer == correctAnswer) {
                alert("Reposta correta")
                nextPhase()
                break
            } else {
                alert(`Resposta errada! Você tem mais ${num} tentativas`)
                num--
            }
            
        } else {
            alert("Você precisa responder com uma das 4 opções: A, B, C ou D")
        }

        console.log(num);

        if (num == 0) {
            location.href = '../gameover.html'
            break
        }
    }

    
}

function nextPhase() {
    if (currentPhase.indexOf("fase1") != -1) {
        location.href = currentPhase.toString().replace("1", "2")
    } else if (currentPhase.indexOf("fase2") != -1) {
        location.href = currentPhase.toString().replace("2", "3")
    } else if (currentPhase.indexOf("fase3") != -1) {
        location.href = '../gamefinished.html'
    } else {
        console.log("algo de certo nao esta errado")
    }
}