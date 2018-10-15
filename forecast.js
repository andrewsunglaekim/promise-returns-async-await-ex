class Forecast {
  constructor(forecastRes) {
    this.lat = forecastRes.latitude;
    this.lng = forecastRes.longitude;
    this.temperature = forecastRes.currently.temperature;
    this.summary = forecastRes.currently.summary;
    this.iconId = forecastRes.currently.icon;
  }
}
