"use strict";
let slides;

window.onload = () => $
    .getJSON("slides.json", (json) => slides = json)
    .done(cycle)
    .fail(() => console.log("Fail!"));
let slidenum = 0;
function cycle() {
    slidenum++;
    if (slidenum == slides.length) slidenum = 0;
    $('#slide_image').attr('src', slides[slidenum].src);
    $('#slide_text').html(slides[slidenum].caption);
    $('#slide_link').attr('href', slides[slidenum].url);
    if (slides[slidenum].url.length > 0) {
        $('#slide_image')
            .css('cursor', 'pointer')
            .onclick = () => location.href = slides[slidenum].url;
    }
    setTimeout(cycle, 3000);
}