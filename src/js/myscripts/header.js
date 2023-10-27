const headerFixed = function () {
	if (document.querySelector(".header")) {
		const header = document.querySelector(".header");

		let heightHeader = header.offsetHeight; // высота хедера


		header.parentElement.style.paddingTop = heightHeader + "px"; // даем родителю нужный отступ
	}
};

headerFixed();
// запускаем headerFixed при ресайзе
window.addEventListener("resize", headerFixed);

// при прокрутке даем хедеру клаасс toogle для фиксации
const headerToggle = function () {
	if (document.querySelector(".header")) {
		const header = document.querySelector(".header");

		if (window.scrollY > 0) {
			header.classList.add("toogle");
		} else {
            header.classList.remove("toogle");
        };
	}
};

headerToggle();
// запускаем headerFixed при ресайзе
window.addEventListener("scroll", headerToggle);
