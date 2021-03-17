// const myMessage = document.getElementById("message");

// function showMessage() {
//     myMessage.className = "show";
// }

// setTimeout(showMessage, 3000);

let colourChanger = document.getElementById("colour-changer");
let colours = ["#ff9999", "#ggggg", "#586432", "#234543"];
let counter = 0;

function changeColour() {
    if (counter >= colours.length) {
        counter = 0;
}

    colourChanger.style.background = colours[counter];
    counter++;
}

let myTimer = setInterval(changeColour, 1000);

colourChanger.onclick = function () {
    clearInterval(myTimer);
    colourChanger.innerHTML = "Timer stopped";
}