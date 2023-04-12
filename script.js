const apiKey = '316a2931f446c93cb51c95a65d80c227';

const submitBtn = document.getElementById('submit-btn');
const cityInput = document.getElementById('city');
const weatherDiv = document.getElementById('weather');

submitBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();

  if (city === '') {
    alert('Please enter a city name');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
      const cityName = data.name;
      const country = data.sys.country;

      const weatherString = `${description}. 
                            Temperature is ${temp}°C.  
                            Humidity is ${humidity}%. 
                            Wind speed is ${windSpeed} m/s.`
      const locationString = `${cityName}, ${country}`;

      weatherDiv.innerHTML = `${weatherString} <br> <small>${locationString}</small>`;
    })
    .catch(error => {
        console.error(error);
        alert('Error retrieving weather data');
      });
  });
