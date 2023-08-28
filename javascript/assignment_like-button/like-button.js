var likeCountText1 = document.querySelector("#like-counter1")
var likeCountText2 = document.querySelector("#like-counter2")
var likeCountText3 = document.querySelector("#like-counter3")
var likeCount = [0, 0, 0, 0]

function hoverOver(element) {
    element.classList.add("hoverOver")
    console.log("hover");
}

function hoverLeave(element) {
    element.classList.remove("hoverOver");
    console.log("leave");
}

function likeCountIncrease(itemNumber) {
    switch (itemNumber) {
        case 1: {
        likeCount[1]++;
        if (likeCount[1] == 1) likeCountText1.innerText = likeCount[1] + " like";
        else likeCountText1.innerText = likeCount[1] + " likes";
        break;
        }

        case 2: {
        likeCount[2]++;
        if (likeCount[2] == 1) likeCountText2.innerText = likeCount[2] + " like";
        else likeCountText2.innerText = likeCount[2] + " likes";
        break;
        }
        
        case 3:
        likeCount[3]++; {
        if (likeCount[3] == 1) likeCountText3.innerText = likeCount[3] + " like";
        else likeCountText3.innerText = likeCount[3] + " likes";
        break;
        }
    }
}