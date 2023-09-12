const p = document.querySelector("p");
const body = document.querySelector("body");

const colors = ["red", "blue", "yellow", "green", "black", "pink",];
// console.log(colors);

for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
    p.innerHTML += `<button onclick = "changeColor(${[i]})">${colors[i]}</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`
}
function changeColor(i) {
    // console.log(i);
    body.style.backgroundColor = colors[i]
}


