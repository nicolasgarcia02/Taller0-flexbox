const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburgerMenu');
hamburgerMenu.onclick = () => {
  for (let i = 0; i < menu.classList.length; i++) {
    const menuClass = menu.classList[i]
    if (menuClass === "hidden") {
      menu.classList.remove('hidden')
      menu.classList.add('open')
    } else if(menuClass === "open") {
      menu.classList.remove('open')
      menu.classList.add('hidden')
    } 
  }
}