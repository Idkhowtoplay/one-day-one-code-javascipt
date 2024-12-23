const formRegistrasi = document.getElementById("formRegistrasi");

formRegistrasi.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");

    const errorUsername = document.getElementById("errorUsername");
    const errorEmail = document.getElementById("errorEmail");
    const errorPassword = document.getElementById("errorPassword");
    const errorConfirmPassword = document.getElementById("errorConfirmPassword");

    errorUsername.textContent = "";
    errorEmail.textContent = "";
    errorPassword.textContent = "";
    errorConfirmPassword.textContent = "";

    let isValid = true;

    if (username.value.trim() === "") {
        errorUsername.textContent = "Nama pengguna tidak boleh kosong.";
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email.value)) {
        errorEmail.textContent = "Masukkan email yang valid";
        isValid = false;
    }

    const passwordPattern = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordPattern.test(password.value)) {
        errorPassword.textContent = "Kata sandi harus memiliki minimal 6 karakter, mengandung huruf besar dan angka.";
        isValid = false;
    }

    if (confirmPassword.value !== password.value) {
        errorConfirmPassword.textContent = "Konfirmasi kata sandi harus sama";
        isValid = false;
    }

    if (isValid) {
        alert("Form berhasil dikirim!");
        formRegistrasi.reset();
    }
});