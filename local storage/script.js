const itemInput = document.getElementById("itemInput");
const btnAdd = document.getElementById("btnAdd");
const btnClear = document.getElementById("btnClear");
const shoppingList = document.getElementById("shoppingList");

function updateList() {
    shoppingList.innerHTML = "";
    const items = JSON.parse(localStorage.getItem("shoppingItems")) || [];
    items.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        shoppingList.appendChild(listItem);
    });
}

btnAdd.addEventListener("click", () => {
    const newItem = itemInput.value.trim();

    if(newItem !== "") {
        const items = JSON.parse(localStorage.getItem("shoppingItems")) || [];
        items.push(newItem);
        localStorage.setItem("shoppingItems", JSON.stringify(items));
        updateList();
        itemInput.value = "";
    } else {
        alert("Masukkan item belanja terlebih dahulu!");
    }
});

btnClear.addEventListener("click", () => {
    localStorage.removeItem("shoppingItems");
    updateList();
});

updateList();