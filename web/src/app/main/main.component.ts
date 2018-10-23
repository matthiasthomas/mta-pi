import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { MtaService } from '../mta.service';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  trains: Train[];
  status: {};
  weather: Weather;

  constructor(
    private mtaService: MtaService,
    private weatherService: WeatherService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getTrains();
    this.getStatus();
    this.getWeather();

    setInterval(() => {
      let now = Date.now() / 1000;
      if (this.trains && this.trains.length > 0)
        for (let train of this.trains) {
          let arrival_min = Math.round((train.arrival - now) / 60);
          train.arrival_min = arrival_min >= 0 ? arrival_min : 0;
          train.delay = train.delay != null ? train.delay : "None";
        }
    }, 1000);

    setInterval(() => {
      this.getTrains();
      this.getStatus();
    }, 30000);
  }

  getWeather = (): any => {
    this.weatherService.getWeather()
      .subscribe((data: Weather) => {
        this.weather = data;
      });
  };

  getTrains = () => {
    this.mtaService.getLive()
      .subscribe((data: Train[]) => {
        this.trains = data;
      });
  };

  getStatus = () => {
    this.mtaService.getStatus()
      .subscribe((data: JSON) => {
        this.status = data;
      })
  }
}
