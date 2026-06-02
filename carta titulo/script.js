// Selección de portada y carta
const cover = document.getElementById("cover");
const letter = document.getElementById("letter");

// Al hacer clic en la portada, se abre la carta y empiezan los corazones + animación de bloques
cover.addEventListener("click", () => {
  // Mostrar confirmación antes de abrir
  if (confirm("¿Seguro que quieres abrir esta cochinada? ✨")) {
    cover.style.display = "none";
    letter.style.display = "block";
    setTimeout(() => {
      letter.style.opacity = "1";
    }, 100);
    setInterval(crearCorazon, 300);
    mostrarBloques();
  }
});


// Función para crear corazones que caen
function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "🤍"; // corazón blanco
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.bottom = "-20px";
  heart.style.fontSize = (20 + Math.random() * 20) + "px"; // tamaños variados
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}


// Función para mostrar bloques con efecto fade-in
function mostrarBloques() {
  const bloques = document.querySelectorAll(".bloque, .final");
  bloques.forEach((bloque, i) => {
    bloque.style.opacity = 0;
    bloque.style.transform = "translateY(30px)";
    setTimeout(() => {
      bloque.style.transition = "opacity 1.5s ease, transform 1.5s ease";
      bloque.style.opacity = 1;
      bloque.style.transform = "translateY(0)";
    }, i * 1200); // cada bloque aparece con un retraso
  });
// Luz que sigue el mouse
const glow = document.createElement("div");
glow.classList.add("cursor-glow");
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.setProperty("--x", e.clientX + "px");
  glow.style.setProperty("--y", e.clientY + "px");
});
}