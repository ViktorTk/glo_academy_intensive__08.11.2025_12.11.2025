const navbar = document.querySelector('.header__nav')
const links = navbar.querySelectorAll('a')

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault()

    const section = document.querySelector(link.getAttribute('href'))

    if (section) {
      // Стандартная реализация плавного скролла
      // section.scrollIntoView({
      //   block: 'start',
      //   behavior: 'smooth',
      // })

      // Реализация кросс-браузерного плавного скролла с использованием библиотеки seamless-scroll-polyfill
      seamless.scrollIntoView(section, {
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      })
    }
  })
})
