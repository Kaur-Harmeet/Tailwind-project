const toggleBtn = document.querySelector('.toggel_btn')
const toggleBtnIcon = document.querySelector('.toggel_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.addEventListener("click", function()
{
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark '
    : 'fa-solid fa-bars '
})