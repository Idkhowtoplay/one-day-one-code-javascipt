const taskList = document.getElementById("taskList");
const inputItem = document.getElementById("inputItem");
const btnAdd = document.getElementById("btnAdd");

btnAdd.addEventListener("click", () => {
    const tugasBaru = inputItem.value.trim();
    if (tugasBaru !== "") {
        const itemBaru = document.createElement("li");
        itemBaru.textContent = tugasBaru;

        const btnClear = document.createElement("button");
        btnClear.textContent = "Hapus";
        btnClear.style.marginLeft = "10px";

        btnClear.addEventListener("click", () => {
            if (confirm("Apakah anda yakin ingin menghapus item ini?")) {
                taskList.removeChild(itemBaru);
            }
        });

        itemBaru.appendChild(btnClear);
        taskList.appendChild(itemBaru);
        inputItem.value = "";
    }
});

taskList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete")) {
        if (confirm("Apakah anda yakin ingin menghapus tugas ini?")) {
            const listItem = event.target.parentElement;
            listItem.remove();
        }
    }
});