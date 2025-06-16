// assets/js/custom.js
console.log("Custom JS is running!")
document.addEventListener("DOMContentLoaded", function () {
  // list your possible avatars
  const avatars = [
    "/assets/img/avatar1.jpg",
    "/assets/img/avatar2.gif",
    "/assets/img/avatar3.png"
  ];

  // pick one at random
  const chosen = avatars[Math.floor(Math.random() * avatars.length)];
  console.log("Chosen: " + chosen)

  // find the <a id="avatar"> element
  const avatarAnchor = document.getElementById("avatar");
  if (avatarAnchor) {
    // set as CSS background-image
    avatarAnchor.style.backgroundImage = `url('${chosen}')`;
  }
});

