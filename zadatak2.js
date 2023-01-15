const inputText = document.getElementById("cena")
const inputPercent = document.getElementById("porez")
const ukupno = document.getElementById("dugme")
const spanRangeValue = document.getElementById("rangeValue")
const spanResult = document.getElementById("ispis")

function changeValue(event) {
    const result = Number(inputText.value) + Number (inputPercent.value) / 100 * Number (inputText.value)
    spanResult.innerText = result
    spanRangeValue.innerText = event.target.value
}
inputPercent.onmousemove = changeValue


function ukupnaCena(){
    if(inputText.value == "") {
        spanResult.innerHTML = "<i style='color: red'>Upisite cenu</i>"
    } else {
        const result = Number(inputText.value) + Number (inputPercent.value) / 100 * Number (inputText.value)
    spanResult.innerHTML = result
    }
    
   
    }
    ukupno.onclick = ukupnaCena
    
 
