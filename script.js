var btn = document.getElementById("btn");
var object = document.getElementById("object");
btn.onclick = function() {
    document.body.classList.toggle("light-theme");

    if(document.body.classList.contains("light-theme")) {
        object.classList.remove("fa-sun");
        object.classList.add("fa-moon"); 
    }
    else {
        object.classList.remove("fa-moon");
        object.classList.add("fa-sun"); 
    }
}

var randomNumber1 = Math.ceil(Math.random() * 6); // Random Number b/w 1 & 6
var randomImageSource1 = "images/" + randomNumber1 + ".png"; // images/1.png - images/6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource1);

var randomNumber2 = Math.ceil(Math.random()* 6); // Random Number b/w 1 & 6
var randomImageSource2 = "images/" + randomNumber2 + ".png"; // images/1.png - images/6.png

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else if(randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "It's a Draw!"
}
else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
}


