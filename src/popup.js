const popup = document.createElement("div");
popup.id = "popUp";
const form = document.createElement("form");
form.id = "form";
const close = document.createElement("button");
close.innerHTML = "x";
close.addEventListener("click", function () {
  console.log("closed");
});
form.appendChild(close);
popup.appendChild(form);
export function attachPopUp() {
  document.body.appendChild(popup);
}
