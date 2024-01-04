function startBtn() {
    let counterDiv = document.querySelector(".zeit")
    let button = document.getElementById("btn")
    let percentNumber = 100;
    // let countdownElement = document.getElementById("countdown");

    let interval = setInterval(function () {
        percentNumber--;

        if (percentNumber >= 0) {
            counterDiv.innerHTML = percentNumber + "%";
        } else {
            clearInterval(interval);
        }
    }, 100);
}


















