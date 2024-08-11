let techOne = document.getElementById("Tech1");
let techTwo = document.getElementById("Tech2");
let cccOne = document.getElementById("CCC1");
let cccTwo = document.getElementById("CCC2");

techTwo.hidden = true;
cccTwo.hidden = true;

techOne.onclick = function () {
    techOne.hidden = true;
    techTwo.hidden = false
}
techTwo.onclick = function () {
    techTwo.hidden = true;
    techOne.hidden = false
}

cccOne.onclick = function () {
    cccOne.hidden = true;
    cccTwo.hidden = false;
}

cccTwo.onclick = function () {
    cccTwo.hidden = true;
    cccOne.hidden = false;
}