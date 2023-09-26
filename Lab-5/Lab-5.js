/*  Lab 5 JS  */

window.onload = function () {
    document.getElementById("fields").addEventListener('submit', e => e.preventDefault());
    genAttributes();
}

window.addEventListener("submit", function () {
    console.log("Submitted! (js)")
});

const Names = Object.freeze({
    NOUN: "a noun",
    NOUN_2: "another noun",
    NOUN_PL: "a plural noun",
    SONG: "a song",
    VERB: "verb"
});
const NameIndex = Object.values(Names);

function genAttributes() {
    // Number Inputs
    let inputs = document.getElementsByTagName("input");
    for (let x = 0; x < inputs.length - 1; x++) {
        inputs[x].setAttribute("id", x + 1);
    }
    // Add Placeholder Text
    let boxes = document.getElementsByName("box");
    [2, 0, 1, 3, 4, null].forEach((v, k) => boxes[k].setAttribute("placeholder", NameIndex[v]));
}