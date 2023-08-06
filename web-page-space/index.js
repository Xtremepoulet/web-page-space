const menu_btn = document.querySelector(".button-toggler");
const navigation = document.querySelector(".navigation");


menu_btn.addEventListener("click", event => {
    navigation.classList.toggle("active");
})