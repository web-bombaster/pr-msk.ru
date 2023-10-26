const headerFixed = function() {
    if (document.querySelector('.header')) {
        const header = document.querySelector('.header');
        const heightHeader = header.offsetHeight; // высота хедера
        
        let padTop = 0;
        padTop = parseInt(window.getComputedStyle(header.parentElement, null).getPropertyValue('padding-top')); // padding-top родителя
        
        header.parentElement.style.paddingTop = heightHeader + padTop + 'px'; // даем родителю нужный отступ
    };
};

headerFixed();
// запускаем headerFixed при ресайзе
window.addEventListener("resize", headerFixed);