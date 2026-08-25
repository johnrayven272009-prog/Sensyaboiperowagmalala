const heartBtn = document.getElementById("heartBtn");
const response = document.getElementById("response");

heartBtn.addEventListener("click", function () {
    response.classList.remove("hidden");
    this.textContent = "💚 Thank you...";
    this.disabled = true;
});
