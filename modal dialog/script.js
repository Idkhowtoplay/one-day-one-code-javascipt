const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementById("close-modal"); 

openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.add("hidden");
    }
});