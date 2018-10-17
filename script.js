const input = document.querySelector('.forecast__location-input');
const forecastView = new ForecastView();

input.addEventListener('keypress', async function(e) {
  if (e.keyCode === 13){
    console.log(e.target.value);
    const forecast = new Forecast({
      currently: {
        temperature: 59,
        summary: 'Rainy',
        icon: 'rain'
      }
    })
    forecastView.setForecast(forecast)
  }
})
