// Create function displayWeather()
function displayWeather() {
  fetch(
    ""
  )
    .then((response) => response.json())
    .then((data) => {
      const temp = parseInt(data.main.temp) + "°";
      const icon = data.weather[0].icon;
      document.getElementById("weather").innerHTML = `
              <img src="https://openweathermap.org/img/wn/${icon}@4x.png" width="100px" />
              <span>${temp}</span>`;
    })
    .catch((error) => {
      document.getElementById("weather").innerText = "Weather data unavailable";
      console.error("Error fetching weather data:", error);
    });
}

// use setTimeout to call displayTime() after a 1/10 second delay
setTimeout(displayWeather, 100);
// use setInterval to call displayTime() every second
setInterval(displayWeather, 1000);
