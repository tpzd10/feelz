window.addEventListener("load", function() {
	// code
	loader = document.querySelector(".loader");
	setTimeout(function() {
		loader.className += " hidden";	
	}, 1000);
	
	lwwa = document.querySelector("#a1");
	lwwa.addEventListener("click", function() {
		alert("TEST6");
	})
	
	
});


