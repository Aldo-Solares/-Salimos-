// Función que redirige a la página si.html al hacer clic en el botón "Sí".
function nextPage() {
  window.location.href = 'si.html'
}

// Función que mueve el botón "No" a una posición aleatoria dentro de la ventana del navegador,
// asegurando que la nueva posición sea significativamente diferente a la anterior.
function moveButton() {
  const Boton_N = document.getElementById('Boton_no')
  const maxX = window.innerWidth - Boton_N.clientWidth
  const maxY = window.innerHeight - Boton_N.clientHeight

  let newX, newY
  let threshold = 100 // Distancia mínima de cambio para evitar movimientos pequeños.

  do {
    newX = Math.random() * maxX
    newY = Math.random() * maxY
  } while (Math.abs(newX - Boton_N.offsetLeft) < threshold && Math.abs(newY - Boton_N.offsetTop) < threshold)

  Boton_N.style.position = 'absolute'
  Boton_N.style.left = `${newX}px`
  Boton_N.style.top = `${newY}px`
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
