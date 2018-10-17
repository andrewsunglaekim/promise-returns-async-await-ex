const input = document.querySelector('.forecast__location-input');
const forecastView = new ForecastView();

input.addEventListener('keypress', async function(e) {
  if (e.keyCode === 13){
    console.log(e.target.value);
    getLatLng(e.target.value).then(({lat, lng}) => {
      getWeather({lat, lng}).then((weatherRes) => {
        const forecast = new Forecast(weatherRes.data);
        forecastView.setForecast(forecast)
      })
    })
  }
})

function getLatLng(location){
  return axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=<api-key-here>&location=${location}`)
    .then((res) => {
      return res.data.results[0].locations[0].latLng
    })
    .catch((err) => {
      console.log(err);
    });
}

function getWeather({lat, lng}){
  return axios.get(`https://api.darksky.net/forecast/<api-key-here>/${lat},${lng}`)
    .then(res => res)
    .catch((err) => {
      console.log(err);
    })
}
