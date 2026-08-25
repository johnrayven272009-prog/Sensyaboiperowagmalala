// 🎵 MUSIC CONTROLS — Jeff Buckley 💛
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');

musicBtn.addEventListener('click', function() {
    if (bgMusic.paused) {
        bgMusic.volume = 0.25;
        bgMusic.play();
        this.innerText = "🎶 Playing... Jeff Buckley 💛";
    } else {
        bgMusic.pause();
        this.innerText = "🎵 Play: Lover, You Should've Come Over 💛";
    }
});

// 💛 MESSAGE BUTTON
document.getElementById('heartBtn').addEventListener('click', function() {
    document.getElementById('response').style.display = 'block';
    this.innerText = "💛 Thank you...";
    this.disabled = true;
});

