import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {
  }

  base_url: string = "http://localhost:3000";

  getWeather() {
    return this.httpClient.get<Weather>(this.base_url + '/weather');
  }
}
