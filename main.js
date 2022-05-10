//JavaScript
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  changeColorOnScrollButton()
}

function showNavOnScroll() {
  const scroll = scrollY
  if (scroll > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  const scroll = scrollY
  if (scroll > 390) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function changeColorOnScrollButton() {
  const scroll = scrollY
  if (scroll > 4260) {
    backToTopButton.classList.add('changeColorButtonScroll')
  } else {
    backToTopButton.classList.remove('changeColorButtonScroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 900
}).reveal(`
#home,
#home img,
#home .stats,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content,
#about .content img,
#contact,
#contact header,
#contact .content`)
