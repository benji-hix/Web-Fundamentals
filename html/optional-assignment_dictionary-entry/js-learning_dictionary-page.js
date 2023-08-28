// change "Login" to "Logout" when button is clicked

function loginChange(element) {
    element.innerText = "Logout"
}

function hoverOver(element) {
    element.classList.add("hoverOver")
}

function hoverLeave(element) {
    element.classList.remove("hoverOver");
}

function buttonRemove(element) {
    element.remove();
}

var likeCount13 = 13

function buttonLike13(element) {
    alert('Ninja was liked');
    likeCount13 += 1;
    element.innerText = likeCount13 + " likes"
    // return likeCount13
}
var likeCount37 = 37

function buttonLike37(element) {
    alert('Ninja was liked');
    likeCount37 += 1;
    element.innerText = likeCount37 + " likes"
    // return likeCount37
}

function searchAttempt(event, element) {
    if (event.keyCode == 13) {
    alert('Unfortunately, executing an actual search query is beyond the scope of my current coding abilities. Please try again in 2 weeks.');
    element.style.backgroundColor = '#000000';
    }
}