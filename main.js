document.cookie = "Money=100";
let x = document.cookie;
console.log(x)
const allButton = document.getElementById('allButton')
const oneButton = document.getElementById('oneButton')
const setButton = document.getElementById('setButton')
const riskSlider = document.getElementById('riskSlider')
const riskLabel = document.getElementById('riskLabel')
const resetButton = document.getElementById("resetButton")
var money = 100
var risk = riskSlider.value
var multiplier = risk/100

resetButton.onclick = function(){
    risk = 100
    multiplier = 1
    riskSlider.value = 100
    riskLabel.innerHTML = ("Risk Multiplier: " + risk/100 + "x = " + multiplier + "x Profit")
    console.log("RESET RISK TO 1X")
}


allButton.onclick = function(){
    console.log("hooray!")
    allButton.style.color = "red"
    setTimeout(() => allButton.style.color = "black", 100)
    if (money > 0) {
        var random = Math.random()
        if (random > 0.5*multiplier) {
            money = Math.round(money+multiplier*money*2)
            console.log(random)
            
        } else {
            money=0
            console.log(random)
        }
      } 

    
    console.log(money)
    document.getElementById('balanceNum').innerHTML = ('$' + money)
}

oneButton.onclick = function(){
    let answer = prompt('Number?')
    answer = Number(answer);
    money = answer
    console.log(answer)
    document.getElementById('balanceNum').innerHTML = ('$' + answer)
}

setButton.onclick = function(){
    let answer = prompt('Number To Invest?')
    answer = Number(answer);
    console.log(answer)
    if (money >= answer) {
        let random = Math.random()
        if (random > 0.5*multiplier) {
            money = money+(answer*multiplier)
            console.log("win")
            document.getElementById('balanceNum').innerHTML = ('$' + money)
            console.log(random)
        } else {
            money=money-answer
            console.log("lose")
            document.getElementById('balanceNum').innerHTML = ('$' + money)
            console.log(random)
        }
    } else {
    alert("you are too poor")
    }
}

riskSlider.oninput = function(){
    risk = riskSlider.value
    multiplier = risk/100
    riskLabel.innerHTML = ("Risk Multiplier: " + risk/100 + "x = " + multiplier + "x Profit")
    console.log(risk)
}