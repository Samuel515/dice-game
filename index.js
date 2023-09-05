var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src" , "images/dice"+ randomNumber1 +".png");

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src" , "images/dice"+ randomNumber2 +".png");

if(randomNumber1 > randomNumber2){
    document.querySelector("body > div > h1").textContent = ("Player 1 wins!");
}else if(randomNumber1 < randomNumber2){
    document.querySelector("body > div > h1").textContent = ("Player 2 wins!");
}else{
    document.querySelector("body > div > h1").textContent = ("Draw!");
}