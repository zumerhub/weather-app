export class WeatherData {
    constructor(cityName, description) {
      this.cityName = cityName;
      this.description = description;
      this.temperature = '';
    }
  }
  
  
  export const WEATHER_PROXY_HANDLER = {
    get: function (target, property) {
      return Reflect.get(target, property);
    },
    set: function(target, property, value) {
      const newValue = (value * 1.8 + 32).toFixed(2) + 'F.';
      return Reflect.set(target, property, newValue);
    }
  };


  // git@github.com:zumerhub/Real-Estate-Backend.git
  // https://github.com/zumerhub/Real-Estate-Backend.git