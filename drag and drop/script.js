const draggableItem = document.getElementById("draggable-item");
const dropArea = document.getElementById("drop-area");

draggableItem.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);
});

dropArea.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropArea.style.borderColor = "#2ecc71";
});

dropArea.addEventListener("dragleave", () => {
    dropArea.style.borderColor = "#acc";
});

dropArea.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text/plain");
    const draggableElement = document.getElementById(id);
    dropArea.childNodes.forEach((node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            node.remove(); 
        }
    });
    dropArea.appendChild(draggableElement);
    dropArea.style.borderColor = "#ccc";
});