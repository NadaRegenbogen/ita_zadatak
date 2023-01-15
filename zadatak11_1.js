const buttonSend = document.getElementById("dugme")

function racun(){
const izborKanala= document.getElementsByName("izbor")
const answerFirst= document.getElementsByName("answer")
const answerSecond = document.getElementsByName("odgovor")

let dugme=0;

    for(let izborK of izborKanala) {
        if(izborK.selected) {
            dugme += Number(izborK.value)
        }
    }
    for(let answerF of answerFirst) {
        if(answerF.checked) {
            dugme += Number(answerF.value)
        }
    }
    for(let answerS of answerSecond) {
        if(answerS.checked) {
            dugme += Number(answerS.value)
        }
    }
    const spanResult = document.getElementById("ispis")
    spanResult.innerText = dugme
}
buttonSend.onclick = racun