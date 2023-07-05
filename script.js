function gotoGithubAccount() {
	window.location.href = "https://github.com/sidgames5/";
}
function gotoYoutubeChannel() {
	window.location.href = "https://youtube.com/@sidgames5";
}
function gotoTwitterPage() {
	window.location.href = "https://twitter.com/sidgames101";
}
function gotoGamesPage(from) {
	switch (from) {
		case "home":
			window.location.href = "games/";
			break;
	}
}
function goHome(num) {
	switch (num) {
		case 1:
			window.location.href = "../";
			break;
	}
}
function gotoDiscordServer() {
	window.location.href = "https://discord.com/invite";
}
function gotoSoundSpace() {
	window.location.href = "https://keystone-games.github.io/soundspace/";
}
function gotoProjectsPage(from) {
	switch (from) {
		case "home":
			window.location.href = "projects/";
			break;

		default:
			break;
	}
}
function gotoProject(name) {
	switch (name) {
		case "codeMatrix":
			window.location.href = "../codematrix/";
			break;
	}
}
function forceHome() {
	window.location.href = "https://sidgames5.github.io/";
}

var i = 0;
var txt =
	"This is the typewriter effect. I totally didn't steal this code from w3schools."; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("typewriter").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}
typeWriter();

// var fixedTop = $(".fixed").offset().top;

// $(window).scroll(function () {

// 	var currentScroll = $(window).scrollTop();

// 	if (currentScroll >= fixedTop) {
// 		$(".fixed").css({
// 			position: "fixed",
// 			top: "0px"
// 		});
// 	}

// });
