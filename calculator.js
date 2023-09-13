const resultLine = document.querySelector(".result")
const numbers = document.querySelector(".numbers")
const button0 = document.querySelector(".zero")
const clear = document.querySelector(".clear")
const back = document.querySelector(".back")
const operators = document.querySelector(".operators")
let result1, result2, result3, operation1, operation2
let emptyResult = false
let changedOperation = false

operators.addEventListener("click", function () {
    emptyResult = true

    if (result1 != undefined || result1 != null) {
        if (changedOperation) {
            result2 = parseInt(resultLine.innerHTML)
        }

        if (event.target.id === "equal" && (operation2 === null || operation2 === undefined)) {
            if (operation1 === "plus") {
                resultLine.innerHTML = addition(result1, result2)
            } else if (operation1 === "minus") {
                resultLine.innerHTML = subtraction(result1, result2)
            } else if (operation1 === "multiply") {
                resultLine.innerHTML = multiply(result1, result2)
            } else if (operation1 === "division") {
                resultLine.innerHTML = division(result1, result2)
            }
            resetCalculator()
        } else if (operation1 && (operation2 === null || operation2 === undefined) && (event.target.id != "multiply" && event.target.id != "division")) {
            if (operation1 === "plus") {
                resultLine.innerHTML = addition(result1, result2)
            } else if (operation1 === "minus") {
                resultLine.innerHTML = subtraction(result1, result2)
            } else if (operation1 === "multiply") {
                resultLine.innerHTML = multiply(result1, result2)
            } else if (operation1 === "division") {
                resultLine.innerHTML = division(result1, result2)
            }
            updateCalculator()
        } else if (operation1 === "multiply" || operation1 === "division") {
            if (operation1 === "multiply") {
                resultLine.innerHTML = multiply(result1, result2)
            } else if (operation1 === "division") {
                resultLine.innerHTML = division(result1, result2)
            }
            updateCalculator()
        } else if (operation2) {
            if (operation1 === "plus" && operation2 === "multiply") {
                resultLine.innerHTML = addition(result1, multiply(result3, result2))
            } else if (operation1 === "plus" && operation2 === "division") {
                resultLine.innerHTML = addition(result1, division(result3, result2))
            }
            resetCalculator()
        } else if (operation1 && (operation2 === null || operation2 === undefined) && (event.target.id === "multiply" || event.target.id === "division")) {
            console.log("OPERATION2 REGISTERED")
            result3 = parseInt(resultLine.innerHTML)
            operation2 = event.target.id
        } 
    } else {
        result1 = parseInt(resultLine.innerHTML)
        operation1 = event.target.id
    }
    })
        
numbers.addEventListener("click", function () {
    changedOperation = true
    if (emptyResult && !event.target.classList.contains("back")) {
        resultLine.innerHTML = null
        emptyResult = false
    }
       
    if (event.target.id === "one"){
        resultLine.innerHTML += 1
    } else if (event.target.id === "two") {
        resultLine.innerHTML += 2
    } else if (event.target.id === "three") {
        resultLine.innerHTML += 3
    } else if (event.target.id === "four") {
        resultLine.innerHTML += 4
    } else if (event.target.id === "five") {
        resultLine.innerHTML += 5
    } else if (event.target.id === "six") {
        resultLine.innerHTML += 6
    } else if (event.target.id === "seven") {
        resultLine.innerHTML += 7
    } else if (event.target.id === "eight") {
        resultLine.innerHTML += 8
    } else if (event.target.id === "nine") {
        resultLine.innerHTML += 9
    } else if (event.target.classList.contains("back")) {
        let currentNumber = resultLine.innerHTML
        if (currentNumber[0] === "-" && currentNumber.length <= 2) {
            resultLine.innerHTML = null
        } else {
            resultLine.innerHTML = currentNumber.slice(0, -1)
        }
    } else if (event.target.classList.contains("clear")) {
        resultLine.innerHTML = null
        resetCalculator()
    }
})

button0.addEventListener("click", function () {
    resultLine.innerHTML += 0
})

function division(numb1, numb2) {
    let firstResult = numb1 / numb2
    let result = Number(firstResult).toFixed(1)
    return result
}

function multiply(numb1, numb2) {
    return numb1 * numb2 
}

function subtraction(numb1, numb2) {
    return numb1 - numb2
}

function addition(numb1, numb2) {
    return numb1 + numb2
}

function updateCalculator() {
    operation1 = event.target.id
    operation2 = null
    result1 = parseInt(resultLine.innerHTML)
    result2 = null
    changedOperation = false
}

function resetCalculator() {
    result1 = null
    result2 = null
    result3 = null
    operation1 = null
    operation2 = null
}


