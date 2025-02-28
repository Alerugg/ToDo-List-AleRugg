/* eslint-disable */
import "bootstrap";
import "./style.css";

const ul = document.querySelector("#list");
const button = document.querySelector("#button");
const input = document.querySelector("#input");

button.addEventListener("click", () => {
  const newLi = document.createElement("li");

  newLi.innerHTML = `${input.value} <i class="bi bi-trash3-fill"></i>`; // < ----- esta funcion crea un li nuevo al darle al boton
  newLi.classList = "liRow";

  ul.appendChild(newLi);

  input.value = "";
});

input.addEventListener("keyup", event => {
  if (event.key === "Enter" && input.value !== "") {
    const newLi = document.createElement("li");
    newLi.innerHTML = `${input.value} <i class="bi bi-trash3-fill"></i>`; // < ----- esta funcion crea un li nuevo al darle Enter
    newLi.classList = "liRow";

    ul.appendChild(newLi);

    input.value = ""; // <----- esta opcion hace que al agregar el imput que le pongas, se restablezca el imput para que este en blanco y puedas escribir otra cosa
  }
});

ul.addEventListener("click", event => {
  if (event.target.classList.contains("bi-trash3-fill")) {
    // < ----- esta funcion elimina de la lista el li que desees borrar al darle al icono
  }
  const li = event.target.closest("li");
  if (li) {
    li.remove();
  }
});
