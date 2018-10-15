class ForecastIcon {
  constructor(type) {
    this.icons = new Skycons();
    const iconEl = document.createElement('canvas')
    iconEl.id = type;
    iconEl.className = 'forecast__icon'
    iconEl.width = 64;
    iconEl.height = 64;
    this.type = type;
    this.iconEl = iconEl;
  }

  play() {
    this.icons.set(this.type, this.type);
    this.icons.play();
  }
}
