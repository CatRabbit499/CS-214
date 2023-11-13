"use strict";
var pattern, data;
const valid = s => pattern.test(s);
$(() => {
    $("#new-account-form").on('submit', e => {
        console.log("Creating Account...");
        let email = $('input[type="email"]').val();
        pattern = /^[\w\d._-]+@[\w\d.-]+\.[\w\d-]{2,}$/;
        if (valid(email)) {
            console.log("Valid Email");
            let password = $('input[type="password"]');
            let password1 = password[0].value;
            pattern = /^(?=(.*[A-Z]){1,})(?=(.*[a-z]){3,})(?=(.*[0-9]){2,})(?=(.*[!@#$%^&*(){}<>[\]\\/=-__+,.?]){1,}).{8,}$/; // Pass42!!
            if (valid(password1)) {
                console.log("Valid Password");
                let password2 = password[1].value;
                if (password1 === password2) {
                    console.log("Passwords Match!");
                    data = new FormData(e.target);
                }
                else {
                    console.log("Passwords Don't Match!");
                    e.preventDefault();
                }
            }
            else {
                console.log("Invalid Password: ", password1);
                e.preventDefault();
            }
        }
        else {
            console.log("Invalid Email: ", email);
            e.preventDefault();
        }
    });
});

const submitted = (x) => {
    let x1 = x || data
    let formData = Object.fromEntries(x1);
    console.log(formData);
    Object.keys(formData).forEach(k => {
        $('#output').append(`${k}: ${formData[k]}<br>`);
    });
    console.log(formData.keys);
};