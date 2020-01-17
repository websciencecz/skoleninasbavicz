[].forEach.call(document.getElementsByClassName("iframe-lightbox-link"), function(el) {
	el.lightbox = new IframeLightbox(el);
});

let buyBox = document.getElementById("my-buy-box");
if (buyBox) {
	let buyBoxContent = buyBox.querySelector(".content");
	let sticky = buyBox.offsetTop;

	window.addEventListener("scroll", () => {
		if (window.pageYOffset >= sticky) {
			buyBox.classList.add("sticky");
			buyBox.classList.remove("container");
			buyBoxContent.classList.add("container");
			buyBox.style.marginTop = "0px";
		} else {
			buyBox.classList.remove("sticky");
			buyBox.classList.add("container");
			buyBoxContent.classList.remove("container");
			buyBox.style.marginTop = "25px";
		}
	});
}

//Get the button
let mybutton = document.getElementById("myBtn");
let heightOfNav = document.getElementById("navbar").offsetHeight;

// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll", () => {
	if (document.body.scrollTop > heightOfNav || document.documentElement.scrollTop > heightOfNav) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
});
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
