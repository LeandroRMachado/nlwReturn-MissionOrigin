//JavaScript

function onScroll() {
  const scroll = scrollY
  if (scroll > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
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
#services .card`)
