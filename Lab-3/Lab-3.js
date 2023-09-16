/*  Lab 3 JS  */

let input, number, work;

function calculate() {
    input = document.getElementsByName("numberIn")[0];
    number = parseInt((input.value === '') ? prompt("Enter a Number: ") : input.value);

    output = document.getElementById("work");
    let n = number;
    let work = [
        `<b>Number is ${number}</b><br>`,
        `<b>${number} + 9 = ${number += 9}</b><br>`,
        `<b>${number} * 2 = ${number *= 2}</b><br>`,
        `<b>${number} - 4 = ${number -= 4}</b><br>`,
        `<b>${number} / 2 = ${number /= 2}</b><br>`,
        `<b>${number} - N = ${number -= n}</b><br>`
    ];

    console.log(work);
    const parser = new DOMParser();

    let frag = new DocumentFragment();
    work.forEach(x => {
        const nodes = parser.parseFromString(x, "text/html").body.innerHTML;
        console.log(x);
        if (input.value === '') document.write(x); else output.innerHTML += nodes;
    });
}