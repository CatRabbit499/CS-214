"use strict"

let canvas, ctx;
let slides;
const img = new Image(630, 355);

let initSlides = async () => {
    canvas = document.getElementById("slideshow");
    canvas.onclick = initSlides;
    let slideOffsets = {
        left: (canvas.width - 630) / 2,
        top: undefined
    };
    slideOffsets.top = slideOffsets.left;
    // console.log(slideOffsets);
    ctx = canvas.getContext("2d", { willReadFrequently: true }); // Use SOFTWARE rendering

    /*  Image Border  */
    ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue("--slate");
    ctx.globalCompositeOperation = "source-over";
    ctx.lineWidth = 2;
    ctx.strokeRect(slideOffsets.left - 2, slideOffsets.top - 2, img.width + 3, img.height + 3);

    /*  Default Slide Background  */
    ctx.fillStyle = getComputedStyle(document.body).getPropertyValue("--white");
    ctx.fillRect(slideOffsets.left, slideOffsets.top, img.width, img.height);
    ctx.stroke();

    /*  SRC Change Listener  */
    img.addEventListener('load', () => {
        // Clear Previous & Load Slide
        ctx.clearRect(slideOffsets.left, slideOffsets.top, img.width, img.height);
        ctx.drawImage(img, slideOffsets.left, slideOffsets.top, img.width, img.height);

        // Change Background to average RGB image values
        let rgb = avgColor();
        canvas.style.backgroundColor = `rgb(${rgb.r},${rgb.g}, ${rgb.b})`;
    });

    /*  Default Image  */
    // img.src = "img/superhero1.png";

    for (let i = 0; i < 6; i++) {
        let test = `img/superhero${i + 1}.png`;
        await sleep(2000).then(() => {
            console.log(test);
            img.src = test;
        });
    }
}

let changeSlide = (n) => {
    console.log(`Changing To Slide ${n}`);
    img.src = `img/superhero${n}.png`;
}

let avgColor = () => {
    var blockSize = 5,
        defaultRGB = { r: 0, g: 0, b: 0 },
        data, width, height,
        i = -4,
        length,
        rgb = { r: 0, g: 0, b: 0 },
        count = 0;

    data = ctx.getImageData(0, 0, img.width, img.height);
    length = data.data.length;

    while ((i += blockSize * 4) < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
    }

    // ~~ used to floor values
    rgb.r = ~~(rgb.r / count);
    rgb.g = ~~(rgb.g / count);
    rgb.b = ~~(rgb.b / count);

    return rgb;
}

const sleep = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

const themeObserver = new MutationObserver((mutations) => {
    let mu = mutations[0];
    if (mu.type !== "attributes" && mu.attributeName !== "class") return;
    // console.log("class was modified!", mu);
    initSlides();
});

window.onload = () => {
    themeObserver.observe(document.querySelector('body'), { attributes: true });
    initSlides();
}