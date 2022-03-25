var currentPhase = window.location.pathname

function verifyAnswer(correctAnswer) {
    var attemps = 3

    while (true) {
        var answer = prompt("Digite a sua resposta:").toLowerCase()

        if (answer === 'a'|| answer === 'b' || answer === 'c' || answer === 'd') {
            if (answer === correctAnswer) {
                alert("Reposta correta")
                goToNextStage()
                break
            } else {
                alert(`Resposta errada! Você tem mais ${attemps} tentativas`)
                attemps--
            }
            
        } else {
            alert("Você precisa responder com uma das 4 opções: A, B, C ou D")
        }

        if (attemps === 0) {
            location.href = '../gameover.html'
            break
        }
    }

    
}

function goToNextStage() {
    if (currentPhase.indexOf("stage1") != -1) {
        location.href = currentPhase.toString().replace("1", "2")
    } else if (currentPhase.indexOf("stage2") != -1) {
        location.href = currentPhase.toString().replace("2", "3")
    } else if (currentPhase.indexOf("stage3") != -1) {
        location.href = '../gamefinished.html'
    } else {
        console.log("algo de certo nao esta errado")
    }
}