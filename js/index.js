const menu = document.querySelector("#menu")
const navigation = document.querySelector("#navigation")
const social = document.querySelector("#social")



menu.addEventListener('click', () => {
    menu.classList.toggle("isActive")
    social.classList.toggle("isActive")
    navigation.classList.toggle("isActive")

})