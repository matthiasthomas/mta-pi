import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Train } from './train';

@Injectable({
  providedIn: 'root'
})
export class MtaService {

  constructor(private httpClient: HttpClient) {
  }

  base_url: string = "http://localhost:3000/";

  getLive() {
    return this.httpClient.get<Train[]>(this.base_url + 'live');
  }

  getStatus() {
    return this.httpClient.get<JSON>(this.base_url + 'status');
  }
}
