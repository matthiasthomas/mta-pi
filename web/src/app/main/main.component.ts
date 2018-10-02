import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { MtaService } from '../mta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  trains: Train[];

  constructor(private mtaService: MtaService, private router: Router) { }

  ngOnInit() {
    this.getTrains();

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
    }, 30000);
  }

  getTrains = () => {
    this.mtaService.getLive()
      .subscribe((data: Train[]) => {
        this.trains = data;
      });
  };
}
