const profileMenu = document.getElementById("profileMenu");
const navImg = document.getElementById("navImg");
const sidebarActivity = document.getElementById("sidebarActivity");
let showMoreLink = document.getElementById("showMoreLink");

function toggleMenu() {
	profileMenu.classList.toggle("open-menu");
}

function showActivity() {
	sidebarActivity.classList.toggle("show-activity");

	if (sidebarActivity.classList.contains("show-activity")) {
		showMoreLink.innerHTML = "Show less <b>-</b>";
	} else {
		showMoreLink.innerHTML = "Show more <b>+</b>";
	}
}

//event listener
navImg.addEventListener("click", toggleMenu);

showMoreLink.addEventListener("click", showActivity);
