
box = document.querySelector(".box");

function Randomcolors() {
    let val1 = Math.ceil(0 + Math.random() * 255)
    let val2 = Math.ceil(0 + Math.random() * 255)
    let val3 = Math.ceil(0 + Math.random() * 255)
    return `rgb(${val1},${val2},${val3})`
}
setInterval(() => {
    box.style.backgroundColor = Randomcolors()
    document.body.style.backgroundColor = Randomcolors()

}, 250);
