const triangle = document.querySelector("#triangle")
const fivecore = document.querySelector("#fivecore")

triangle.addEventListener("mousemove", (e) => {
  triangle.classList.remove('triangle_before')
  triangle.classList.add('triangle_after')
  triangle.style.transition = "all 0.3s ease"
})

triangle.addEventListener("mouseenter", (e) => {
  triangle.classList.remove('triangle_before')
  triangle.classList.add('triangle_after')
  triangle.style.transition = "all 0.3s ease"
})

triangle.addEventListener("mouseleave", (e) => {
  triangle.classList.add('triangle_before')
  triangle.classList.remove('triangle_after')
  triangle.style.transition = "all 0.3s ease"
})

fivecore.addEventListener("mousemove", (e) => {
  fivecore.classList.remove('fivecore_before')
  fivecore.classList.add('fivecore_after')
  fivecore.style.transition = "all 0.3s ease"
})

fivecore.addEventListener("mouseenter", (e) => {
  fivecore.classList.remove('fivecore_before')
  fivecore.classList.add('fivecore_after')
  fivecore.style.transition = "all 0.3s ease"
})

fivecore.addEventListener("mouseleave", (e) => {
  fivecore.classList.add('fivecore_before')
  fivecore.classList.remove('fivecore_after')
  fivecore.style.transition = "all 0.3s ease"
})
