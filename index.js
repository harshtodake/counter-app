// const add = document.querySelector(".add");
// const subtract = document.querySelector(".subtract");
// const reset = document.querySelector(".reset");
const count = document.querySelector(".count");
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    console.log("Add");
    count.innerHTML++;
  }
  if (e.target.classList.contains("subtract")) {
    console.log("subtract");
    count.innerHTML--;
  }
  if (e.target.classList.contains("reset")) {
    console.log("reset");
    count.innerHTML = 0;
  }
});

// add.addEventListener("click", () => {
//     count.innerHTML++;
// })

// subtract.addEventListener("click", () => {
//     count.innerHTML--;
// })

// reset.addEventListener("click", () => {
//     count.innerHTML = 0;
// })
