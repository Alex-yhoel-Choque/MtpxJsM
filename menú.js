
  // men
let menuBtn = document.querySelector("#menu-btn");
let navbar = document.querySelector(".menu");

menuBtn.onclick = function() {
  navbar.classList.toggle("active");
};

// Manejo de los submenús
let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  dropdown.addEventListener("click", function(e) {
    e.stopPropagation(); // Evita que el evento se propague
    this.classList.toggle("active");
  });
});

// Cerrar los submenús si se hace clic fuera de ellos
window.onclick = function(event) {
  if (!event.target.matches('.dropdown a') && !event.target.matches('#menu-btn')) {
    let dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach(dropdown => {
      dropdown.classList.remove("active");
    });
  }
}
  
