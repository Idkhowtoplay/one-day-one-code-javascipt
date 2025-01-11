const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const chatBox = document.querySelector(".chat-box");

function addChatBubble(message, position = "right") {
    const bubble = document.createElement("div");
    bubble.classList.add("bubble", position);
    bubble.innerHTML = `<p>${message}</p>`;
    chatBox.appendChild(bubble);
    chatBox.scrollTop = chatBox.scrollHeight;
}

chatForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const message = chatInput.value.trim();
    if (message === "") return;

    addChatBubble(message, "right");

    setTimeout(() => {
        addChatBubble("Terimakasih atas pesan Anda!", "left");
    }, 1000);

    chatInput.value = "";
})