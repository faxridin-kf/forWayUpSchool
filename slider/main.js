const prev = document.getElementById('btn-prev')
const next = document.getElementById('btn-next')
const slides = document.querySelectorAll('.slide')
const dotes = document.querySelectorAll('.dot')
let i = 0
console.log(slides)
const activeSlide = n => {
  for (slide of slides) {
    slide.classList.remove('active')
  }
  slides[n].classList.add("active")
}
const activeDot = n => {
  for (dot of dotes) {
    dot.classList.remove('active')
  }
  dotes[n].classList.add("active")
}

const nextSlide = () => {
  if (i == slides.length - 1) {
    i = 0
    activeSlide(i)
    activeDot(i)
  } else {
    i++
    activeSlide(i)
    activeDot(i)
  }
}
const prevSlide = () => {
  if (i == 0) {
    i = slides.length - 1
    activeSlide(i)
    activeDot(i)
  } else {
    i--
    activeSlide(i)
    activeDot(i)
  }
}
dotes.forEach((item, indexDot) => {
  item.addEventListener('click', () => {
    i = indexDot
    activeSlide(i)
    activeDot(i)
  })
})
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(() => {
  nextSlide()
}, 2000);