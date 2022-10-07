var interval;
var number = 0


const startTimer = () => {
    if (document.querySelector("p")) {
        num = document.querySelector("p")
        interval = setInterval(() => {
            number += 1
            num.innerText = number
        }, 1000)
        document.querySelector("#start-btn").setAttribute("disabled", "true")
        document.querySelector("#stop-btn").removeAttribute("disabled")
        document.querySelector("#reset-btn").setAttribute("disabled", "true")
    } else {


        const num = document.createElement("p")
        num.innerText = number
        num.className = "num"
        document.getElementById("heading").appendChild(num)
        interval = setInterval(() => {
            number += 1
            num.innerText = number
        }, 1000)
        document.querySelector("#start-btn").setAttribute("disabled", "true")
        document.querySelector("#stop-btn").removeAttribute("disabled")
        document.querySelector("#reset-btn").setAttribute("disabled", "true")
    }
    return
}

const stopTimer = () => {
    document.querySelector("#start-btn").removeAttribute("disabled")
    document.querySelector("#stop-btn").setAttribute("disabled", "true")
    document.querySelector("#reset-btn").removeAttribute("disabled")
    return clearInterval(interval)
}

const resetTimer = () => {
    number = 0
    clearInterval(interval)
    document.querySelector("#start-btn").removeAttribute("disabled")
    return document.querySelector("p").remove()
}