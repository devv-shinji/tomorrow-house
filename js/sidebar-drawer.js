const drawerMenuButtonList = document.querySelectorAll(
  '.sidebar-nav .drawer-menu-button'
)

function toggleDrawerMenu(e) {
  // 아래 두가지 표현 다 동일
  // const drawerMenu = e.target.parentElement
  const drawerMenu = this.parentNode
  drawerMenu.classList.toggle('is-open')
}

drawerMenuButtonList.forEach((button) => {
  button.addEventListener('click', toggleDrawerMenu)
})
