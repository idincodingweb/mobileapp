// JavaScript untuk Widget Cuaca
document.addEventListener('DOMContentLoaded', function() {
  fetchWeatherData();
});

function fetchWeatherData() {
  const apiKey = '57d7d5290314ae15dbae32926ef3a7bc';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=Karawang,ID&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      document.getElementById('temperature').textContent = `${data.main.temp}°C`;
      document.getElementById('description').textContent = data.weather[0].description;
      document.getElementById('location').textContent = data.name;
      updateWeatherIcon(data.weather[0].main.toLowerCase());
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

function updateWeatherIcon(condition) {
  const iconElement = document.getElementById('weather-icon');
  let iconSrc;
  if (condition.includes('clear')) {
    iconSrc = 'clear.png'; // Ganti dengan path ikon cuaca cerah Anda
  } else if (condition.includes('clouds')) {
    iconSrc = 'images/cloud.png'; // Ganti dengan path ikon cuaca mendung Anda
  } else if (condition.includes('rain')) {
    iconSrc = 'images/rain.png'; // Ganti dengan path ikon cuaca hujan Anda
  } else {
    iconSrc = 'images/snow.png'; // Ikon default jika kondisi cuaca tidak dikenali
  }
  iconElement.src = iconSrc;
  iconElement.alt = condition;
}

// Event listener untuk tombol 'Perbarui Cuaca'
document.querySelector('.btn-weather').addEventListener('click', fetchWeatherData);
