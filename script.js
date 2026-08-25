// 🎵 MUSIC CONTROLS
const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async function () {
    if (bgMusic.paused) {
        try {
            bgMusic.volume = 0.25;

            await bgMusic.play();

            this.textContent = "🎶 Playing... Jeff Buckley 💚";
        } catch (error) {
            console.error("Audio playback failed:", error);
            this.textContent = "❌ Song couldn't play";
        }
    } else {
        bgMusic.pause();
        this.textContent = "🎵 Play: Lover, You Should've Come Over 💚";
    }
});


// 💚 MESSAGE BUTTON
const heartBtn = document.getElementById("heartBtn");
const response = document.getElementById("response");

heartBtn.addEventListener("click", function () {
    response.classList.remove("hidden");
    this.textContent = "💚 Thank you...";
    this.disabled = true;
});
