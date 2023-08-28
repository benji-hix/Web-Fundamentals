var profileName = document.querySelector("#profile-name");
var requestsNumberText = document.querySelector("#requests-number-text");
var connectionsNumberText = document.querySelector("#connections-number-text");
var requestsInteger = 2;
var connectionsInteger = 500;


function mouseoverButton(element) {
    element.classList.add("mouseover-button");
}
function mouseleaveButton(element) {
    element.classList.remove("mouseover-button");
}
function onclickSettings() {
    var name = prompt("What is your name?");
    if (name != null) profileName.innerText = name;
}

function onclickAccept(element) {
    requestsInteger--;
    connectionsInteger++;
    element.parentElement.remove();
    requestsNumberText.innerText = requestsInteger;
    connectionsNumberText.innerText = connectionsInteger;
}
function onclickDeny(element) {
    requestsInteger--;
    element.parentElement.remove();
    requestsNumberText.innerText = requestsInteger;
    connectionsNumberText.innerText = connectionsInteger;
}