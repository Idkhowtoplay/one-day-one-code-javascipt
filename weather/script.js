const searchButton = document.getElementById("searchButton");
const locationInput = document.getElementById("locationInput");
const weatherResult = document.getElementById("weatherResult");

async function getWeather(latitude, longitude) {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
        );
        const data = await response.json();

        if (data.current_weather) {
            const { temperature, windspeed, weathercode } = data.current_weather;
            weatherResult.innerHTML = `
            <h2>Cuaca saat ini </h2>
            <p><strong>Suhu:</strong> ${temperature}°C</p>
            <p><strong>Kecepatan Angin:</strong> ${windspeed} km/h</p>
            <p><strong>Kode Cuaca:</strong> ${weathercode}</p>
            `;
        } else {
            weatherResult.innerHTML = `<p>Data cuaca tidak tersedia.</p>`;
        }
    } catch (error) {
        weatherResult.innerHTML = `<p>Terjadi kesalahan: ${error.message}</p>`;
    }
}

async function searchWeather() {
    const location = locationInput.value.trim();
    if (!location) {
        alert("Harap masukkan nama kota atau koordinat");
        return;
    }

    const coordinateRegex = /^-?\d+(\.\d+)?,-?\d+(\.\d+)?$/;
    if (coordinateRegex.test(location)) {
        const [latitude, longitude] = location.split(",").map(Number);
        getWeather(latitude, longitude);
        return;
    }   

    try {
        const geocodingResponse = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
        );
        const geocodingData = await geocodingResponse.json();

        if(geocodingData.results && geocodingData.results.length > 0) {
            const { latitude, longitude } = geocodingData.results[0];
            getWeather(latitude, longitude);
        } else {
            weatherResult.innerHTML = `<p>Lokasi tidak ditemukan. Harap periksa nama kota.</p>`;
        }
    } catch (error) {
        weatherResult.innerHTML = `<p>Terjadi kesalahan saat mencari lokasi: ${error}</p>`;
    }
}

searchButton.addEventListener("click", searchWeather);

