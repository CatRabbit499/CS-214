"use strict";

const $ = (id) => document.getElementById(id);

const urlParm = (parmKey) => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramValue = urlParams.get(parmKey);
    console.log('parmKey/value' + parmKey + ':' + paramValue);
    return paramValue;
};

const confirmData = () => {
    $("confirm_form").submit();
};
window.onload = () => {
    $("firstName").innerHTML = urlParm("first_name");
    $("emailAddress").innerHTML = urlParm("email_address1");
    $("confirmBtn").onclick = confirmData;
};