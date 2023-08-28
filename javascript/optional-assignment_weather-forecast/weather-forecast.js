// hover functions
function mouseoverButton(element) {
    element.classList.add("mouseover-button");
}
function mouseleaveButton(element) {
    element.classList.remove("mouseover-button");
}
function mouseoverText(element) {
    element.classList.add("mouseover-text");
}
function mouseleaveText(element) {
    element.classList.remove("mouseover-text");
}

//click functions
function onclickAlert() {
    alert("Loading weather report...");
}
function onclickAccept(element) {
    element.parentElement.remove();
}

// helper function for farenheit to celsius 
function farenheit(num) {
    return Math.round(num * 9 / 5 + 32);
}

// variables and functions for temperature conversion selector
var tempText = {
    weather1: [document.querySelector("#temp-low-1"), document.querySelector("#temp-high-1")],
    weather2: [document.querySelector("#temp-low-2"), document.querySelector("#temp-high-2")],
    weather3: [document.querySelector("#temp-low-3"), document.querySelector("#temp-high-3")],
    weather4: [document.querySelector("#temp-low-4"), document.querySelector("#temp-high-4")],
}
// get variables for default celisus temp from html 
for (const key in tempText) {
    tempText[key][2] = parseInt(tempText[key][0].innerText);
    tempText[key][3] = parseInt(tempText[key][1].innerText);
}

function tempConversion(element) {
    switch (element.value) {
    case "°C": {
        for (const key in tempText) {
        tempText[key][0].innerText = tempText[key][2] + "°";
        tempText[key][1].innerText = tempText[key][3] + "°";
        }
        break;
    }
    case "°F": {
        for (const key in tempText) {
        tempText[key][0].innerText = farenheit(tempText[key][2]) + "°";
        tempText[key][1].innerText = farenheit(tempText[key][3]) + "°";
        }
        break;
    }
    default: {
        break;
    }
    }
}

/* old code for tempConversion
var tempText = {
    weather1: [document.querySelector("#temp-low-1"), document.querySelector("#temp-high-1")],
    weather2: [document.querySelector("#temp-low-2"), document.querySelector("#temp-high-2")],
    weather3: [document.querySelector("#temp-low-3"), document.querySelector("#temp-high-3")],
    weather4: [document.querySelector("#temp-low-4"), document.querySelector("#temp-high-4")],
}
var tempInt = {
    weather1: [18, 24],
    weather2: [19, 27],
    weather3: [16, 21],
    weather4: [21, 26],
}
function tempConversion(element) {
    console.log("change");
    switch (element.value) {
        case "°C": {
            tempText.weather1[0].innerText = tempInt.weather1[0] + "°";
            tempText.weather1[1].innerText = tempInt.weather1[1] + "°";
            tempText.weather2[0].innerText = tempInt.weather2[0] + "°";
            tempText.weather2[1].innerText = tempInt.weather2[1] + "°";
            tempText.weather3[0].innerText = tempInt.weather3[0] + "°";
            tempText.weather3[1].innerText = tempInt.weather3[1] + "°";
            tempText.weather4[0].innerText = tempInt.weather4[0] + "°";
            tempText.weather4[1].innerText = tempInt.weather4[1] + "°";
            break;
        } 
        case "°F": {
            tempText.weather1[0].innerText = farenheit(tempInt.weather1[0]) + "°";
            tempText.weather1[1].innerText = farenheit(tempInt.weather1[1]) + "°";
            tempText.weather2[0].innerText = farenheit(tempInt.weather2[0]) + "°";
            tempText.weather2[1].innerText = farenheit(tempInt.weather2[1]) + "°";
            tempText.weather3[0].innerText = farenheit(tempInt.weather3[0]) + "°";
            tempText.weather3[1].innerText = farenheit(tempInt.weather3[1]) + "°";
            tempText.weather4[0].innerText = farenheit(tempInt.weather4[0]) + "°";
            tempText.weather4[1].innerText = farenheit(tempInt.weather4[1]) + "°";
            break;
        }
        default: {
            console.log("default");
            break;
        }
    }
} */