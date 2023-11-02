$(() => {
    $("#pic_box").children().forEach(el => {
        el.find("img:first").addEventListener('click', e => {
            console.log(e);
        });
    });
});
