let query = document.querySelector(".search");
let searchBtn = document.querySelector(".searchBtn");

// Función que realiza la búsqueda
function performSearch() {
  let url = "https://www.google.com/search?q=" + query.value;
  window.open(url, "_self");
}

// Ejecutar la búsqueda al hacer clic en el botón
searchBtn.onclick = function () {
  performSearch();
};

// Ejecutar la búsqueda al presionar "Enter" en el campo de texto
query.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    performSearch();
  }
});
