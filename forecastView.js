class ForecastView {
  constructor() {
    this.forecastEl = document.querySelector('.forecast__forecast-view')
  }

  // empties the views contents and renders a different one based on forecast
  setForecast(forecast) {
    this.emptyEl()
    this.forecast = forecast;
    this.render();
  }

  emptyEl() {
    while (this.forecastEl.firstChild) {
      this.forecastEl.removeChild(this.forecastEl.firstChild);
    }
  }

  // renders the forecast
  render() {
    const summaryEl = this.createParagraph('forecast__forecast-summary', this.forecast.summary);
    const tempEl = this.createParagraph('forecast__forecast-temperature', `${this.forecast.temperature.toFixed(0)} &#176;F`);
    const icon = new ForecastIcon(this.forecast.iconId);
    this.forecastEl.appendChild(summaryEl);
    this.forecastEl.appendChild(icon.iconEl);
    this.forecastEl.appendChild(tempEl);
    icon.play();
  }

  // returns a paragraph element with class and content parameters
  createParagraph(className, content) {
    const p = document.createElement('p')
    p.className = className;
    p.innerHTML = content;
    return p;
  }
}
