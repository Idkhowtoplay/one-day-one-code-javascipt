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

function redrawCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const action of history) {
        ctx.strokeStyle = action.color;
        ctx.lineWidth = action.lineWidth;
        ctx.fillStyle = action.color;

        if (action.type === "line") {
            ctx.beginPath();
            ctx.moveTo(action.startX, action.startY);
            ctx.lineTo(action.endX, action.endY);
            ctx.stroke();
        } else if (action.type === "circle") {
            ctx.beginPath();
            ctx.arc(action.x, action.y, action.radius, 0, Math.PI * 2);
            ctx.fill();
        } else if (action.type === "rectangle") {
            ctx.fillRect(action.x, action.y, action.width, action.height);
        }
    }
}

canvas.addEventListener("mousedown", (e) => {
    if (tool === "circle") {
        const action = {
            type: "circle",
            x: e.offsetX,
            y: e.offsetY,
            radius: 50,
            color: colorPicker.value,
        };
        history.push(action);
        redoStack = [];
        redrawCanvas();
    } else if (tool === "rectangle") {
        const action = {
            type: "rectangle",
            x: e.offsetX,
            y: e.offsetY,
            width: 100,
            height: 50,
            color: colorPicker.value,
        };
        history.push(action);
        redoStack = [];
        redrawCanvas();
    } else {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }
});

canvas.addEventListener("mousemove", (e) => {
    if (!isDrawing || tool !== "draw") return;

    const action = {
        type: "line",
        startX: lastX,
        startY: lastY,
        endX: e.offsetX,
        endY: e.offsetY,
        color: colorPicker.value,
        lineWidth: lineWidthInput.value,
    };
    history.push(action);
    redoStack = [];
    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = lineWidthInput.value;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

undoButton.addEventListener("click", () => {
    if (history.length === 0) return;
    redoStack.push(history.pop());
    redrawCanvas();
});

redoButton.addEventListener("click", () => {
    if (redoStack.length === 0) return;
    history.push(redoStack.pop());
    redrawCanvas();
});

clearButton.addEventListener("click", () => {
    history = [];
    redoStack = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

downloadButton.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "gambar_canvas.png";
    link.href = canvas.toDataURL();
    link.click();
});

circleTool.addEventListener("click", () => (tool = "circle"));
rectangleTool.addEventListener("click", () => (tool = "rectangle"));
