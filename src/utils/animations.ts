export function init() {
  window.addEventListener('load', scroller)
  window.addEventListener('scroll', scroller)
}

export function scroller() {
  const appearUps = document.querySelectorAll('.appear-up')
  const appears = document.querySelectorAll('.appear')

  const height = window.innerHeight - 100

  appearUps.forEach(v => {
    const top = v.getBoundingClientRect().top
    if (height > top) {
      v.classList.add('on')
    }
  })

  appears.forEach(v => {
    const top = v.getBoundingClientRect().top
    if (height > top) {
      v.classList.add('on')
    }
  })
}

export function setParallax() {
  const [$photo, $web] = document.querySelectorAll('.jsc-parallax')
  const isPC = window.innerWidth > 767
  const adaptHeight = isPC ? 130 : 0
  window.addEventListener('scroll', () => {
    $photo.style.backgroundPositionY = `${$photo.getBoundingClientRect().top /
      3 -
      adaptHeight}px`
    $web.style.backgroundPositionY = `${$web.getBoundingClientRect().top / 3 -
      adaptHeight}px`
  })
}
