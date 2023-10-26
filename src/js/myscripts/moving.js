// функция будет перемещать блок в указанное место при определенной ширине экрана

let moving = function () {

    const windowWidth = window.innerWidth; // ширина экрана
    // console.log(windowWidth);

    if (windowWidth <= 600) {
        document.querySelector('.mobile-menu__wrapper').prepend(document.querySelector('.header-menu'));
    } else {
        document.querySelector('.header-nav').append(document.querySelector('.header-menu'));
    };
};

moving();
window.addEventListener('resize', moving);