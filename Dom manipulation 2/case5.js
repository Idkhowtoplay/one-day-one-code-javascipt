const btnSubmit = document.getElementById("btnSubmit");
const nama = document.getElementById("nama");
const email = document.getElementById("email");
const pesan = document.getElementById("pesan");

btnSubmit.addEventListener("click", () => {
    if (nama.value.trim() === "" || email.value.trim() === "") {
        pesan.textContent = "Nama dan email harus diisi!";
        pesan.style.color = "red";
    } else {
        pesan.textContent = `Halo ${nama.value}, email Anda adalah ${email.value}.`;
        pesan.style.color = "green";
    }
});