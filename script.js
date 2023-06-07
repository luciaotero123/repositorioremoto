function showAlert() {alert('Hola! Esta es una alerta de JavaScript!');}

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
event.preventDefault();
validateForm();
});

document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
document.querySelector(".nav-links").classList.toggle("nav-links-responsive")}