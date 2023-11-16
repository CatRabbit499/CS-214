const api = {
    key: "eed088d1a1c1d42d874ab4b73cb3c19e",
    geo: "http://api.openweathermap.org/geo/1.0/direct",
    weather: "https://api.openweathermap.org/data/2.5/weather"
}

const searchbox = $('.search-box');
searchbox.on('keyup', e => {
    const search = searchbox.val();
    console.log(search);
    if (search.length >= 3) {
        $.ajax({
            url: api.geo,
            data: {
                q: search,
                limit: 5,
                APPID: api.key
            },
            success: (rsp) => {
                suggest(rsp);
                console.log("Data: ", rsp, rsp[0]);
            },
            error: (xhr) => console.error("Error Parsing Request: ", xhr.responseJSON)
        });
    }
    if (e.keyCode == 13) {
        getResults(search);
    }
});
function suggest(inp) {
    const results = $('#results');
    results.val("");
    console.assert(inp.length <= 5);
    for (let i = 0; i < inp.length - 1; i++) {
        $('#results').append(`<option value="${inp[i].name}, ${inp[i].state}, ${inp[i].country}"></option>`);
    }
    // inp.forEach(element => {
    //     console.log(element, element.name, element.state, element.country, element.local_names.en);

    // });
}

function getResults(query) {
    console.log("Results...");
    $.ajax({
        url: api.weather,
        type: "get",
        data: {
            q: query,
            units: "metric",
            APPID: api.key
        },
        success: (rsp) => rsp.weather,
        error: (xhr) => console.error("Error Parsing Request: ", xhr)
    }).then(displayResults);
    // fetch(`${api.weather}weather?q=${query}&units=metric&APPID=${api.key}`)
    //     .then(weather => {
    //         return weather.json();
    //     }).then(displayResults);
}

function displayResults(weather) {
    console.log(weather);
    const fields = {
        city: $('.location .city'),
        date: $('.location .date'),
        temp: $('.current .temp'),
        weather: $('.current .weather'),
        hilow: $('.hi-low')
    };
    let city = $('.location .city');
    let date = $('.location .date');
    let temp = $('.current .temp');
    let weather_el = $('.current .weather');
    let hilow = $('.hi-low');
    city.text(`${weather.name}, ${weather.sys.country}`);
    date.text(dateBuilder(weather.sys.country));
    temp.html(`${Math.round(weather.main.temp)}<span>°c</span>`);
    weather_el.text(weather.weather[0].main);

    hilow.text(`${weather.main.temp_min.toFixed()}°c / ${weather.main.temp_max.toFixed()}°c`);
}

function dateBuilder(locale) {
    return new Date().toLocaleDateString(locale, {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    });
    // return `${day} ${date} ${month} ${year}`;
}