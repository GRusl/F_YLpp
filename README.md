# Творческое задание Фронтенд YL++ 22/23

---

[demo](https://grusl.github.io/F_YLpp/)


## Стартовый блок

Блок `div#start-block` размером во весь экран и фоновым 
изображением (растянутым по высоте и продублированным по ширине)
Необходим для придание странице более индивидуального характера)


## Прилипающая шапка

### header

Сама шапка с иконкой и функциональными кнопками (смена темы и 
быстрое переключение мужду разделами)

### div#header

Заменитель шапки. Т.к после прилипания шапки страница теряет 
длинну равную высоте шапки, то происходит резский скачек и 
часть контента оказывается под шакой. Однако за счет данного 
блока происходит компинсация утраты высоты шапки.


## Основной блок

Содержит блоки (секции) `section` которые служат для хранения 
тематической информации. В каждом из блоков содержание указанно
в индивидуальном формате (если не учитывать их 
табличное расположение).
Табличная структура некоторых секций предусматривает адаптацию 
под мобильные устройства. Для этого присваевается дополнительный 
класс `.adaptive` (данного класса нет у сертификатов т.к они 
теряют центрирование)


## footer

Контакты и самореклама. ~~Ничего лишнего~~


## Отличия от проекта со вступительных прошлого года

Раз, на своей странице, я упомянул старое творческое задание, то
пожалуй распишу что изменилось:

* Проект написан с нуля (т.к появились новые знания)
* Переработано оформление
* Тема по умолчанию соответствует браузерной
* Каждая секция имеет индивидуальное оформление
* Убраны страшные элементы (таймер в шапке и 
окно месонжера с заранее прописанным диалогом)
* Стилизованный скролбар
* Более продуманный подход к смене темы
* Улучшена адаптация под мобильные устройства
