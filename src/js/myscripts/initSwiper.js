// Инициализация слайдера swiper
// https://swiperjs.com/

function initSwiper() {

	if (document.querySelector('.reviews-slider')) {
		const prodSliderInner = new Swiper('.reviews-slider', {
			spaceBetween: 20,
			slidesPerView: 1,
			loop: true,
			autoHeight: false,
			breakpoints: {
				600: {
					slidesPerView: 2,
					// pagination: false,
				},
			},
			pagination: {
				el: ".reviews-slider__pagination",
			},
		});
	};

	if (document.querySelector('.company-slider')) {
		const prodSliderInner = new Swiper('.company-slider', {
			spaceBetween: 16,
			slidesPerView: 2,
			loop: true,
			autoHeight: false,
			breakpoints: {
				600: {
					slidesPerView: 3,
					// pagination: false,
				},
				900: {
					slidesPerView: 4,
					// pagination: false,
				},
				1360: {
					slidesPerView: 5,
					// pagination: false,
				},
			},
			pagination: {
				el: ".company-slider__pagination",
			},
		});
	};

	// .portfolio-slider
	if ((document.querySelector('.portfolio-grid')) && (document.querySelector('.portfolio-slider')) && (document.querySelector('.portfolio-grid__box'))) {

		let windowWidth = window.innerWidth;

		if (windowWidth <= 768) {
			const portfolioGrid = document.querySelector('.portfolio-grid').cloneNode(true);

			// Есди клона еще нет, засовываем клон в нужное место, чтобы получить слайдер
			if (!document.querySelector('.portfolio-slider .portfolio-grid')) {
				document.querySelector('.portfolio-slider').prepend(portfolioGrid);
				portfolioGrid.classList.add('swiper-wrapper');
			};

			let portfolioSlider = new Swiper('.portfolio-slider', {
				spaceBetween: 20,
				slidesPerView: 1,
				loop: true,
				enabled: true,
				breakpoints: {
					500: {
						slidesPerView: 2,
					},
				},
			});

		};
	};

};

// window.addEventListener("resize", initSwiper);
window.addEventListener("resize", function () {
	// setTimeout(initSwiper, 200);
	initSwiper();
	// swiper.init();
});

initSwiper();


