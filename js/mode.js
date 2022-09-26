const mode_light = "./css/mode/light.css";
const mode_dark = "./css/mode/dark.css";

let mode = document.getElementById("theme");


// Переключение темы при нажатии на кнопку
document.getElementById("switch_mode").onclick = function ()
{
    mode.href = (mode.getAttribute("href") === mode_dark)?mode_light:mode_dark;
}


// Устанавливаем тему как в браузере
mode.href = (window.matchMedia("(prefers-color-scheme: dark)").media === "not all")?mode_light:mode_dark;

console.log(mode.href);
