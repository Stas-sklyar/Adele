

var wow = new WOW(
    {
        boxClass: 'wow',      // класс, скрывающий элемент до момента отображения на экране (по умолчанию, wow)
        animateClass: 'wow', // класс для анимации элемента (по умолчанию, animated)
        offset: 210,          // расстояние в пикселях от нижнего края браузера до верхней границы элемента, необходимое для начала анимации (по умолчанию, 0)
        mobile: true,       // включение/отключение WOW.js на мобильных устройствах (по умолчанию, включено)
        live: true,       // поддержка асинхронно загруженных элементов (по умолчанию, включена)
        callback: function (box) {
            // функция срабатывает каждый раз при старте анимации
            // аргумент box — элемент, для которого была запущена анимация
        },
        scrollContainer: null // селектор прокручивающегося контейнера (опционально, по умолчанию, window)
    }
);
wow.init();


let wowElement = document.getElementsByClassName("wow");

for (let elem in wowElement) {
    wowElement[elem].classList.add("animate__animated", "animate__fadeInUp");
}