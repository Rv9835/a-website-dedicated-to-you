function playMusic() {
  var music = document.getElementById("love-song");
  music.play();
  alert("Enjoy our special song, Shweta! ❤️");
}

// Create floating hearts
const createHeart = () => {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");

  // Random position
  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s"; // 3 to 6 seconds

  document.body.appendChild(heart);

  // Remove heart after animation
  heart.addEventListener("animationend", () => {
    heart.remove();
  });
};

// Create hearts every 1 second
setInterval(createHeart, 1000);
