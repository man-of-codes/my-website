const yesBtn = document.getElementById("yesBtn");
const nooBtn = document.getElementById("noBtn");

// Yes button → confetti + message
yesBtn.addEventListener("click", () => {
  alert("I knew it ❤️ You’re my forever!");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.textContent = "🎉";
    confetti.style.position = "fixed";
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.top = Math.random() * window.innerHeight + "px";
    confetti.style.fontSize = "20px";
    confetti.style.animation = "fall 3s linear forwards";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
  setTimeout(() => {
    window.location.href = "valentine.html";
  }, 1000);  // small delay so confetti shows
});

// No button → runs away
noBtn.addEventListener("mousemove", () => {
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.position = "absolute";
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});

// Floating hearts
function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.style.left = Math.random() * window.innerWidth + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);