import { parallax } from './parallax.js';
import { footerCover } from './footerCover.js';
import { fixed } from './parallax/fixed.js';
import { faqExpand } from './faqExpand.js';

function __init() {
	parallax();
	footerCover();
	fixed();
}

__init();

const platform = window.navigator?.userAgent;

const seeMore = document.querySelectorAll('.mobile-btn-img .faq-seemore');
const faqDesc = document.querySelectorAll('.mobile-btn-img .faq-body-desc');
const faqDescDesktop = document.querySelectorAll('.faq .faq-body-desc');
const faqDescContent = document.querySelectorAll('.faq .faq-body-content');



document.querySelectorAll(".mobile-btn-img .faq-seemore").forEach((item, index) => { // here
	item.addEventListener('click', arrow => {
		if (faqDesc[index].style.maxHeight) {
			faqDesc[index].style.maxHeight = null;


		} else {

			faqDesc[index].style.maxHeight = faqDesc[index].scrollHeight + "px";
		}

	})
})

document.querySelectorAll(".faq .faq-seemore").forEach((item, index) => { // here
	item.addEventListener('click', arrow => {
		console.log(faqDescDesktop[index].style.maxHeight, "max height");
		if (faqDescDesktop[index].style.maxHeight) {
			faqDescDesktop[index].style.maxHeight = null;


		} else {

			faqDescDesktop[index].style.maxHeight = faqDescDesktop[index].scrollHeight + "px";
		}


	})

})

const arrowContainer = document.querySelector('.arrow-down');
const video1Container = document.querySelector('.desktopView .video1-container');
const mobilevideo1Container = document.querySelector('.mobileView .video1-container');
const mobilevideo2Container = document.querySelector('.mobileView .video2-container');

const video2Container = document.querySelector('.desktopView .video2-container');

var click = false;
arrowContainer.addEventListener('click', function () {

	click = !click;
	if (click) {
		document.querySelector('.mobile-btn-img').style.top = "65vh";
		document.querySelector('.mobile-btn-img').style.height = "100vh";
		gsap.to('.mobile-btn-img', { top: 0 });
		gsap.to('.arrow-down', { duration: 0.9, scale: 0.5 });
		document.querySelector('.mobile-faq-container').style.marginTop = "90px"
		document.querySelector('.mobile-faq-innercontainer').style.display = "block";
		document.querySelector('body').style.overflowY = "hidden";
		ScrollTrigger.normalizeScroll(false);




	} else {

		gsap.to('.mobile-btn-img', {
			top: "65vh", onComplete: () => {
				document.querySelector('.mobile-btn-img').style.top = "initial"
				document.querySelector('.mobile-btn-img').style.height = "50%";
				ScrollTrigger.normalizeScroll(true);

			}
		});

		gsap.to('.arrow-down', { duration: 0.9, scale: 1 });
		document.querySelector('.mobile-faq-container').style.marginTop = "0px"
		document.querySelector('.mobile-faq-innercontainer').style.display = "none";
		document.querySelector('body').style.overflowY = "auto";




	}



})



mobilevideo1Container.addEventListener('click', function () {

	if (document.querySelector('.mobileView .video2').style.marginTop == '60%') {
		gsap.to('.mobileView .video2', { marginTop: '0%' });
		gsap.to('.video1-container .videoInnerText', { opacity: 0, visibility: 'hidden' });
	} else {
		gsap.to('.mobileView .video2', { marginTop: '60%' });
		gsap.to('.video1-container .videoInnerText', { opacity: 1, visibility: 'visible' });
	}


});


mobilevideo2Container.addEventListener('click', function () {

	if (document.querySelector('.mobile-btn-img').style.marginTop == '100vh') {
		gsap.to('.mobile-btn-img', { marginTop: '0' });
		gsap.to('.video2-container .videoInnerText', { opacity: 0, visibility: 'hidden' });
	} else {
		gsap.to('.mobile-btn-img', { duration: 1, marginTop: '100vh' });
		gsap.to('.video2-container .videoInnerText', { opacity: 1, visibility: 'visible' });
	}


});

mobilevideo1Container.addEventListener('mouseleave', function () {
	gsap.to('.mobileView .video2', { marginTop: '0%' });

	gsap.to('.video1-container .videoInnerText', { opacity: 0, visibility: 'hidden' });


});

video1Container.addEventListener('mouseover', function () {

	gsap.to('.desktopView .video1', { paddingLeft: '30px' });
	gsap.to('.desktopView .video2', { paddingTop: '140px' });
	gsap.to('.video1 img', { borderBottomLeftRadius: '24px' });
	gsap.to('.video1-container .videoInnerText', { opacity: 1, visibility: 'visible' });
	// if (document.querySelector('.video').style.zIndex == 20) {
	// 	const tl = gsap.timeline();
	// 	document.querySelector('body').style.overflowY = "auto";
	// 	document.querySelector('.linkBtn1').style.marginRight = "30px"
	// 	document.querySelector('.linkBtn2').style.marginRight = "30px"
	// 	document.querySelector('.video').style.background = "black";
	// 	document.querySelector('.video').style.zIndex = 3;

	// 	tl.to('.bg', { width: '100%' }, '<');
	// 	tl.to('.video', { x: '0' }, '<');
	// 	tl.to('.faq .cover-text', { y: 0 }, '<');
	// 	tl.to('.faq-content', { opacity: 0, visibility: "hidden" }, '<-1');
	// 	tl.to('.faq', { width: "auto" }, '<');
	// 	tl.to('.faq .cover-arrow', { opacity: 1 }, '<');
	// 	tl.to('.cover', { display: 'none' }, '<');
	// 	tl.to('.faq-close', { opacity: 0, zIndex: -1 }, '<');

	// }


});

video1Container.addEventListener('mouseleave', function () {

	gsap.to('.desktopView .video1', { paddingLeft: '0px' });
	gsap.to('.desktopView .video2', { paddingTop: '0px' });
	gsap.to('.mobileView .video2', { marginTop: '0px' });
	gsap.to('.video1 img', { borderBottomLeftRadius: '0px' });

	gsap.to('.video1-container .videoInnerText', { opacity: 0, visibility: 'hidden' });
});

video2Container.addEventListener('mouseover', function () {
	gsap.to('.video2', { paddingLeft: '30px', paddingBottom: '140px' });

	gsap.to('.video2-container .videoInnerText', { opacity: 1, visibility: 'visible' });
	gsap.to('.video2 img', { borderBottomLeftRadius: '24px' });


});

video2Container.addEventListener('mouseleave', function () {

	gsap.to('.video2', { paddingLeft: '0', paddingBottom: '0' });

	gsap.to('.video2-container .videoInnerText', { duration: 0.5, opacity: 0, visibility: 'hidden' });
	gsap.to('.video2 img', { borderBottomLeftRadius: '0px' });
});
