let hexFromRGB = (r, g, b) => "#" + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1).toUpperCase();

let refreshSwatch = () => {
    var red = $("#R").slider("value"),
        green = $("#G").slider("value"),
        blue = $("#B").slider("value"),
        hex = hexFromRGB(red, green, blue);
    $("#swatch").css({ backgroundColor: hex, fontFamily: "Roboto Mono", fontSize: "large" }).val(hex);
}
$('#aliens')[0].addEventListener("formdata", e => {
    let data = Object.fromEntries(e.formData);
    console.log(data);
    $('#out').text(
        JSON.stringify(data)
            .replaceAll('{', '{\n')
            .replaceAll(':', ': ')
            .replaceAll(',', ',\n')
            .replaceAll('}', '\n}')
            .replaceAll('\n"', '\n\t"')
    );
});
$('.date').datepicker({ "dateFormat": "yy-mm-dd" });
$('#group').buttonset().css({ fontSize: "xx-small" });
$('.type').checkboxradio();
$('.spinner').spinner();
$("#R, #G, #B").slider({
    orientation: "horizontal",
    range: "min",
    max: 255,
    value: 127,
    slide: refreshSwatch,
    change: refreshSwatch
});
$("#R").slider("value", 255);
$("#G").slider("value", 140);
$("#B").slider("value", 60);