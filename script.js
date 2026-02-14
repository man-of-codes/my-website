const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

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
});

// No button → runs away
noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * 200) - 100;
  const y = Math.floor(Math.random() * 100) - 50;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
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