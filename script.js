const share = document.getElementById("share");
const profile = document.getElementById("profile");
const footer = document.getElementById("footer");
const shareColor = document.getElementById("shareColor");
const shareButton = document.getElementById("shareButton");
const shareContainer = document.getElementById("shareContainer");

function showShare() {
  if (window.matchMedia("(max-width: 900px)").matches) {
    if (share.classList.contains("hidden")) {
      footer.classList.remove("bg-white");
      footer.classList.add("bg-dark");
      profile.classList.add("hidden");
      share.classList.remove("hidden");
      shareButton.classList.add("bg-white");
      shareContainer.classList.remove("w-2/12");
      shareContainer.classList.add("w-11/12");
    } else {
      footer.classList.remove("bg-dark");
      profile.classList.remove("hidden");
      share.classList.add("hidden");
    }
  } else {
    if (share.classList.contains("hidden")) {
      footer.classList.remove("bg-white");
      share.classList.remove("hidden");
      share.classList.add("bg-dark");
    } else {
      footer.classList.remove("bg-dark");
      profile.classList.remove("hidden");
      share.classList.add("hidden");
    }
  }
}
