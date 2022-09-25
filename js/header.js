const header = document.getElementsByTagName("header")[0];  // Получаем шапку
const header_ = document.getElementById("header");  // Получаем заменитель шапки
let position = 0;  // Позиция прилипания шапки


function header_logic() {
    if (window.pageYOffset >= header.offsetTop && header.offsetTop !== 0)  // Шапка должна прилипнуть?
    {
        header_.classList.add("active");
        position = header.offsetTop;
        header.classList.add("sticky");
    } else if (position > window.pageYOffset)  // Шапка должна отлипнуть?
    {
        header.classList.remove("sticky");
        header_.classList.remove("active");
    }
}


window.addEventListener("scroll", header_logic);  // Привязка события при скроле
