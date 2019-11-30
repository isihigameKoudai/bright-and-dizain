export function setParallax() {
  const [$photo, $web]: any = document.querySelectorAll('.jsc-parallax')

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
