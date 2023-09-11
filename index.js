var randomnumber1 = Math.ceil(Math.random() * 6);
var randomnumber2 = Math.ceil(Math.random() * 6);
console.log(randomnumber1);
document.querySelectorAll("div>div>img")[0].setAttribute("src", "./images/dice" + randomnumber1 + ".png");
document.querySelectorAll("div>div>img")[1].setAttribute("src", "./images/dice" + randomnumber2 + ".png");
if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML = "player1 winns";
}
else if (randomnumber2 > randomnumber1) {
    document.querySelector("h1").innerHTML = "player2 winns";
}
else {
    document.querySelector("h1").innerHTML = "!Draw";
}
