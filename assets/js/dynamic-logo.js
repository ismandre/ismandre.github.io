console.log("Successfully loaded Dynamic Logo script!")
document.addEventListener("DOMContentLoaded", function () {
  const logos = [
    "/assets/img/ball.gif",
    "/assets/img/face.gif",
    "/assets/img/kampanel.gif",
    "/assets/img/laptop.gif"
  ];

  const randomLogo = logos[Math.floor(Math.random() * logos.length)];

  const avatarImg = document.querySelector("#avatar img");
  console.log("Picked logo" + avatarImg)
    
  if (avatarImg) {
    avatarImg.src = randomLogo;
    avatarImg.alt = "Dynamic Sidebar Logo";
  }
});

