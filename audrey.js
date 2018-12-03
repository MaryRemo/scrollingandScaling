// let mirror = document.getElementById("message");

// mirror.addEventListener("keyup", function () {
//     document.getElementById("main").textcontent = mirror.nodeValue;
//     document.getElementById("part").textcontent = mirror.nodeValue;

// })

const audrey = document.getElementById("audrey")

/*
    Add an event listener to the `document` object to listen
    for the "scroll" event.
*/
window.addEventListener("scroll", function () {
    /*
        Adjust the width of audrey to be 1/3 the value of
        `window.scrollY`. No lower than 50px, though.
    */
    let size = window.scrollY;
    let width = (size) / 3;
    audrey.style.width = `${width}px`;
    audrey.style.minWidth = "50px";

    let height = (size) / 4;
    audrey.style.height = `${height}px`;
    audrey.style.minHeight = "100px";
});
    /*
        Adjust the height of audrey to be 1/4 the value of
        `window.scrollY`. No lower than 100px, though.
    */