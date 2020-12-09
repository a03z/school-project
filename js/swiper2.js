var swiper = new Swiper(".swiper-container", {
	mousewheel: {
		sensitivity: 1,
		eventTarget: ".swiper-slide",
	},
	scrollbar: {
		el: ".swiper-scrollbar",
		hide: true,
		clickable: true,
	},
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	speed: 300,

	direction: "vertical",

	simulateTouch: false,
});
