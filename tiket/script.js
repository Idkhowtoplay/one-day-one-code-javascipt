const movies = [
    {
        title: "The Grand Adventure",
        price: 50000,
        description: "Film petualangan epik tentang eksplorasi dunia baru"
    },
    {
        title: "Romantic Escape",
        price: 45000,
        description: "Kisah cinta yang ,engharukan di tengah perjalanan."
    },
    {
        title: "Mystery Chronicles",
        price: 60000,
        description: "Film penuh misteri dengan akhir yang mengejutkan."
    },
    {
        title: "Action Heroes",
        price: 55000,
        description: "Aksi tanoa henti dengan pahlawan yang luar biasa."
    }
];

const movieList = document.getElementById("movie-list");
const orderSummary = document.getElementById("order-summary");
const movieTitle = document.getElementById("movie-title");
const ticketQuantity = document.getElementById("ticket-quantity");
const totalPrice = document.getElementById("total-price");
const confirmOrderButton = document.getElementById("confirm-order");

movies.forEach((movie, index) => {
    const movieDiv = document.createElement("div");
    movieDiv.classList.add("movie");
    movieDiv.innerHTML = `
        <h3>${movie.title}</h3>
        <p>${movie.description}</p>
        <p><strong>Harga:</strong> Rp ${movie.price.toLocaleString()}</p>
        <button onclick="orderMovie(${index})">Pesan</button>
        `;
        movieList.appendChild(movieDiv);
});

function orderMovie(index) {
    const selectedMovie = movies[index];
    const quantity = prompt("Masukkan jumlah tiket yang ingin dipoesan:", 1);

    if (quantity > 0) {
        const total = quantity * selectedMovie.price;

        movieTitle.textContent = `Film: ${selectedMovie.title}`;
        ticketQuantity.textContent = quantity;
        totalPrice.textContent = `Rp ${total.toLocaleString()}`;

        orderSummary.classList.remove("hidden");
    } else {
        alert("Masukkan jumlah tiket yang valid!");
    }
}

confirmOrderButton.addEventListener("click", () => {
    alert("Pesanan Anda Telah dikonfirmasi! Terima Kasih.");
    orderSummary.classList.add("hidden");
});