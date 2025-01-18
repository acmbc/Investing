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
var Payout = 0
var Pwin = 0.5

resetButton.onclick = function(){
    risk = 100
    multiplier = 1
    riskSlider.value = 100
    riskLabel.innerHTML = ("Risk Multiplier: " + risk/100 + "x = " + multiplier + "x Profit")
    console.log("RESET RISK TO 1X")
}


allButton.onclick = function(){
    if (money > 0) {
        Pwin = riskSlider.value/100
        Payout = 1/Pwin
        var random = Math.random()
        if (random <= Pwin) {
            money = (money*Payout)
            console.log(1-Pwin)
            
        } else {
            money=0
            console.log(random)
        }
      }
    console.log(money)
    document.getElementById('balanceNum').innerHTML = ('$' + money)
}

oneButton.onclick = function(){
    /*
    let answer = prompt('Number?')
    answer = Number(answer);
    money = answer
    console.log(answer)
    document.getElementById('balanceNum').innerHTML = ('$' + answer)
    */
   money = 100
   document.getElementById('balanceNum').innerHTML = ('$' + money)
}

setButton.onclick = function(){
    Pwin = riskSlider.value/100
    Payout = 1/Pwin
    let bet = prompt('Number To Invest?')
    bet = Number(bet);
    console.log(bet)
    if (money >= bet) {
        let random = Math.random()
        if (random <= Pwin) {
            money = money+(bet*Payout)
            console.log("win")
            document.getElementById('balanceNum').innerHTML = ('$' + money)
            console.log(1-random)
        } else {
            money=money-bet
            console.log("lose")
            document.getElementById('balanceNum').innerHTML = ('$' + money)
            console.log(1-random)
        }
    } else {
    alert("you are too poor")
    }
}

riskSlider.oninput = function(){
    Pwin = riskSlider.value/100
    Payout = 1/Pwin
    let Profit = Payout-1
    riskLabel.innerHTML = ("Probability To Win: " + Math.round(Pwin*100) + "% = " + Math.round(Profit*100)/100 + "x Profit")
    console.log(Pwin)
    console.log(Payout)
}
