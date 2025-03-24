// Función que redirige a la página si.html al hacer clic en el botón sí.
function nextPage() {
  window.location.href = 'si.html'
}

// Función que mueve el botón "No" a una posición aleatoria dentro de la ventana del navegador.
function moveButton() {
  const Boton_N = document.getElementById('Boton_no')
  const maxX = window.innerWidth - Boton_N.clientWidth
  const maxY = window.innerHeight - Boton_N.clientHeight
  const randomX = Math.random() * maxX
  const randomY = Math.random() * maxY
  Boton_N.style.position = 'absolute'
  Boton_N.style.left = `${randomX}px`
  Boton_N.style.top = `${randomY}px`
}

// Asigna los event listeners a los botones.
document.addEventListener('DOMContentLoaded', () => {
  const Boton_S = document.getElementById('Boton_si')
  const Boton_N = document.getElementById('Boton_no')

  if (Boton_S) {
    Boton_S.addEventListener('click', nextPage)
  }

  if (Boton_N) {
    Boton_N.addEventListener('mouseover', moveButton)
  }
})
