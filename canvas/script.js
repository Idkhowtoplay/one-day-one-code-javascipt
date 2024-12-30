const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
const clearButton = document.getElementById("clearCanvas");
const colorPicker = document.getElementById("colorPicker");
const lineWidthInput = document.getElementById("lineWidth");
const undoButton = document.getElementById("undo");
const redoButton = document.getElementById("redo");
const circleTool = document.getElementById("circleTool");
const rectangleTool = document.getElementById("rectangleTool");
const downloadButton = document.getElementById("downloadCanvas");

let tool = "draw";
let history = [];
let redoStack = [];
let isDrawing = false;
let lastX = 0;
let lastY = 0;

function saveState() {
    history.push(canvas.toDataURL());
    if (history.length > 10) history.shift();
    redoStack = [];
}

canvas.addEventListener("mousedown", (e) => {
    if (tool === "draw") {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        saveState();    
    }
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing || tool !== "draw") return;

    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = lineWidthInput.value;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

undoButton.addEventListener("click", () => {
    if (history.length === 0) return;
    redoStack.push(history.pop());
    const imgData = new Image();
    const lastState = history[history.length - 1];
    if (lastState) {
        imgData.src = lastState;
        imgData.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(imgData, 0, 0);
        }
    } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});

redoButton.addEventListener("click", () => {
    if (redoStack.length === 0) return;
    const redoState = redoStack.pop();
    history.push(redoState);
    const imgData = new Image();
    imgData.src = redoState;
    imgData.onload = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(imgData, 0, 0);
    }
});

canvas.addEventListener("mousedown", (e) => {
    if (tool === "circle") {
        saveState();
        const radius = 50;
        ctx.beginPath();
        ctx.arc(e.offsetX, e.offsetY, radius, 0, Math.PI * 2);
        ctx.fillStyle = colorPicker.value;
        ctx.fill();
    }
});

canvas.addEventListener("mousedown", (e) => {
    if (tool === "rectangle") {
        saveState();
        const width = 100;
        const height = 50;
        ctx.fillStyle = colorPicker.value;
        ctx.fillRect(e.offsetX, e.offsetY, width, height);
    }
})

downloadButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "gambar_canvas.png";
    link.href = canvas.toDataURL();
    link.click();
})

clearButton.addEventListener("click", () => {
    saveState();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));
circleTool.addEventListener("click", () => tool = "circle");
rectangleTool.addEventListener("click", () => tool = "rectangle");