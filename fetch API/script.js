btnFetch.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            userList.innerHTML = "";
            data.forEach((user) => {
                const listItem = document.createElement("li");
                listItem.textContent = `${user.name} (${user.email}) - ${user.address.city}`;
                userList.appendChild(listItem);
            });
        })
        .catch((error) => {
            console.error("Terjadi kesalahan:", error);
        });
});