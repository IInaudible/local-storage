//create empty pageLoad function
//add DOMContentLoadedEventListener
//inside of pageLoad, add event listener to product id
//then create afterChange function with console log
//check in console then add local storage
//add getItem to pageLoad function
//set getItem equal to fruit
//console.log fruit
//add if statement to set the value of fruit in pageLoad function
//this will keep the value of the previous selected value
//create event for input box in pageLoad
//add afterInput function
//creat inputBox variable to get Item from local storage
//add if statement for inputBox

//everything is stored in the current browser

function pageLoad() {
    const fruit = localStorage.getItem("fruit")
    const inputBox = localStorage.getItem('inputBox')

    if (fruit) {
        document.getElementById('product').value = fruit
    }
    document.getElementById('product').addEventListener('change', afterChange)
    if (inputBox) {
        document.getElementById('inputBox').value = inputBox
    }
    document.getElementById('inputBox').addEventListener('input', afterInput)
}

function afterChange(e) {
    console.log(e.target.value);
    localStorage.setItem('fruit', e.target.value)
}

function afterInput(e) {
    console.log(e.target.value)
    localStorage.setItem('inputBox', e.target.value)
}

document.addEventListener('DOMContentLoaded', pageLoad)