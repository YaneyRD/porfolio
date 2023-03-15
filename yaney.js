var button = document.querySelector("span");
button.addEventListener("click", () => {
    button.innerHTML = `<div class="loading-1">Sending</div>`;
    setTimeout(() => {
        button.innerText = "Done";
    }, 5000);
});