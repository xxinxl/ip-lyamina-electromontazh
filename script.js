document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  document.getElementById("form-status").hidden = false;
});
