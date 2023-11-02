$(() => {
    $("#pic_box").children().each((index, el) => {
        console.log(index, el, this);
        // this.first().addEventListener('click', e => {
        //     console.log(e);
        // });
    });
});
