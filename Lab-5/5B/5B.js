"use strict";

const $ = selector => document.querySelector(selector);

const getErrorMsg = lbl => `${lbl} must be a valid number greater than zero.`;
const getErrorMsgTax = lbl => `${lbl} must be a valid number greater than zero and less than 100.`;

const focusAndSelect = selector => {
    const elem = $(selector);
    elem.focus();
    elem.select();
};

const en_us = new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' });

const processEntries = () => {
    const sales = parseFloat($("#sales").value);
    const tax = parseFloat($("#tax").value);

    if (isNaN(sales) || sales <= 0) {
        alert(getErrorMsg("Sales Amount"));
        focusAndSelect("#sales");
    } else if (isNaN(tax) || tax <= 0 || tax > 100) {
        alert(getErrorMsgTax("Tax Percent"));
        focusAndSelect("#tax");
    } else {
        $("#total").value = en_us.format((sales + calculateTax(sales, tax)).toFixed(2));
    }
};

const calculateTax = (subtotal, taxRate) => {
    const taxAmount = subtotal * taxRate / 100;
    return taxAmount;
};

var clearEntries = () => {
    $("#sales").value = "";
    $("#tax").value = "";
    $("#total").value = "";
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", processEntries);
    $("#sales").focus();
});