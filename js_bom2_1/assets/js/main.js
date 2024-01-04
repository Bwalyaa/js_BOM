function countdown() {
    let counterDiv = document.getElementById("count");
    let number = 10;
    let messageDiv = document.querySelector(".message");

    let interval = setInterval(function () {
        number--;

        if (number >= 0) {
            counterDiv.innerHTML = number;
        } else {
            clearInterval(interval);
            messageDiv.style.display = "none";
        }
    }, 1000);
}

countdown()




