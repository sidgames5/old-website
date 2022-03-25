function gotoGithubAccount() {
  window.location.href = "https://github.com/basiccorruption/";
}
function gotoYoutubeChannel() {
  window.location.href = "https://youtube.com/sidgames5";
}
function gotoTiktokChannel() {
  window.location.href = "https://tiktok.com/@sidgames5";
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
      window.location.href = "../codematrix/"
      break;
  }
}
