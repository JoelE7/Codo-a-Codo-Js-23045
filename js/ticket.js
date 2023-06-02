let ticket = 200;
let name = document.querySelector("#name");
let lastname = document.querySelector("#lastname");
let email = document.querySelector("#email");
let category = document.querySelector("#category");
let summary = document.querySelector("#summary");
let reset = document.querySelector("#reset");
let information = document.querySelector(".information");
let message = document.querySelector("#message");
let errors = document.getElementsByClassName("errors");

let total = 0;

summary.addEventListener("click", () => {
  total = 0;
  removeInformationSummary(information);
  removeMessagesError(errors);
  if (validateFunction(name, lastname, email, quantity, category)) {
    switch (category.value) {
      case "student":
        total = ticket - 0.8 * ticket;
        total *= quantity.value;
        information.classList.remove("d-none");
        message.innerHTML = `Total a pagar: $${total}`;
        break;
      case "trainee":
        total = ticket - 0.5 * ticket;
        total *= quantity.value;
        information.classList.remove("d-none");
        message.innerHTML = `Total a pagar: $${total}`;
        break;
      case "junior":
        total = ticket - 0.15 * ticket;
        total *= quantity.value;
        information.classList.remove("d-none");
        message.innerHTML = `Total a pagar: $${total}`;
        break;
      default:
        break;
    }
  }
});

reset.addEventListener("click", () => {
  resetForm();
});

const validateFunction = (name, lastname, email, quantity, category) => {
  let valid = true;
  if (!name.value) {
    document.querySelector(".error-name").innerHTML =
      "Por favor ingrese su nombre";
    valid = false;
  }
  if (!lastname.value) {
    document.querySelector(".error-lastname").innerHTML =
      "Por favor ingrese su apellido";
    valid = false;
  }
  if (!email.value) {
    document.querySelector(".error-email").innerHTML =
      "Por favor ingrese su correo";
    valid = false;
  }
  if (!quantity.value) {
    document.querySelector(".error-quantity").innerHTML =
      "Por favor ingrese la cantidad deseada";
    valid = false;
  }
  if (!category.value) {
    document.querySelector(".error-category").innerHTML =
      "Por favor seleccione una categoría";
    valid = false;
  }
  return valid;
};

function removeMessagesError(errors) {
  for (let message of errors) {
    message.innerHTML = "";
  }
}

function removeInformationSummary(information) {
  information.classList.add("d-none");
}

const resetForm = () => {
  name.value = "";
  lastname.value = "";
  email.value = "";
  quantity.value = "";
  category.value = "";
  removeMessagesError(errors);
  removeInformationSummary(information);
};
