

document.addEventListener('DOMContentLoaded', function () {
  const input = document.querySelector('#cityInput');
  const button = document.querySelector('#Btn');

  async function submitButton(event) {
    event.preventDefault(); 

    const inputValue = input.value;

    const apiKey = "597c40c39084687093b091cd48b366f8";
    const city = inputValue;

    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      console.log(data,"this is the data===============>")
  

      const weatherDataContainer = document.getElementById('weatherData');
      weatherDataContainer.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>${data.weather[0].icon}</p>
      `;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  button.addEventListener('click', submitButton);
});

