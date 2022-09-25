document.querySelectorAll("header nav button").forEach( but => {
	but.addEventListener("click", event => {  // Перемотка к заданному блоку
			console.log(event, event.target.value);
			if (event.target.value) {
				console.log("---");
				let header = document.getElementsByTagName("header")[0];
				window.scrollTo(
					0,
					document.getElementById(event.target.value).offsetTop - header.offsetHeight - 10
				);
			}
		}
	);
});
