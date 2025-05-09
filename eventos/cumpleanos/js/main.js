// Menú móvil
document.addEventListener("DOMContentLoaded", () => {
  // Menú móvil
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Filtros
  const filterButtons = document.querySelectorAll(".filter-btn")
  const templateCards = document.querySelectorAll(".template-card")

  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      // Remover clase activa de todos los botones
      filterButtons.forEach((btn) => btn.classList.remove("active"))

      // Agregar clase activa al botón clickeado
      this.classList.add("active")

      // Obtener categoría a filtrar
      const filterValue = this.getAttribute("data-filter")

      // Mostrar u ocultar tarjetas según la categoría
      templateCards.forEach((card) => {
        if (filterValue === "all") {
          card.style.display = "block"
        } else {
          if (card.getAttribute("data-category") === filterValue) {
            card.style.display = "block"
          } else {
            card.style.display = "none"
          }
        }
      })
    })
  })

  // Animación al hacer scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll(".template-card")

    elements.forEach((element, index) => {
      const elementPosition = element.getBoundingClientRect().top
      const screenPosition = window.innerHeight / 1.2

      if (elementPosition < screenPosition) {
        // Añadir un retraso escalonado para cada tarjeta
        setTimeout(() => {
          element.classList.add("visible")
        }, 100 * index)
      }
    })
  }

  // Ejecutar animación al cargar la página y al hacer scroll
  window.addEventListener("load", animateOnScroll)
  window.addEventListener("scroll", animateOnScroll)
})
