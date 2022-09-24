const mode_light = "./css/mode/light.css";
const mode_dark = "./css/mode/dark.css";

let mode = document.getElementById("theme");


document.getElementById("switch_mode").onclick = function ()  // Переключение темы при нажатии на кнопку
{
    theme.href = (theme.getAttribute("href") === mode_dark)?mode_light:mode_dark;
}


if (window.matchMedia('(prefers-color-scheme: dark)').media === 'not all')
{
    mode.href = mode_light;
} else
{
    mode.href = mode_dark;
}

console.log(mode.href);
