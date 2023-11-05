$(() => {
    let timeout = 4000;
    let thunder = () => $(".lightning").each(function () {
        setTimeout(() => $(this).fadeIn(250).fadeOut(250), timeout);
        switch (timeout) {
            case 4000:
                timeout += 1000;
                break;
            case 5000:
                timeout += 2000;
                break;
            case 7000:
                timeout -= 3000;
        }
    });
    thunder();
    $(".face").each(function () {
        this.addEventListener('mousedown', e => {
            switch (e.button) {
                case 0:
                    $(this).animate({
                        backgroundPositionX: "-=367"
                    }, 1000);
                    break;
                case 1:
                    break;
                case 2:
                    $(this).animate({
                        backgroundPositionX: "+=367"
                    }, 1000);
                    break;
            }
        });
    }).on('contextmenu', e => e.preventDefault());
    setInterval(thunder, 10000);
});