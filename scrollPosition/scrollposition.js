const navbarPosition = document.querySelector('#navbar')

document.addEventListener('scroll', () => {
  let scrolled = document.scrollingElement.scrollTop
  let position = navbarPosition.offsetTop
  if(scrolled > position){
    navbarPosition.classList.add('opacityReduce')
  }
  if (scrolled <= position) {
    navbarPosition.classList.remove('opacityReduce')
  }
})
