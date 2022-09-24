const header = document.getElementsByTagName("header")[0];  // Получаем шапку
let position = 0;  // Позиция прилипания шапки


function header_logic() {
    if (window.pageYOffset >= header.offsetTop && header.offsetTop !== 0)  // Шапка должна прилипнуть?
    {
        position = header.offsetTop;
        header.classList.add("sticky");
    } else if (position > window.pageYOffset)  // Шапка должна отлипнуть?
    {
        header.classList.remove("sticky");
    }
}


window.addEventListener("scroll", header_logic);  // Привязка события при скроле
