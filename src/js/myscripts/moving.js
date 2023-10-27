// функция будет перемещать блок в указанное место при определенной ширине экрана

let moving = function () {

    const windowWidth = window.innerWidth; // ширина экрана
    // console.log(windowWidth);

    // перемещение меню
    if (windowWidth <= 600) {
        document.querySelector('.mobile-menu__wrapper').prepend(document.querySelector('.header-menu'));
    } else {
        document.querySelector('.header-nav').append(document.querySelector('.header-menu'));
    };

    // перемещение копирайта
    if (windowWidth <= 600) {
        document.querySelector('.footer-col__03').append(document.querySelector('.footer-box__copy'));
    } else {
        document.querySelector('.footer-col__01').append(document.querySelector('.footer-box__copy'));
    };

    // перемещение footer-contacts
    if (windowWidth <= 600) {
        document.querySelector('.footer-col__01').append(document.querySelector('.footer-contacts'));
    } else {
        document.querySelector('.footer-col__03').prepend(document.querySelector('.footer-contacts'));
    };
};

moving();
window.addEventListener('resize', moving);