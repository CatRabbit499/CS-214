"use strict";
var pattern, output, data;
const valid = s => pattern.test(s);
const error = s => output.html(`<center><font color="red">${s}</font></center>`);
$(() => {
    output = $('#output');
    $("#new-account-form").on('submit', e => {
        let email = $('input[type="email"]').val();
        pattern = /^[\w\d._-]+@[\w\d.-]+\.[\w\d-]{2,}$/;
        if (valid(email)) {
            let password = $('input[type="password"]');
            let password1 = password[0].value;
            pattern = /^(?=(.*[A-Z]){1,})(?=(.*[a-z]){3,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*(){}<>[\]\\/=-__+,.?]){1,}).{8,}$/; // Pass42!!
            if (valid(password1)) {
                let password2 = password[1].value;
                if (password1 === password2) {
                    data = new FormData(e.target);
                    e.target.reset();
                }
                else {
                    error("Passwords Don't Match!");
                    e.preventDefault();
                }
            }
            else {
                error("Invalid Password");
                e.preventDefault();
            }
        }
        else {
            error("Invalid Email");
            e.preventDefault();
        }
    });
});

const submitted = (x) => {
    let x1 = x || data
    let formData = Object.fromEntries(x1);
    // console.log(formData);
    output.html(null);
    Object.keys(formData).forEach(k => {
        let out = k.charAt(0).toUpperCase() + k.slice(1);
        output.append(`<span width="40%">${out}:</span> ${formData[k]}<br>`);
    });
};