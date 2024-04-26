function halfLife() {
    let ran = Math.round(Math.random());
    let res = document.getElementById("result")
    let arr1 = document.getElementById("arrow1")
    let arr2 = document.getElementById("arrow2")
    if (ran === 1){
        res.innerHTML = "атом распался"
        res.style.border = "3px solid #0d8531"
        res.style.background = "#0d8531"
        res.style.display = "inline-block"
        arr1.style.display = "inline-block"
        arr2.style.display = "none"
    } else {
        res.innerHTML = "атом не распался"
        res.style.border = "3px solid #be1212"
        res.style.background = "#be1212"
        res.style.display = "inline-block"
        arr2.style.display = "inline-block"
        arr1.style.display = "none"
    }
}
