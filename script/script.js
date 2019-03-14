window.onload = function() {
	var btn = document.getElementById("btn").onclick = aaa;

	function aaa() {
		var menu = document.getElementById("header__top-menu");
		menu.classList.toggle("show");
		this.classList.toggle("active");
	}
}