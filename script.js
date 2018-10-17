const input = document.querySelector('.forecast__location-input');
const forecastView = new ForecastView();

input.addEventListener('keypress', async function(e) {
  if (e.keyCode === 13){
    const latLng = await getLatLng(input.value)
    const getWeatherRes = await getWeather(latLng)
    const forecast = new Forecast(getWeatherRes.data)
    forecastView.setForecast(forecast)
  }
})

async function getLatLng(location){
  try {
    const res = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=<api-key-here>&location=${location}`);
    return res.data.results[0].locations[0].displayLatLng;
  } catch (err) {
    throw new Error(err);
  }
}

async function getWeather({lat, lng}){
  try {
    const res = await axios.get(`https://api.darksky.net/forecast/<api-key-here>/${lat},${lng}`)
    return res;
  } catch (err) {
    throw new Error(err);
  }
}
