class ForecastIcon {
  constructor(type) {
    this.icons = new Skycons();
    const iconEl = document.createElement('canvas')
    iconEl.id = type;
    iconEl.className = 'forecast__icon'
    iconEl.width = 128;
    iconEl.height = 128;
    this.type = type;
    this.iconEl = iconEl;
  }

  play() {
    this.icons.set(this.type, this.type);
    this.icons.play();
  }
}
