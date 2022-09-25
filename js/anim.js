const anim_items = document.querySelectorAll(".anim-items");  // Получение всех элементов для анимации

const start = 6;  // k старта


function ofset(el)  // Получение значений позиции
{
    const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    return {
        top: rect.top + scrollTop,
        left: rect.left + scrollLeft
    }
}


function anim_scroll()  // Анимация при скроле
{
    for (let i=0; i < anim_items.length; i++)  // Перебор всех (ранее найденых) элементов
    {
        anim_item = anim_items[i];

        const height = anim_item.offsetHeight;
        const offset = ofset(anim_item).top;

        let anim_item_point = window.innerHeight - height / start;
        if (height > window.innerHeight)
        {
            anim_item_point = height - window.innerHeight / start;
        }

        if ((pageYOffset > offset - anim_item_point) && (pageYOffset < offset + height))
        {
            anim_item.classList.add("_active");  // Класс для воспроизведения анимации
        }
    }

}


window.addEventListener("scroll", anim_scroll);  // Привязка события
