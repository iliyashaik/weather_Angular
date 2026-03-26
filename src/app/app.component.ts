import { Component } from '@angular/core';
import {api} from './services/api.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather-Desktop-App';

  constructor(private apiService: api) { }

  zipcode: string = '';
  temparature: Number = 0;
  country: string = '';
  cityName: string = '';
  mintemparature: Number = 0;
  maxtemparature: Number = 0;
  humidity: Number = 0;
  feelslike: string = '';
  weatherMain: string = '';
  isNight: boolean = false;

  get weatherClass(): string {
    const w = this.weatherMain.toLowerCase();
    if (w === 'thunderstorm') return 'weather-thunderstorm';
    if (w === 'drizzle') return 'weather-drizzle';
    if (w === 'rain') return 'weather-rain';
    if (w === 'snow') return 'weather-snow';
    if (w === 'clear') return this.isNight ? 'weather-clear-night' : 'weather-clear';
    if (w === 'clouds') return 'weather-clouds';
    if (['mist', 'smoke', 'haze', 'dust', 'fog', 'sand', 'ash', 'squall', 'tornado'].includes(w)) return 'weather-mist';
    return '';
  }

  getData(){
    this.apiService.fetchData(this.zipcode).subscribe((response: any) => {
      this.zipcode = '';
      this.temparature = response.main.temp;
      this.country = response.sys.country;
      this.cityName = response.name;
      this.maxtemparature = response.main.temp_max;
      this.mintemparature = response.main.temp_min;
      this.humidity = response.main.humidity;
      this.feelslike = response.weather[0].description;
      this.weatherMain = response.weather[0].main;
      const icon: string = response.weather[0].icon || '';
      this.isNight = icon.endsWith('n');
    });

  }
}
