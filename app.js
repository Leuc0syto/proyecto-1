const colores = ["green", "red", "rgba(133,122,200)", "#f15025", "black"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const numeroAleatorio = conseguirNumeroAleatorio();
  

  document.body.style.backgroundColor = colores[numeroAleatorio];
  color.textContent = colores[numeroAleatorio];
});

function conseguirNumeroAleatorio() {
  return Math.floor(Math.random() * colores.length);
}