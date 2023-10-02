/*  Lab 5 JS  */
let form, result = {};
window.onload = function () {
    form = document.getElementById("fields");
    form.addEventListener('submit', event => {
        event.preventDefault();
        let formdata = new FormData(form);
    });
    genAttributes();
}

window.addEventListener("formdata", (event) => {
    console.log("Formdata Event");
    event.preventDefault();
    event.formData.forEach((v, k) => result[k] = v);
    genMadLib();
});

function genMadLib() {
    for (let x in result) {
        if (result[x] === '') continue;
        document.getElementById(x).innerHTML = result[x].toLowerCase();
    }
    document.querySelector("#output").toggleAttribute("hidden", false);
}

function resetForm() {
    form.reset();
    document.querySelector("#output").toggleAttribute("hidden", true);
}

const Names = Object.freeze({
    NOUN: "a noun",
    NOUN_2: "another noun",
    NOUN_PL: "a plural noun",
    SONG: "a song",
    VERB: "verb"
});
const NameIndex = Object.values(Names);

function genAttributes() {
    // Add Placeholder Text
    let boxes = document.getElementsByClassName('box');
    [2, 0, 1, 3, 4].forEach((v, k) => {
        boxes[k].setAttribute("placeholder", NameIndex[v]);
    });
}