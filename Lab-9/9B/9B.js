$(() => {
    $("#transform").on('click', () => {
        $("#transform").hide();
        $('#restore').show();
        $("#s1>h1").text("The Butterfly");
        $("#p1>strong").text("butterfly");
        $("#photo>img").attr('src', "https://www.kasandbox.org/programming-images/animals/butterfly_monarch.png");
        $("#photo a").attr('href', "https://en.wikipedia.org/wiki/Butterfly").text("Butterfly").addClass("butterfly");
        $("#facts").show();
        $("#list").load("https://www.pasquesi.com/expert-advice/fun-facts-about-butterflies section.article-content.clearfix").addClass("result");
    });

    $("#restore").on('click', () => location.reload(true));

});