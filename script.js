function halfLife() {
    let ran = Math.round(Math.random());
    let res = document.getElementById("result")
    if (ran === 1){
        result.innerHTML = "Атом распался"
        result.style.border = "3px solid #0d8531"
        result.style.background = "#0d8531"
    } else {
        result.innerHTML = "Атом не распался"
        result.style.border = "3px solid #be1212"
        result.style.background = "#be1212"
    }
}
