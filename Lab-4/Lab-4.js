/*  Lab 4 JS  */

let input, output, number, work;
const parser = new DOMParser();

function calculate() {
    input = document.getElementsByName("numberIn")[0];
    output = document.getElementById("work");

    let ans = input.value;
    if (ans.match(/^[0-9]*$/) == null) {
        output.innerHTML = `<b>Invalid Entry: ${ans}</b> (Enter an Integer)`;
        input.value = '';
        return
    }
    number = parseInt(ans);
    output.innerHTML = '';

    let n = number;
    work = [
        `<b>Number is ${n}</b><br>`,
        `<b>${number} + 9 = ${number += 9}</b><br>`,
        `<b>${number} * 2 = ${number *= 2}</b><br>`,
        `<b>${number} - 4 = ${number -= 4}</b><br>`,
        `<b>${number} / 2 = ${number /= 2}</b><br>`,
        `<b>${number} - N = ${number -= n}</b><br>`
    ];

    work.forEach(x => {
        const nodes = parser.parseFromString(x, "text/html").body.innerHTML;
        output.innerHTML += nodes;
    });
}