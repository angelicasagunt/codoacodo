document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario);
});

function validarFormulario(evento)
{
  evento.preventDefault();
  let clave = document.getElementById('clave').value
  let usuario = document.getElementById('usuario').value

// Verifica si el campo usuario o clave estan vacios
  if(clave.length == 0 || usuario.length == 0) {
    alert('El campo no puede estar vacio')
    return;
  }

// Verifica si el mail contiene o no un arroba
  if (usuario.indexOf("@")==-1)
  {
      alert("falta el arroba '@' en el usuario")
      return
  }

  this.submit();
}
