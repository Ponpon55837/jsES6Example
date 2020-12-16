const navbarPosition = document.querySelector('#navbar')

document.addEventListener('scroll', () => {
  let scrolled = document.scrollingElement.scrollTop
  let position = navbarPosition.offsetTop
  if(scrolled > position + 60){
    navbarPosition.classList.add('opacityReduce')
  }
  if (scrolled <= position + 60) {
    navbarPosition.classList.remove('opacityReduce')
  }
})
