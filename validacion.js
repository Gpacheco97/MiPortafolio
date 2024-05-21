//Validación en javascript//

const formularioContacto = document.querySelector(".formcontato__form");
const nombre = document.querySelector('input[name="nombre"]');
const email = document.querySelector('input[name="email"]');
const asunto = document.querySelector('inptut[name="asunto"]');
const mensaje = document.querySelector('textarea[name="mensaje"]');

formularioContacto.addEventListener('submit', function(event){
    if(nombre.value === ''|| email.value=== '' || asunto.value === ''||mensaje.value === ''){
       event.preventDefault();
       alert('Por favor, completa todos los campos del formulario.')
    } else if (!isValidEmail(email.value)) {
        event.preventDefault();
        alert('Por favor, ingresa un correo electrónico válido.');
      }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
