/*  Lab 5 JS  */
let form, result = {};
window.onload = function () {
    form = document.getElementById("fields");
    form.addEventListener('submit', event => {
        event.preventDefault();
        console.log("Submitted! (js)");
        let formdata = new FormData(form);
    });
    genAttributes();
}

window.addEventListener("formdata", (event) => {
    console.log("Formdata Event");
    event.formData.forEach((v, k) => result[k] = v);
    // var json = JSON.stringify(result);
    console.log(result);

    event.preventDefault();
});

function processForm(test) {
    console.log('Submitted! <form>', test, new FormData(test));
    // console.log();
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
    [2, 0, 1, 3, 4, null].forEach((v, k) => {
        boxes[k].setAttribute("placeholder", NameIndex[v]);
        // boxes[k].setAttribute("name", `box${k}`);
    });
}