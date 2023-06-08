window.onload = function() {
    var qualities = document.getElementsByClassName('qualities');
    for (var i = 0; i < qualities.length; i++) {
      qualities[i].style.animationDelay = (i * 0.2) + 's';
    }
  };

  function VentanaEmergente() {
    alert("Mensaje enviado exitosamente.") 
  }