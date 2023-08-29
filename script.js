const btn = document.getElementById("hamburger");
const bar = document.querySelector("section");
let input = document.getElementById("input");

btn.addEventListener("click", show);
function show() {
  bar.classList.toggle("showmenu");
  input.checked = !input.checked;
}
const backcol = document.getElementById("about");
const button = document.getElementById("clickme");
const dd = document.getElementById("dropdown");
let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let disvalue = document.createElement("div");
disvalue.id = "bgvalue";
document.getElementById("partwo").appendChild(disvalue);

button.addEventListener("click", result);

function result() {
  let hexvalue = "#";
  for (let i = 0; i <= 5; i++) {
    hexvalue += rand();
  }
  console.log(hexvalue);
  backcol.style.backgroundColor = hexvalue;
  dd.style.backgroundColor = hexvalue;
  disvalue.innerHTML = `Current Color = ${hexvalue}`;
}

function rand() {
  let value = Math.floor(Math.random() * 16);
  return array[value];
}
