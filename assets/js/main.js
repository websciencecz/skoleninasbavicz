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

// window.addEventListener('load', function (){
// 	// Create an instance of the Stripe object with your publishable API key
// 	var stripe = Stripe("pk_test_51HdBCNGg1BhZ64vx4A6PbkDfylmHDvnyXERjGs2sI7ZVliQ6tcHvcWQm6M597K0jvdkzv5BVfyx8n46ARtgLcpxy00wbR0XjM1");
// 	var checkoutButton = document.getElementById("checkout-button");
// 	checkoutButton.addEventListener("click", function () {
// 		fetch("http://payments.skoleninasbavi.cz.test/create-session", {
// 			method: "POST",
// 		})
// 			.then(function (response) {
// 				return response.json();
// 			})
// 			.then(function (session) {
// 				return stripe.redirectToCheckout({ sessionId: session.id });
// 			})
// 			.then(function (result) {
// 				// If redirectToCheckout fails due to a browser or network
// 				// error, you should display the localized error message to your
// 				// customer using error.message.
// 				if (result.error) {
// 					alert(result.error.message);
// 				}
// 			})
// 			.catch(function (error) {
// 				console.error("Error:", error);
// 			});
// 	});
// });

