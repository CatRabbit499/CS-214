"use strict";
let namesArr = ['Ben', 'Joel', 'Judy', 'Anne'];
let scoresArr = [88, 98, 77, 88];

function getAvgScore() {
    let i = 0,
        sum = 0,
        len = scoresArr.length;
    let name = '';
    for (i; i < len; i++) {
        sum += scoresArr[i];
    }
    return sum / len;
}

function getHighScore() {
    let i = 0,
        max = 0,
        len = scoresArr.length;
    let name = '';
    for (i; i < len; i++) {
        if (scoresArr[i] > max) {
            max = scoresArr[i];
            name = namesArr[i];
        }
    }
    return name + ' with score of ' + max;
}

function initializeResults() {
    let results = $('#results');
    let high = getHighScore();
    let avg = getAvgScore().toFixed(1);
    $('#highScore').html(high);
    $('#avgScore').html(avg);
}


function displayScores() {
    let scores = $('#scores');
    scores.toggle();
}

function displayResults() {
    let results = $('#results');
    results.toggle();
}

function insertNewTableElement(newName, newScore) {
    $('#scoresTable tr:last').append('<tr> <td>' + newName + '</td><td>' + newScore + '</td></tr>');
}

function initializeScoresTable() {
    $('#scores_table tr').slice(1).remove();

    for (let i = 0; i < scoresArr.length; i++) {
        insertNewTableElement($('#scores_table tr:last').after(`<tr><td> ${namesArr[i]} </td> <td> ${scoresArr[i]} </td> </tr>`));
    }
}

function resetInputs() {
    $("#name_span").text(" *");
    $("#score_span").text(" *");
}

function addScore() {
    resetInputs();
    let validated = true;
    let score = $('#score');
    let name = $('#name');

    //regex pattern means if not alphabetic or space
    let pattern = /[^A-Za-z ]/;
    if (name.val() === '' || pattern.test(name.val())) {
        $("#name_span").text((name.val() === '') ? "Required" : "Invalid");
        validated = false;
    }
    if (score.val() === '' || isNaN(score.val())) {
        $("#score_span").text(isNaN(score.val()) ? "Invalid" : "Required");
        validated = false;
    }

    if (!validated) return;

    scoresArr.push(parseInt(score.val()));
    namesArr.push($("#name").val());
    initializeScoresTable();
    score.val('');
    name.val('');
    initializeResults();
    $('#scores').show();
    $('#results').show();
}

window.onload = function () {
    $('#display_results').on('click', displayResults);
    $('#display_scores').on('click', displayScores);
    $('#add').on('click', addScore);

    let name = $('#name');
    let score = $('#score');

    name.focus();
    initializeResults();
    initializeScoresTable();

    // register jQuery extension
    // used for changing focus on enter ekey
    jQuery.extend(jQuery.expr[':'], { focusable: (el, index, selector) => $(el).is('a, button:not(id="btn"), :input, [tabindex]') });

    //  Changes focus to next input on enter key
    $(document).on('keypress', 'input,select', function (e) {
        if (e.key === "Enter") {
            e.preventDefault();
            // Get all focusable elements on the page
            let $canfocus = $(':focusable');
            let index = $canfocus.index(this) + 1;
            if (index >= $canfocus.length)
                index = 0;
            $canfocus.eq(index).focus();
        }
    });
}