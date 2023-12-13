document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#cityInput");
  const button = document.querySelector("#Btn");
  const weatherDataContainer = document.getElementById("weatherData");

  async function submitButton(event) {
    event.preventDefault();

    const inputValue = input.value;

    const city = inputValue;

    const apiKey = "597c40c39084687093b091cd48b366f8";

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`,
      );
      const data = await response.json();
      if (response.ok) {
        const iconUrl = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

        weatherDataContainer.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <img src="${iconUrl}" alt="Weather Icon">
     
        
      `;
      } else {
        if (response.status === 404) {
          weatherDataContainer.innerHTML = `<p>Error: City not found</p>`;
        } else {
          weatherDataContainer.innerHTML = `<p>Error: ${data.message}</p>`;
        }
      }
    } catch (error) {
      weatherDataContainer.innerHTML = `<p>Error fetching weather data: ${error.message}</p>`;
    }
  }

  button.addEventListener("click", submitButton);
});
