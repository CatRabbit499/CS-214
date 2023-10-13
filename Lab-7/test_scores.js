
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
    // Add your code here
}

function displayResults() {
    let results = $('#results');
    results.toggle();
}

function insertNewTableElement(newName, newScore) {
   // Add your code here
}

function initializeScoresTable() {
//  Add your code here
}


function addScore() {
    let score = $('#score');
    let name = $('#name');
    if (score.val() === '' || name.val() === '') {
        alert('Name and score must have values');
        return;
    }
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
    $('#display_results').on('click',  function() {
        displayResults();
    });

    $('#display_scores').on('click',  function() {
        displayScores();
    });
    $('#add').on('click',  function() {
        addScore();
    });

    let name = $('#name');
    let score = $('#score');

    name.focus();
    initializeResults();
    initializeScoresTable();
}