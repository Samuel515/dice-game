document.querySelector("button").addEventListener("click", function clickOrKeyDown() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src", "images/dice" + randomNumber1 + ".png");

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("body > div > h1").textContent = (player1 + " wins!");
    } else if (randomNumber1 < randomNumber2) {
        document.querySelector("body > div > h1").textContent = (player2 + " wins!");
    } else {
        document.querySelector("body > div > h1").textContent = ("Draw!");
    }

    document.querySelector("button").classList.add("clicked");
    setTimeout(function () {
        document.querySelector("button").classList.remove("clicked");
    }, 100)

});

var player1 = prompt("Enter Player 1 Name");
var player2 = prompt("Enter Player 2 Name");

// Input validation
while (!player1 || !player2) {
    alert("Please enter names for both players.");
    player1 = prompt("Enter Player 1 Name");
    player2 = prompt("Enter Player 2 Name");
}

document.querySelector("body > div > div:nth-child(2) > p").textContent = (player1);
document.querySelector("body > div > div:nth-child(3) > p").textContent = (player2);
