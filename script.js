const share = document.getElementById("share");
const profile = document.getElementById("profile");
const footer = document.getElementById("footer");
const shareColor = document.getElementById("shareColor");
const shareButton = document.getElementById("shareButton");

function showShare() {
if(window.matchMedia("(max-width: 600px)").matches){

    if (share.classList.contains("hidden")) {
        footer.classList.add("bg-white");
        footer.classList.add("bg-dark");
        profile.classList.add("hidden");
        share.classList.remove("hidden");
        shareButton.classList.add("bg-white");
    } else {
        footer.classList.remove("bg-dark");
        profile.classList.remove("hidden");
        share.classList.add("hidden");
    }
}
else{
    share.classList.add("bg-dark");
    share.add
}
}
